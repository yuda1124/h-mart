import 'reflect-metadata';
import { createConnection } from 'typeorm';
import createError from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import passport from 'passport';
import passportConfig from './passport';
import cors from 'cors';

import indexRouter from './routes/index';
import apiRouter from './routes/apiRouter';

createConnection()
  .then(() => {
    console.log('Database Connected :)');
  })
  .catch((error) => console.log(error));

const app = express();

interface Error {
  status?: number;
  message?: string;
}
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, '../client/build'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(passport.initialize());
passportConfig();

app.use('/api', apiRouter);
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500).json({ messages: [err.message] });
});

module.exports = app;
