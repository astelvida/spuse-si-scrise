const express = require('express');
const logger = require('morgan');
var ss = require('socket.io-stream');
const fs = require('fs')
const cors = require('cors')
const http = require('http')

const speech = require('@google-cloud/speech').v1p1beta1;
const uploadRouter = require('./routes/upload')

const app = express();

app.use(logger('dev'))
app.use('/upload', uploadRouter)
app.listen(3344, () => console.log('App listening on 3344'))

const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(80, () => console.log('Server listening on port 80'));


const client = new speech.SpeechClient();
const stream = ss.createStream();


io.on('connection', (socket) => {  
  socket.on('AUDIO_STREAM', (stream) => {
      // }
  });
});


module.exports = app;


