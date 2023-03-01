const express = require('express')
const Route = express.Router();

const IndexController = require("../controllers/indexControler");

const Auth = require('../middleware/Auth')

Route.use(Auth.validate);

Route.get('/home',IndexController.home)
module.exports = Route