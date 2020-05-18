const express = require('express');

const router = express.Router(); 

const userController = require('../../controllers/v1/users-controllers');

router.post('/create', userController.createUser );
router.post('/update', userController.updateUser);
router.post('/delete', userController.delUser);
router.post('/get-all', userController.getUser);


module.exports = router; 