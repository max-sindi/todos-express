import * as userController from '../controllers/user'
import checkToken from '../middlewares/checkToken'
const router = require('express').Router()

router.get('/', /*checkToken, */ userController.getAll)
router.post('/', userController.createOne)
router.put('/:id', userController.updateOne)
router.delete('/:id', userController.deleteOne)
router.get('/:id', userController.getOne)

module.exports = router