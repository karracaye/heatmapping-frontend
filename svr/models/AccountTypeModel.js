const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    type: {
        type: String
    }
})

module.exports = mongoose.model("account_types", AccountSchema)