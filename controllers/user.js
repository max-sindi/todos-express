import User from '../models/User'
import queryString from "query-string"

/***
  GET ALL
***/
export const getAll = async (request, response) => {
  let status = 200
  let dataToResponse = null
  const limit = parseInt(request.query.limit) || 20
  const skip = parseInt(request.query.skip) || 0
  const search = request.query.search || 'sa'

  try {
    // dataToResponse = await User.find({$text: {$search: search}}).skip(skip).limit(limit)
    dataToResponse = await User.find().skip(skip).limit(limit)
  } catch(e) {
    status = 500
    dataToResponse = e
  }
  response.status(status).json(dataToResponse)
}

/***
  CREATE ONE
***/
export const createOne = async (request, response) => {
  let status = 200
  let dataToResponse = null

  try {
    dataToResponse = await User.create(request.body)
  } catch(e) {
    status = 500
    dataToResponse = e
  }

  response.status(status).send(dataToResponse)
}

/***
  UPDATE ONE
***/
export const updateOne = async (request, response) => {
  const {body, params: {id}} = request
  let status = 200
  let dataToResponse = null

  try {
    dataToResponse = await User.findByIdAndUpdate(id, body, {new: true})
  } catch(e) {
    status = 500
    dataToResponse = e
  }

  response.status(status).send(dataToResponse)
}

/***
  DELETE ONE
***/
export const deleteOne = async (request, response) => {
  const {id} = request.params
  let status = 200
  let dataToResponse

  try {
    await User.findByIdAndDelete(id)
    dataToResponse = {ok: true}
  } catch (e) {
    status = 500
    dataToResponse = e
  }

  response.status(status).send(dataToResponse)
}

/***
  GET ONE
***/
export const getOne = async (request, response) => {
  const {id} = request.params
  let status = 200
  let dataToResponse = null

  try {
    dataToResponse = await User.findById(id)
  } catch(e) {
    status = 500
    dataToResponse = e
  }

  response.status(status).send(dataToResponse)
}
