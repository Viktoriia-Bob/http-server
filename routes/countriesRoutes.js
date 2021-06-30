const express = require('express');
const router = express.Router();
const countriesController = require('../controllers/countriesController');

router.get('/', countriesController.listCountries);
router.get('/:id', countriesController.getCountryById);
router.delete('/:id', countriesController.deleteCountryById);
router.post('/', countriesController.create);

module.exports = router;