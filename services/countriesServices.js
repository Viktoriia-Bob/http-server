const {Schema, model} = require('mongoose');

const countrySchema = new Schema({
    countryId: {type:Number, required: true},
    name: {type: String, required: true, unique: true},
    population: Number
});

const countries = model('Country', countrySchema);

exports.listCountries = () => {
    return countries.find({}).lean();
}

exports.getById = (id) => {
    return countries.findOne({countryId: id}).lean();
}

exports.deleteById = (id) => {
    return countries.deleteOne({countryId: id}).lean();
}

exports.create = (body) => {
    countries.create(body, (err) => {
        if (err) throw err;        
    });
    return countries.findOne({name: body.name}).lean();
}