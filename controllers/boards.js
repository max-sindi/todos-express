import Board from '../models/Board'
import TodoList from '../models/TodoList'

export const fetchList = async (request, response) => {
  response.json( await Board.find().populate('lists').populate({path: 'lists', populate: {path: 'tasks'}}) )
}

export const fetchSingle = async (request, response) => {
  response.json( await Board.findById(request.params.id).populate('lists').populate({path: 'lists', populate: {path: 'tasks'}}) )
}

export const create = async (request, response) => {
  response.json( await Board.create(request.body))
}

export const update = async (request, response) => {
  response.json( await Board.findByIdAndUpdate(request.body.id, request.body, { new: true }))
}

export const destroy = async (request, response) => {
  response.json( await Board.findByIdAndDelete(request.body.id))
}

export const createTodoList = async (request, response) => {
  const todoList = await TodoList.create(request.body)
  console.log(todoList);
  response.json( await Board.findByIdAndUpdate(request.params.id, {'$push': {lists: todoList.id}}))
}