const mongo = require('../config/db')
const bcyrt = require('bcrypt')

const User = mongo.model('user',mongo.Schema({
    email:{type:String , required: true},
    name:{type:String , required: true},
    passWord:{type:String , required: true},
    role:{type:String, default: 'user'},
    avartar:{type:String, default:'/images/avatar/avatar-1668489346285-374421713.png'}
},{collection:'user'})
// .pre('save',async(next)=>{
//     try {
//         console.log(13, this.passWord);
//         const salt = await bcyrt.genSalt(10)    // đây là độ khó
//         const hashPass = await bcyrt.hash(this.passWord,salt)   //mã hoá vào chuỗi
//         this.passWord = hashPass 
//         next()
//     } catch (error) {
//         next(error)
//     }
// })
)

module.exports = User

// User.find()
// .then(data=>{
//     console.log(data);
// })
// .catch(er=>{console.log(er);})
