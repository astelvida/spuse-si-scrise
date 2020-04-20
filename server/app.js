const express = require('express');
const logger = require('morgan');
const cors = require('cors')
const uploadRouter = require('./routes/upload')

const app = express();

app.use(logger('dev'))
app.use('/upload', uploadRouter)


app.listen(3344, () => console.log('lISTENING ON PORT 3344'))

module.exports = app;


