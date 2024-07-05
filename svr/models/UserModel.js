const mongoose = require('mongoose');
// const RolesModel = require('../models/RolesModel')
// const Role = RolesModel.Role

const dataSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    middle_name: {
        type: String
    },
    email: {
        required: true,
        type: String
    },
    username: {
        type: String
    },
    password : {
        required: true,
        type: String
    },
    home_address: [
        {
            city: {
                type: String
            },
            region: {
                type: String
            },
            country: {
                type: String
            }
        }
    ],
    EVR_No: {
        type: String
    },
    account_typeID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "account_types"
    },
    roleID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "roles"
    },
    status: {
        type: String
    }
})

module.exports = mongoose.model('accounts', dataSchema)