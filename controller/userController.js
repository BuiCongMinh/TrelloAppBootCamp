const User = require('../models/User');
async function createUser(req, res) {

    try {
        console.log(6,req.body);
        const email = req.body.email
        const passWord = req.body.passWord
        const name = req.body.name
        const avartar = req.body.avartar
        const user = await User.create({email,passWord,name,avartar})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ mesage: 'er server', error })
    }
}


async function findAllUser(req, res) {
    try {
        const allUser = await User.find()
        res.status(200).json(allUser)
    } catch (error) {
        res.status(500).json({ mesage: 'er server', error })
    }
}


module.exports = { createUser, findAllUser }
