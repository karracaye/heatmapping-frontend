const UserModel = require("../models/UserModel")
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

exports.login = async function(req, res){
  const inputEmail = req.body.email;
  const inputPassword = req.body.password;

  // const saltRounds = 10
  // let hashed_pass;
  // bcrypt.genSalt(saltRounds, (err, salt) => {
  //   bcrypt.hash(inputPassword, salt, (err, hash) => {
  //     if (err) {
  //         return;
  //     }
  //     console.log('Hashed password:', hash);
  //     hashed_pass = hash
  //   });
  // });
  
  const credentials = await UserModel.find({email: inputEmail})
  console.log(credentials[0].email)
  bcrypt.compare(inputPassword, credentials[0].password, function(err, result) {
    if (err) throw err;
    if (result === true) {
        if (Object.keys(credentials).length !== 0) {
          let token;
          token = jwt.sign(
            {
                id: credentials[0]._id
            },
            "secretkey",
            {
                expiresIn: "1h"
            }
          );
      
          res.status(201).json({
            success: true,
            data: {
                id: credentials[0]._id,
                token: token
                },
            message: "You have successfully logged in"
          });
        }
    } else {
        res.json({
          success: false,
          data: {
            message: 'Invalid credentials'
          }
        })
    }
  });

}

exports.getUsers = async function(req, res){
    // console.log(req.body)
    const body = req.body
    let queryResult;
    if (Object.keys(body).length !== 0) {
        // console.log(req.body)
        queryResult = await UserModel.find({_id: {$eq: body.id}}).populate('roleID').populate('account_typeID')
        console.log(queryResult)
    } else {
        queryResult = await UserModel.find().populate('roleID').populate('account_typeID')
    }

    const userList = []
    for (let i=0; i < queryResult.length; i++) {
    let role_type;
    if (queryResult[i].account_typeID.type == "Employee") {
        role_type = queryResult[i].roleID.role_type
    } else {
        role_type = "N/A"
    }
    const userDetails = {
        'id': queryResult[i]._id,
        'fullname': queryResult[i].firstname.concat(" ", queryResult[i].lastname),
        'email': queryResult[i].email,
        'account': queryResult[i].account_typeID.type,
        'role': role_type
    }
    userList.push(userDetails)
    }
    res.json(userList)
//   res.json(allUsers)
}

exports.getUserRoles = async function(req, res){
  const users = await UserModel.find({roleID: {$exists: true}}).populate('roleID')
  const userList = []
  for (let i=0; i < users.length; i++) {
    const userDetails = {
      'fullname': users[i].firstname.concat(" ", users[i].lastname),
      'email': users[i].email,
      'role': users[i].roleID.role_type
    }
    userList.push(userDetails)
    console.log(userList)
  }

  res.json(userList)
  // res.json(users)
}

exports.addUser = async function(req, res){
  const data = req.body;
  const addNewUser = await UserModel.create(data)
  res.json({
    'success': true,
    'data': addNewUser
  })
}

exports.editUser = async function(req, res){
  const id = req.body.id
  const data = req.body
  delete data.id

  const editUserDetails = await UserModel.findByIdAndUpdate(id, data)
  res.json({
    'success': true,
    'data': editUserDetails
  })
}

exports.deleteUser = async function(req, res){
  const id = req.body.id
  const deleteUser = await UserModel.findByIdAndDelete(id);
  res.json({
      'success': true,
      'data': deleteUser
  })
}