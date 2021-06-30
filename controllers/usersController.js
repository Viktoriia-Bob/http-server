const userService = require('../services/usersServices');
const countryService = require('../services/countriesServices');

exports.listUsers = async (req, res) => {
    const users = await userService.listUsers();
    res.status(200).json(users);
}

exports.getUserById = async function (req, res) {
    const id = +req.params.id;
    const obj = await userService.getById(id);
    obj.country = await countryService.getById(+obj.countryId);
    res.status(200).json(obj);
}

exports.deleteUserById = async(req, res) => {
    const id = +req.params.id;
    await userService.deleteById(id);
    res.redirect('/users');
}

exports.create = async(req, res) => {
    const newUser = await userService.create(req.body);
    res.status(200).json(newUser);
}

exports.changeCountry = async(req, res) => {
    const newUsersCountry = await userService.changeCountry(+req.params.id, +req.params.countryId);
    res.status(200).json(newUsersCountry);
}