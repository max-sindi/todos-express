import './db';
require('dotenv').config();

const express = require('express');
const app = require('express')();

function main() {
  // don't call next() if use in chain below o_O
  app.use(express.static(require('path').join(__dirname, 'public')));

  app.use(
    require('morgan')('dev'), // logger
    express.json(),
    express.urlencoded({extended: false}),
    require('cookie-parser')(),
    require('cors')(),
  );

  // before api declaring errorHandler
  app.use((err, request, response, next) => {
    console.log('Error before api declaring: ', err.message)
  })

  require('./routes')(app);

  // api errorHandler
  app.use((err, request, response, next) => {
    console.log('Error in response')
    response.json(err)
  })

  console.log('Server runned at port 8000');
}


main();

module.exports = app