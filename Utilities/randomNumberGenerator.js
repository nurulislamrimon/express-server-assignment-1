module.exports.getRandomNumber = (totalUsers) => {
    const randomNumber = parseInt(Math.random() * totalUsers);
    if (randomNumber < 0 || totalUsers <= randomNumber) {
        return this.getRandomNumber(totalUsers);
    }
    return randomNumber;
}