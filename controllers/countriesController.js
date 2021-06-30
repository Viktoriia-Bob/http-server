const countriesService = require('../services/countriesServices');

exports.listCountries = async (req, res) => {
    const countries = await countriesService.listCountries();
    res.status(200).json(countries);
}

exports.getCountryById = async (req, res) => {
    const id = +req.params.id;
    const obj = await countriesService.getById(id);
    res.status(200).json(obj);
}

exports.deleteCountryById = async(req, res) => {
    const id = +req.params.id;
    await countriesService.deleteById(id);
    res.redirect('/countries');
}

exports.create = async(req, res) => {
    const newCountry = await countriesService.create(req.body);
    res.status(200).json(newCountry);
}