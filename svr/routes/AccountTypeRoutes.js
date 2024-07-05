const express = require('express')
const router = express.Router()

const AccountTypeController = require('../controllers/AccountTypeController');

router.post('/', AccountTypeController.addAccount);
router.get('/', AccountTypeController.getAccount)

module.exports = router