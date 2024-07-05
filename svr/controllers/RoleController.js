const RolesModel = require('../models/RolesModel')

exports.getRoles = async function(req, res) {
    const roles = await RolesModel.find()
    res.json(roles)
}

exports.addRole = async function(req, res) {
    const newRole = req.body.role_type
    
    const addNewRole = await RolesModel.create({
        "role_type": newRole
    })

    res.json({
        'success': true,
        'data': addNewRole
    })
}

exports.updateRoles = async function(req, res) {
    const id = req.body.id
    const body = req.body
    delete body.id
    const updateRoleType = await RolesModel.findByIdAndUpdate(id, body)
    res.json({
        'success': true,
        'data': updateRoleType
    })
}

exports.deleteRoles = async function(req, res) {
    const id = req.body.id
    const deleteRole = await RolesModel.findByIdAndDelete(id);
    res.json({
        'success': true,
        'data': deleteRole
    })
}