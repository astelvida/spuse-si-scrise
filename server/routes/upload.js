
const express = require('express')
const speech = require('@google-cloud/speech').v1p1beta1;
const { Storage } = require('@google-cloud/storage');
const multer = require('multer')
const fs = require('fs');

const router = express.Router()

function fileFilter(req, file, cb) {
  const allowedTypes = ['audio/mp3', 'audio/flac', 'audio/wav', 'audio/mpeg']
  console.log(file.mimetype);
  if (!allowedTypes.includes(file.mimetype)) {
    const error = new Error("Wrong file type")
    error.code = 'WRONG_FILE_TYPE'
    console.log('error', error.message);
    cb(error, null)
    return
  }
  cb(null, true)
}

const upload = multer({ dest: './uploads/', fileFilter })
const client = new speech.SpeechClient();
const storage = new Storage();
const BUCKET = 'recordings777'
const { getAudioDurationInSeconds } = require('get-audio-duration')

async function uploadFile(filePath) {
  await storage.bucket(BUCKET).upload(filePath, {
    metadata: {
      cacheControl: 'public, max-age=31536000',
    },
  });
}

async function makePublic(filename) {
  await storage.bucket(BUCKET).file(filename).makePublic();
  console.log(`gs://${BUCKET}/${filename} is now public.`);
}

router.post('/file', upload.single('file'), async (req, res) => {
  console.log(req.file);
  const { path, mimetype, filename } = req.file


  const request = {
    audio: {
      uri: `gs://${BUCKET}/${filename}`,
      // content: fs.readFileSync(path).toString('base64')
    },
    config: {
      // sampleRateHertz: ,
      languageCode: 'ro-RO',
      enableAutomaticPunctuation: true,
      model: "default",
    },
  };

  const codec = mimetype.split('/')[1]
  switch (codec) {
    case 'flac':
      request.config.encoding = 'FLAC'
      break;
    case 'mpeg':
    case 'mp3':
      request.config.encoding = 'MP3'
      break;
    default:
      request.config.encoding = 'LINEAR16'
      break;
  }

  console.log(request);
  let result
  let transcript
  try {
    await uploadFile(path, filename)
    await makePublic(filename)
    fs.unlink(path, () => console.log(path + ' removed.'))
    
    result = await client.recognize(request);
  } catch (err) {

    if (err.code == 3 && err.details.includes('Sync input too long')) {
      const [operation] = await client.longRunningRecognize(request);
      result = await operation.promise();
    } else {
      
      console.log(err);
      res.json({ error: err.details || err })
      return
    }
  }

  transcript = result[0].results
    .map(result => result.alternatives[0].transcript)
    .join('\n')
  res.json({ transcript })
  console.log(`Transcript: ${transcript}`);
});



router.post('/request', async (req, res) => {

  // From a local path...

  let result

  try {
    result = await client.recognize(request);
  } catch (error) {
    if (error.code == 3) {
      const [operation] = await client.longRunningRecognize(request);
      result = await operation.promise();
    }
  }
  console.log({ result });
  const transcript = result[0].results
    .map(result => result.alternatives[0].transcript)
    .join('\n');

  console.log(`Transcript: ${transcript}`);

  res.json({ transcript })
});

router.use((err, req, res, next) => {
  if (err.code === 'WRONG_FILE_TYPE') {
    res.status(422).json({ error: 'File type not supported' })
  }
})


module.exports = router
