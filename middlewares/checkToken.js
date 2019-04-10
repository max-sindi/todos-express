const jwt = require('jsonwebtoken')

const checkToken = (request, response, next) => {
  const token = request.headers['authorization']

  if(!token) {
    response.status(401).json({ok: false, message: 'Token is not provided'})
  } else {
    jwt.verify(token, 'azaz', (err, decoded) => {
      if(err) {
        response.status(401).json({ok: false, message: 'Token is not valid'})
      } else {
        request.decoded = decoded
        next()
      }
    })
  }
}

export default checkToken