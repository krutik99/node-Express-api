const mongoose = require("mongoose");
const User = require("../models/user");
const jwt = require('jsonwebtoken');
const JWT_SECRET = "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";

function login(req, res) {
  const { email, password } = req.body;
  console.log(`${email} is trying to login ..`);

  if (email === "krutikgoyani99@gmail.com" && password === "123") {
    return res.json({
      token: jwt.sign({ user: "admin" }, JWT_SECRET),
    });
  }

  return res
    .status(401)
    .json({ message: "The username and password your provided are invalid" });
}
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

