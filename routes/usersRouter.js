var express = require('express');
var router = express.Router();
const userController = require('../controller/userController')
const userMidllewere = require('../midllewere/userMidllewere')
const multer = require('multer');
const User = require('../models/User');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/avatar')
    },
    filename: function (req, file, cb) {
        console.log(11, file);
        let extName = file.originalname.slice(file.originalname.indexOf('.'))
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + extName)
    },

})

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {

        if (file.mimetype.includes('image')) {
            cb(null, true)
        }
        else {
            console.log(12);
            cb(new Error('only Img '))
        }


    }
})

// Get All User
router.get('/', userController.findAllUser)


//upLoad Avartar
router.post('/upAvartar', upload.single('avatar'), async (req, res) => {
    let patavatar = req.file.path
        let linkAvarta = patavatar.slice(6);
        let avatar = linkAvarta.split('\\').join('/');
        return res.json({
            avatar
        })
})


/* Add users listing. */
router.post('/resgister', userController.createUser)



module.exports = router;
