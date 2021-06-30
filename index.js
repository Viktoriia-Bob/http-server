const express = require('express');
const countriesRoutes = require('./routes/countriesRoutes');
const usersRoutes = require('./routes/usersRoutes');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const pid = process.pid;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/countries', countriesRoutes);
app.use('/users', usersRoutes);

(async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin12345@cluster0.62gyx.mongodb.net/AllData', {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        app.listen(PORT, () => {
            console.log(`Port started on port: ${PORT}, and PID: ${pid}`);
        });
    } catch (err) {
        console.log(err);
    }
})();