const express = require('express');
const { userController } = require('./controllers');

const app = express();

app.use(express.json());

// Define routes inline
app.get('/users/:id', userController.getUser);

module.exports = app;
