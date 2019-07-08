import sendResponse from './middlewares/sendResponse'
import checkToken from "./middlewares/checkToken"
import * as usersController from "./controllers/user"
import * as authController from './controllers/auth'
import * as todosController from './controllers/todos'
import * as weatherController from './controllers/weather'

const router = require('express-promise-router')()

module.exports = (app) => {
  router.get('/api/services/ping', function(req, res, next) {
    res.status(200).json({ok: true, message: 'Successful lifecheck'})
  })

  /* AUTH */
  router.post('/api/auth/login', authController.login)
  router.post('/api/auth/signup', authController.signup)
  router.post('/api/auth/email-available', authController.isEmailAvailable)
  router.get('/api/auth/check-token', checkToken, authController.isTokenValid)

  router.get('/api/weather', weatherController.get)
  router.get('/api/cities', weatherController.cities)


  /* USERS */
  router.get('/api/users/', /*checkToken,*/ usersController.getting, sendResponse)
  router.post('/api/users/', /*checkToken,*/ usersController.creating, sendResponse)
  router.get('/api/users/:id', /*checkToken,*/ usersController.gettingSingle, sendResponse)
  router.put('/api/users/:id', /*checkToken,*/ usersController.updating, sendResponse)
  router.delete('/api/users/:id', /*checkToken,*/ usersController.deleting, sendResponse)


  /* TODOS */
  router.get('/api/todos/', /*checkToken,*/ todosController.getting, sendResponse)
  router.post('/api/todos/', /*checkToken,*/ todosController.creating, sendResponse)
  router.get('/api/todos/:id', /*checkToken,*/ todosController.gettingSingle, sendResponse)
  router.put('/api/todos/:id', /*checkToken,*/ todosController.updating, sendResponse)
  router.delete('/api/todos/:id', /*checkToken,*/ todosController.deleting, sendResponse)


  /* USE ROUTER */
  app.use('/', router)
}
