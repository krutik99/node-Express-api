const mongoose = require("mongoose");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const Categoires = require("../models/categories");
const JWT_SECRET =
  "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";

async function login(req, res) {
  const { email, password } = req.body;
  console.log(`${email} is trying to login ..`);
  try {
    let data = await User.find();
    console.log(JSON.stringify(data));
    if (data) {
      data.find((x) => {
        if (x.email == email && x.password == password) {
          const token = jwt.sign({ email: x.email }, "secretkeyappearshere", {
            expiresIn: "2h",
          });
          res.status(200).json({ stutsCode: 200, token: token, error: 0 });
        }
      });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
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

exports.update = async (req, res) => {
  const id = req.params.id;

  if (!req.body) {
    res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }
  await User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `User not found.`,
        });
      } else {
        res.send({ message: "User updated successfully." });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

module.exports.create = create;
module.exports.view = view;
module.exports.login = login;
