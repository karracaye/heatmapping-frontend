const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
    role_type:{
        type: String
    }
})

module.exports = mongoose.model('roles', RoleSchema)