import User from '../models/User'

/***
  GET ALL
***/
export const getAll = async (request, response) => {
  let status = 200
  let dataToResponse = null

  try {
    dataToResponse = await User.find()
  } catch(e) {
    status = 500
    dataToResponse = e
  }
  
  response.status(status).send(dataToResponse)
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
