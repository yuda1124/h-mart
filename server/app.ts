import createError from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import passport from 'passport';
import passportConfig from './passport';

import indexRouter from './routes/index';
import apiRouter from './routes/apiRouter';

const app = express();

interface Error {
  status?: number;
  message?: string;
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, '../client/build'));
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(passport.initialize());
passportConfig();

app.use('/api', apiRouter);
app.use('*', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;
