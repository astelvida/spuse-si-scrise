
const express = require('express')
const speech = require('@google-cloud/speech');
const { Storage } = require('@google-cloud/storage');
const multer = require('multer')
const fs = require('fs');

const router = express.Router()

const upload = multer({ dest: './uploads/' })
const client = new speech.SpeechClient();
const storage = new Storage();
const BUCKET = 'recordings777'

async function uploadFile(filePath, filename) {
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
  const duration = Number(req.body.duration)
  await uploadFile(path, filename)
  await makePublic(filename)


  const request = {
    audio: {
      // content: fs.readFileSync(path).toString('base64'),
      uri: `gs://${BUCKET}/${filename}`,
    },
    config: {
      sampleRateHertz: 16000,
      // languageCode: 'ro-RO',
      languageCode: 'ro-RO',
      enableAutomaticPunctuation: true,
      encoding: 'FLAC'
    },
  };

  const [mediaType, codec] = mimetype.split('/')

  switch (codec) {
    case 'flac':
      request.config.encoding = 'FLAC'
      break;
    case 'mp3':
      request.config.encoding = 'MP3'
      break;
    default:
      request.config.encoding = 'LINEAR16'
      break;
  }


  let result
  if (duration < 60) {
    result = await client.recognize(request);
    console.log('RECOGNIZE');
  } else {
    const [operation] = await client.longRunningRecognize(request);
    result = await operation.promise();
    console.log(result);
    console.log('LONG RUNNING RECOGNIZE');
  }

  const transcription = result[0].results
    .map(result => result.alternatives[0].transcript)
    .join('\n');

  console.log(`Transcription: ${transcription}`);

  res.json({ transcription })
});

module.exports = router
