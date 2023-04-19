const mongoose = require("mongoose");
const User = require("../models/user");
const jwt = require('jsonwebtoken');
const JWT_SECRET = "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";

const { Auth } = require("two-step-auth");
// function login(req, res) {
//   const { email, password } = req.body;
//   console.log(`${email} is trying to login ..`);

//   if (email === "krutikgoyani99@gmail.com" && password === "123") {
//     return res.json({
//       token: jwt.sign({ user: "admin" }, JWT_SECRET),
//     });
//   }

//   return res
//     .status(401)
//     .json({ message: "The username and password your provided are invalid" });
// }

async function login(emailId) {
  const res = await Auth(emailId, "Company Name");
  console.log(res);
  console.log(res.mail);
  console.log(res.OTP);
  console.log(res.success);
}

// This should have less secure apps enabled
LoginCredentials.mailID = "krutikgoyani100@gmail.com"; 
  
// You can store them in your env variables and
// access them, it will work fine
LoginCredentials.password = "okmutgbdwzgqyjpo"; 
LoginCredentials.use = true;
  
// Pass in the mail ID you need to verify
login("verificationEmail@anyDomain.com"); 

function create(req, res, next) {
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  let user = new User({
    name,
    email,
    password,
  });
  user.save().then((data) => {
    res.send(data);
  });
}

function view(req, res, next) {
  User.find({}).then((data) => {
    res.send(data);
  });
}

module.exports.create = create;
module.exports.view = view;
module.exports.login = login;

