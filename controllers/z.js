import ZModel from '../models/Z'

const redis = require("redis");
const client = redis.createClient();
const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);


export const getState = async (request, response) => {
  console.log('im here')
  return await ZModel.find()
}

export const update = async (request, response) => {
  try {
    console.log('im in update, data:', request.body)
    client.set('z', JSON.stringify(request.body.template))
    response.json({
      template: JSON.parse (await getAsync('z'))
    })
  } catch (e) {
    response.status(500).send(e)
  }
}