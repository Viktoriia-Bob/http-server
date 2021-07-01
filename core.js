const express = require('express');
const countriesRoutes = require('./routes/countriesRoutes');
const usersRoutes = require('./routes/usersRoutes');
const app = express();
const PORT = 3000;
const pid = process.pid;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/countries', countriesRoutes);
app.use('/users', usersRoutes);

app.listen(PORT, () => {
    console.log(`Port started on port: ${PORT}, and PID: ${pid}`);
});

module.exports = app;