/* todos controller */
import Todo from '../models/Todo'
import Joi from "joi"

const schema = Joi.object().keys({
  // title: Joi.string().required(),
  // body: Joi.string().required(),
  // isDone: Joi.boolean().default(false)
})

export const getting = async (request, response, next) => {
  const {limit = 20, offset = 0, search = ''} = request.query;
  response.data = await Todo.find().skip(+offset).limit(+limit);
  next()
}

export const gettingSingle = async (request, response, next) => {
  response.data = await Todo.findById(request.params.id);
  next()
}

export const creating = async (request, response, next) => {
  const validated = Joi.validate(request.body, schema);

  if(validated.error) {
    return response.status(422).json(validated.error);
  } else {
    response.data = await Todo.create(validated.value);
    next()
  }
}

export const updating = async (request, response, next) => {
  const {body, params: {id}} = request;
  const validated = Joi.validate(body, schema);

  if(validated.error) {
    response.status(422).json(validated.error)
  } else {
    response.data = await Todo.findByIdAndUpdate(id, body, {new: true});
    next()
  }
}

export const deleting = async (request, response, next) => {
  response.data = await Todo.findByIdAndDelete(request.params.id);
  next();
}
