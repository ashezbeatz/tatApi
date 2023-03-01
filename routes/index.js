const express = require('express')
const Route = express.Router();

const IndexController = require("../controllers/indexControler");


Route.get('/', IndexController.index)
Route.get('/myTst',IndexController.mytest)
Route.get('/balanceEnquiry',IndexController.getBalanceEnquiry)


module.exports = Route;