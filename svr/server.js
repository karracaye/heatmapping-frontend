const express = require('express')
const routes = require('./routes/index.js');
const mongooseDatabase = require('./database/mongoose.js');
const cors = require('cors');
const port = 8000

const app = express()
app.use(cors())
app.use( express.json() )
routes(app)

mongooseDatabase.connectToMongoDB()

app.listen(port, () => {
  console.log(`[SERVER] Running on development port ${ port }`)
})