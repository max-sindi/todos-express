import './db'
require('dotenv').config()

const express = require('express')
const app = require('express')()

setTimeout(main, 1000)

function main() {
  // don't call next() if use in chain below o_O
  app.use(express.static(require('path').join(__dirname, 'public')))

  app.use(
    require('morgan')('dev'), // logger
    express.json(),
    express.urlencoded({extended: false}),
    require('cookie-parser')(),
    require('cors')(),
  )

  require('./routes')(app)
  console.log('Server runned at port 8000')
}

module.exports = app



// function(req, res, next) {
//   next(null)
// },
// function(req, res, next) {
//   console.log('Will not called because previous fn called next(err)')
//   next()
// },
// function errorHandler(err, req, res, next) {
//
//   console.log('azaz?: ', err)
//   next()
// },
// function notErrorHandler(req, res, next) {
//   console.log('AZA!: ')
//   next()
// }