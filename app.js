'use strict';

// const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(new Error(404));
});

// error handler
app.use((err, req, res) => {  
    res
        .status(err.status || 500)
        .json({
            message : err.message || '' 
        });
});

module.exports = app;
