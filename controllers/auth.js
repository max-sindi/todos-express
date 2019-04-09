import User from '../models/User'
import jwt from 'jsonwebtoken'

export const login = async (request, response) => {
  const {email, password} = request.body
  const user = await User.findOne({email})
  let status = 200
  let dataToResponse = null

  if(!user) {
    status = 401
    dataToResponse = 'Invalid email'
  } else {
    const isValid = user.verifyPasswordSync(password)
    if(!isValid) {
      dataToResponse = 'Invalid password'
    } else {
      dataToResponse = {ok: true, token: jwt.sign({})}
    }
  }

  response.status(status).json(dataToResponse)
}