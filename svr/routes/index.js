const express = require('express')
const router = express.Router()

const UserRoutes = require("./UserRoutes")
// const ServiceRoutes = require("./ServiceRoutes")
const RoleRoutes = require("./RoleRoutes")
// const BarangayRoutes = require("./BarangayRoutes")
const AccountTypeRoutes = require("./AccountTypeRoutes")
// const BeneficiaryRoutes = require("./BeneficiaryRoutes")

const registerRoutes = (app) => {
  app.use('/users', UserRoutes)
  app.use('/login', UserRoutes)
//   app.use('/services', ServiceRoutes)
  app.use('/roles', RoleRoutes)
//   app.use('/barangays', BarangayRoutes)
  app.use('/acc-type', AccountTypeRoutes)
//   app.use('/beneficiaries', BeneficiaryRoutes)
}

module.exports = registerRoutes