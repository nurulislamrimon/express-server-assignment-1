const { getRandomNumber } = require('../Utilities/randomNumberGenerator');
const users = require('../Utilities/users.json');

module.exports.getRandomUser = (req, res) => {
    const randomNumber = getRandomNumber(users.length);

    const usersData = users[randomNumber]
    res.send({ user: usersData })

    console.log(`${randomNumber} no user responding`);
}

module.exports.getAllUser = (req, res) => {
    const userQuery = Number(req.query.s);

    const usersData = userQuery ? users.slice(0, userQuery) : users;
    res.send({ users: usersData })

    console.log(`${userQuery} users responding`);
}