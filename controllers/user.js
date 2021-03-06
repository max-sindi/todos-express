import User from '../models/User'
import Joi from "joi"

const schema = Joi.object().keys({
  email: Joi.string().email().min(7).max(30),
  password: Joi.string().min(4).max(30),
})

export const getting = async (request, response, next) => {
  const {limit = 20, offset = 0, search = ''} = request.query;
  response.data = await User.find().skip(+offset).limit(+limit);
  next()
}

export const gettingSingle = async (request, response, next) => {
  response.data = await User.findById(request.params.id);
  next()
}

export const creating = async (request, response, next) => {
  const validated = Joi.validate(request.body, schema);

  if(validated.error) {
    return response.status(422).json(validated.error);
  } else {
    response.data = await User.create(validated.value);
    next()
  }
}

export const updating = async (request, response, next) => {
  const {body, params: {id}} = request;
  const validated = Joi.validate(body, schema);

  if(validated.error) {
    response.status(422).json(validated.error)
  } else {
    response.data = await User.findByIdAndUpdate(id, body, {new: true});
    next()
  }
}

export const deleting = async (request, response, next) => {
  response.data = await User.findByIdAndDelete(request.params.id);
  next();
}