const mongoose = require('mongoose');

exports.connectToMongoDB = function(){
    const mongooseURI = "mongodb://localhost:27017/heatmapping";
    mongoose.connect(mongooseURI, {
        useUnifiedTopology: true
    }).then(res => {
        console.log("[SERVER] Connected to MongoDB")
    })
}