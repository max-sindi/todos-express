import * as authController from '../controllers/auth'
const router = require('express').Router()

router.post('/login', authController.login)
// router.post('/signup', authController.signup)

// router.get('/', )
// router.put('/:id', )
// router.delete('/:id', )
// router.get('/:id', )

module.exports = router