const express = require('express');
const app = express();
const userscontroller = require('../controller/userscontroller');

//Get All users
app.get('/api/get', userscontroller.get);

//Get Single User
app.get('/api/getuser/:id', userscontroller.getuser);

//Create a user
app.post('/api/post', userscontroller.post);

//Delete a user
app.delete('/api/delete/:id', userscontroller.delete);

//Update a user
app.put('/api/update/:id', userscontroller.update);

module.exports = app
