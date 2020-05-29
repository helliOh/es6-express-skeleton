import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from 'morgan';

import router from './routes';
import socketHandler from './socket'

const port = 4000;
const app = express();
app.io = require('socket.io')();

app.io.on('connection', socketHandler);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

router(app);

module.exports = app;
