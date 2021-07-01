const mongoose = require('mongoose');
const app = require('./core');

(async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin12345@cluster0.62gyx.mongodb.net/AllData', {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        app.listen();
    } catch (err) {
        console.log(err);
    }
})();