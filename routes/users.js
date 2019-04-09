import * as userController from '../controllers/userController'
import passport from 'passport'
const router = require('express').Router()

router.get(
  '/',
  // passport.authenticate('bearer', { session: false }),
  userController.getAll
)
router.post('/', userController.createOne)
router.put('/:id', userController.updateOne)
router.delete('/:id', userController.deleteOne)
router.get('/:id', userController.getOne)

module.exports = router