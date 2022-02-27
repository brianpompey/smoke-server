const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const recipeRoutes = require('./routes/recipeRoutes');
// const requireAuth = require('./middlewares/requireAuth');

const app = express();

const mongoUri = 'mongodb+srv://brianpompey:password@cluster0.5udqq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUri);

app.get('/', (req, res) => {
    res.send('Hi there!');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});