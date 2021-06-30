const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/', usersController.listUsers);
router.get('/:id', usersController.getUserById);
router.delete('/:id', usersController.deleteUserById);
router.post('/', usersController.create);
router.put('/:id/:countryId', usersController.changeCountry);

module.exports = router;