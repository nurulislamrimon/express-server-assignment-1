const { getRandomNumber } = require('../Utilities/randomNumberGenerator');
const users = require('../Utilities/users.json');

module.exports.getRandomUser = (req, res) => {
    const randomNumber = getRandomNumber(users.length);

    const usersData = users[randomNumber]
    res.status(200).send({ user: usersData })

    console.log(`${randomNumber} no user responding`);
}

module.exports.getAllUser = (req, res) => {
    const userQuery = Number(req.query.s);

    const usersData = userQuery ? users.slice(0, userQuery) : users;
    res.status(200).send({ users: usersData })
    console.log(`${userQuery} users responding`);
}

module.exports.postAnUser = (req, res) => {
    const { id, name, gender, photoUrl, contact, address } = req.body;
    if ((id || id === 0) && name && gender && photoUrl && contact && address) {
        users.push(req.body);
        res.status(200).send({ result: "successfully new user added" })
        console.log("successfully new user added");
    }
    else {// console.log(newUser);
        console.log("Faild to add new user! Something is missing");
        res.status(400).send({ result: "Faild to add new user! Something is missing" })
    }
}

module.exports.updateAnUser = (req, res) => {
    const { id, name, gender, photoUrl, contact, address } = req.body;
    if ((id || id === 0) && name && gender && photoUrl && contact && address) {
        const existingUser = users.find(user => user.id === id);
        if (existingUser) {
            const indexOfUser = users.indexOf(existingUser);
            users[indexOfUser] = req.body;
            res.status(200).send({ result: "user information has been updated" })
            console.log(`${indexOfUser} index user updated.`);
        } else {
            res.status(400).send({ result: `user id ${id} is not found` })
        }
    } else {
        res.status(400).send({ result: "Faild to update user! Some information is missing!" });
        console.log("Some information is missing!");
    }
}