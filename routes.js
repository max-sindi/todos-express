import * as usersController from "./controllers/user"

module.exports = (app) => {
  app.get('api/', function(req, res, next) {
    res.status(200).json({ok: true, message: 'Successful lifecheck'})
  })

  /***
    USERS
  ***/
  app.get('/api/users/', /*checkToken, */ usersController.getAll)
  app.post('/api/users/', usersController.createOne)
  app.put('/api/users/:id', usersController.updateOne)
  app.delete('/api/users/:id', usersController.deleteOne)
  app.get('/api/users/:id', usersController.getOne)
  
  /***
    TODOS
  ***/
}