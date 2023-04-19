const mongoose = require("mongoose");
const Categoires = require("../models/categories");

function create(req, res, next) {
  let name = req.body.name;
  let createdBy = req.body.createdBy;
  let createdDate = Date.now();
  let modefidBy = req.body.modefidBy;
  let modefidDate = req.body.modefidDate;

  let categories = new Categoires({
    name,
    createdBy,
    createdDate,
    modefidBy,
    modefidDate,
  });
  categories.save().then((data) => {
    res.send(data);
  });
}

function view(req, res, next) {
  Categoires.find({}).then((data) => {
    res.send(data);
  });
}

function update(req, res, next) {
  Categoires.findByIdAndUpdate(req.params.id, req.body, (err, emp) => {
    if (err) {
      return res
        .status(500)
        .send({ error: "Problem with Updating the Employee recored " });
    }
    res.send({ success: "Updation successfull" });
  });
}

function remove(req, res, next) {
  Categoires.findByIdAndDelete(req.params.id, (err, emp) => {
    if (err) {
      return res
        .status(500)
        .send({ error: "Problem with Deleting the Employee recored " });
    }
    res.send({ success: "Employee deleted successfully" });
  });
}

module.exports.create = create;
module.exports.view = view;
module.exports.update = update;
module.exports.remove = remove;
