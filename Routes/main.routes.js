const express = require('express');
const { mainController } = require('../Controllers/main.controller');

const mainRoute = express.Router();
mainRoute
    .route("/")
    .get(mainController)


module.exports = mainRoute;