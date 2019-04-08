import * as userController from '../controllers/userController'
const router = require('express').Router()

router.get('/', userController.getAll)
router.post('/', userController.createOne)
router.put('/:id', userController.updateOne)
router.delete('/:id', userController.deleteOne)
router.get('/:id', userController.getOne)

module.exports = router