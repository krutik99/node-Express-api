const express = require("express");
var router = express();
const create = require("../controller/user");
const login = require("../controller/user");

const view = require("../controller/user");
const update = require("../controller/user");
const remove = require("../controller/user");
const bodyparser = require("body-parser");

router.use(bodyparser.json());
router.post("/create", create.create);
router.post("/login", login.login);
router.patch("/:id", update.update);

router.get("/", view.view);
// router.patch('/:id',update.update)
// router.delete('/delete/:id',remove.remove)

module.exports = router;
