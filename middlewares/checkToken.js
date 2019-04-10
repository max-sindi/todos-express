const checkToken = (request, response, next) => {
  const token = request.headers['Authorization']
  let status = 200
  let dataToResponse = null

  if(!token) {
    dataToResponse = {ok: false, message: 'Token is not provided'}
  } else {
    jswt.verify(token, 'asdasdasd',)
  }
}

export default checkToken