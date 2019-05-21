import * as usersController from "./controllers/user"
import sendResponse from './middlewares/sendResponse'
import checkToken from "./middlewares/checkToken"
import * as authController from './controllers/auth'
import * as todosController from './controllers/todos'

const router = require('express-promise-router')()

module.exports = (app) => {
  router.get('/api/', function(req, res, next) {
    res.status(200).json({ok: true, message: 'Successful life-check'})
  })

  /* AUTH */
  router.post('/api/auth/login', authController.login)


  /* USERS */
  router.get('/api/users/', checkToken, usersController.getting, sendResponse)
  router.post('/api/users/', checkToken, usersController.creating, sendResponse)
  router.get('/api/users/:id', checkToken, usersController.gettingSingle, sendResponse)
  router.put('/api/users/:id', checkToken, usersController.updating, sendResponse)
  router.delete('/api/users/:id', checkToken, usersController.deleting, sendResponse)


  /* TODOS */
  router.get('/api/contacts/', todosController.get, sendResponse)
  router.post('/api/contacts/', todosController.create, sendResponse)
  router.get('/api/contacts/:id',todosController.getSingle, sendResponse)
  router.put('/api/contacts/:id', todosController.update, sendResponse)
  router.delete('/api/contacts/:id', todosController.destroy, sendResponse)


  /* USE ROUTER */
  app.use('/', router)
}
