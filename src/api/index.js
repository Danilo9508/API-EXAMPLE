//Exports all endpoints of availability
const express = require('express');
const genericRoutes = express.Router();

const user = require('./usuario');

genericRoutes.use('/usuario', user);

module.exports = genericRoutes;
