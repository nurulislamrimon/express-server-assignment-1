const express = require('express');
const { getAllUser, getRandomUser } = require('../Controllers/users.controller');

const usersRouter = express.Router();

usersRouter.route("/random").get(getRandomUser)
usersRouter.route("/all").get(getAllUser)

module.exports = usersRouter;