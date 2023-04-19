const express = require('express')
var router = express()
const create = require('../controller/categories')
const view = require('../controller/categories')
const update = require('../controller/categories')
const remove = require('../controller/categories')
const bodyparser = require('body-parser');

router.use(bodyparser.json())
router.post('/create',create.create)
router.get('/',view.view)
router.patch('/:id',update.update)
router.delete('/delete/:id',remove.remove)


module.exports = router