const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const recipeRoutes = require('./routes/recipeRoutes');
// const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.get('/', (req, res) => {
    res.send('Hi there!');
});