const express = require('express')
const Route = express.Router();


const UnifiedController = require("../controllers/unifiedController")


Route.post('/PostUniData',UnifiedController.SaveData)
Route.get('/GetUniData',UnifiedController.getData)

module.exports = Route