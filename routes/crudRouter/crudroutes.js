const express = require('express')

const router = express.Router()

//crud controller imported
const crudController = require('../../controller/crudController/crud')

router.get('/list',crudController.usersList);
router.post('/create',crudController.create);
router.delete('/delete',crudController.delete)


module.exports = router