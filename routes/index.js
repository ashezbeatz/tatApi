const express = require('express')
const Route = express.Router();

const IndexController = require("../controllers/indexControler");


Route.get('/', IndexController.index)
Route.get('/myTst',IndexController.mytest)
Route.get('/balanceEnquiry',IndexController.getBalanceEnquiry)
Route.get('/getFCP',IndexController.getFCPData)
Route.get('/getMNOs',IndexController.getMNOsData)
Route.get('/getLocalBank',IndexController.getLocxalBanksData)
Route.get('/getCharges',IndexController.getFetchChargesData)
Route.get('/getOneData/:affilicatecode&:producttype',IndexController.getFecthOneData)
Route.post('/postData',IndexController.PostData);

module.exports = Route;