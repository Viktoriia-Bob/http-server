const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    userId: {type:Number, required: true},
    name: {type:String, required: true},
    age: {type:Number, required: true},
    countryId: {type:Number}
});

const users = model('User', userSchema);

exports.listUsers = () => {
    return users.find({}).lean();
}

exports.getById = (id) => {
    return users.findOne({userId: id}).lean();
}

exports.deleteById = (id) => {
    return users.deleteOne({userId: id}).lean();
}

exports.create = (body) => {
    users.create(body, err => {
        if (err) throw err;
    });
    return users.findOne({name: body.name}).lean();
}

exports.changeCountry = (currentUserId, newCountryId) => {
    users.findOneAndUpdate({userId: currentUserId}, {countryId: newCountryId}, {new: true}, (err, result) => {
        if (err) throw err;
    });
    return users.findOne({userId: currentUserId}).lean();
}