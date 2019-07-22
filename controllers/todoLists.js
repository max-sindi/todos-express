import TodoList from '../models/TodoList'
import Todo from '../models/Todo'

export const fetchList = async (request, response) => {
  response.json( await TodoList.find().populate('tasks'))
}

export const fetchSingle = async (request, response) => {
  response.json( await TodoList.findById(request.params.id).populate('tasks'))
}

export const create = async (request, response) => {
  response.json( await TodoList.create(request.body))
}

export const update = async (request, response) => {
  response.json( await TodoList.findByIdAndUpdate(request.body.id, request.body, { new: true }))
}

export const destroy = async (request, response) => {
  response.json( await TodoList.findByIdAndDelete(request.body.id))
}

export const createTodo = async (request, response) => {
  const todo = await Todo.create(Object.assign({}, request.body, {todoListId: request.params.id}))
  response.json( await TodoList.findByIdAndUpdate(request.params.id, {'$push': {tasks: todo.id}}))
}