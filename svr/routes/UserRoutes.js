const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')
// const auth = require('../middleware/authentication')

// router.get('/', auth.requireAuth, UserController.getUsers)
router.get('/', UserController.getUsers)
router.get('/roles', UserController.getUserRoles)
router.post('/addUser', UserController.addUser)
router.post('/', UserController.login)
router.put('/', UserController.editUser)
router.delete('/', UserController.deleteUser)


module.exports = router