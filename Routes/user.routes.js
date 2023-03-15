const express = require('express');
const { getAllUser, getRandomUser, postAnUser, updateAnUser } = require('../Controllers/users.controller');

const usersRouter = express.Router();

usersRouter.route("/random").get(getRandomUser);
usersRouter.route("/all").get(getAllUser);
usersRouter.route("/save").post(postAnUser);
usersRouter.route("/update").patch(updateAnUser);

module.exports = usersRouter;