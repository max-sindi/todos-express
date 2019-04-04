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
  
  const todo = new Todo(body)
  console.log(body)
  todo.save()
    .then(data => res.send(data))
    .catch(err => console.error(err))
})

export default router
