import express from 'express'
import Todo from "../models/Todo"
const router = express.Router()

/***
  GET ALL HANDLER
 ****/
router.get('/', (req, res) => {
  Todo.find()
    .then(data => res.send(data))
    .catch(err => {
      console.error("Can't get all todos: ", err.message)
      res.send(err)
    })
})
/***
 GET SINGLE BY ID
 **/
router.get('/:id', (req, res) => {
  Todo.findById(req.params.id)
    .then(data => res.send(data))
    .catch(err => {
      console.error("Can't get todo by id: ", err.message)
      res.send(err)
    })
})

/***
  POST HANDLER
 ***/
router.post('/', (req, res) => {
  const {body} = req
  /*
  * We can create new object in several ways, what is better?

    const todo = new Todo(body)
    todo.save()
  **/
   Todo.create(body)
    .then(data => res.send(data))
    .catch(err => {
      console.error("Can't create todo: ", err.message)
      res.send(err)
    })
})

/***
  PUT HANDLER
 ****/
router.put('/:id', function handlePut(req, res) {
    Todo.findByIdAndUpdate(req.params.id, req.body)
        .then(data => res.send(data))
        .catch(err => {
          console.error('Can"t update todo by id: ', err.message)
          res.send(err)
        })
})

/***
 DELETE HANDLER
 * ****/
router.delete('/:id', function handlePut(req, res) {
  // why todo by id not found but catch doesn't fire and then sends 200 OK
  Todo.findByIdAndDelete(req.params.id)
      .then(data => res.send(data))
      .catch(err => {
        console.log('Can"t delete todo by id: ', err.message)
        res.send(err)
      })
})



module.exports = router