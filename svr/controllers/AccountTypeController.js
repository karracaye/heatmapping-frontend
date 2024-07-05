const AccountTypeModel = require('../models/AccountTypeModel')

exports.addAccount = async function(req, res) {
    const data = req.body
    const account = await AccountTypeModel.create(data)
    console.log(req.body)
    console.log("awww")
    res.json(account)
}

exports.getAccount= async function(req, res) {
    const accounttype = await AccountTypeModel.find()
    res.json(accounttype)
}