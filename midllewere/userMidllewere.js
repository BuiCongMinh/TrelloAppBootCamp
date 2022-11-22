const User = require('../models/User')

async function checkEmail(req, res, next) {

    try {
        let eMail = req.body.email
        if (eMail.indexOf('@gmail.com') < 0) {
            return res.status(400).json({ mesage: 'email ko hợp lệ' })
        }

        let findEmail = await User.findOne({ email: req.body.email }, { name: req.body.name })
        if (findEmail) { return res.json({ mesage: 'email hoặc name đã đăng ký', status: 400 }) }

        // let findname =  await User.findOne({name: req.body.name})
        // if(findname){return res.status(400).json({mesage: 'tên đã được đăng ký'})}

        next()
    } catch (error) {
        res.json(error)
    }

}




module.exports = { checkEmail }

