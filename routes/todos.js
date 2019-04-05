import express from 'express'
import Todo from "../models/Todo"

const router = express.Router()

router.get('/', (req, res) => {
  Todo.find()
    .then(data => res.send(data))
    .catch(err => console.error('Something went wrong'))
})

router.post('/', (req, res) => {
  const {body} = req

  /*
  * We can create new object in several ways, what is better?

    const todo = new Todo(body)
    todo.save()
  **/
   Todo.create(body)
    .then(data => res.send(data))
    .catch(err => console.error('Can"t create new todo:', err.message))
})

router.put('/:id', function handlePut(req, res) {
    Todo.findByIdAndUpdate(req.params.id, req.body)
        .then(data => res.send(data))
        .catch(err => console.log('Can"t update todo by id,', err.message))
})
router.delete('/:id', async function handlePut(req, res) {
  // why todo by id not found but catch doesn't fire and then sends 200 OK
  var todo = await Todo.findById(req.params.id)
  console.log(todo)
    Todo.findByIdAndDelete(req.params.id)
        .then(data => res.send(data))
        .catch(err => console.log('Can"t delete todo by id,', err.message))
})



export default router
