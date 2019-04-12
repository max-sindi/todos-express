import User from '../models/User'
import jwt from 'jsonwebtoken'
const secret = process.env.JWT_SECRET_KEY

export const login = async (request, response) => {
  const {email, password} = request.body
  const user = await User.findOne({email})
  const errorMessage = 'Wrong credentials'
  let status = 200
  let dataToResponse = null

  if(!user) {
    status = 401
    dataToResponse = errorMessage
  } else {
    const isValid = user.verifyPasswordSync(password)
    if(!isValid) {
      status = 401
      dataToResponse = errorMessage
    } else {
      dataToResponse = {
        ok: true,
        token: jwt.sign(
          { email },
          secret,
          { expiresIn: '24h' }
        )
      }
    }
  }

  response.status(status).json(dataToResponse)
}