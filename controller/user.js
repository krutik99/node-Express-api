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
    if (data) {
      data.find((x) => {
        if (x.email == email && x.password == password) {
          res.status(200).json(data);
        }
      });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }

  // // User.findOne({ email: { email } }).then((docs) => {
  // //   console.log("Result :", docs);
  // // });

  // console.log("data=======", data);

  // // let datas = CateogiresData.findOne({ email: email });
  // // console.log("datasdatasdatasdatas========", datas);

  // // if (email === "krutikgoyani99@gmail.com" && password === "123") {
  // //   return res.json({
  // //     token: jwt.sign({ user: "admin", name: "krutik" }, JWT_SECRET),
  // //   });
  // // }

  // return res
  //   .status(401)
  //   .json({ message: "The username and password your provided are invalid" });
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
