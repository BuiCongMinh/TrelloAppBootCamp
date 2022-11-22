const mongo = require('../config/db')
const { Schema } = require('mongoose')

// const mongo = require('mongoose')
// mongo.connect('mongodb://localhost:27017/BootCamp2Be')

const Task = mongo.model('task', mongo.Schema({
    title:{type: String, required:true},
    des:{type: String, required:true},
    deadLine:{type: Date, required:true},
    status:{type: String, required:true},
    member:[{type: Schema.Types.ObjectId, ref:'user' }]
}, { collection: 'task' }))

module.exports = Task
// Task.create(
//     {title:'testing',des:'admin',deadLine:'2022-11-18',status:'doing',member:['63731fc1873bf0239ae520d4','63731fc1873bf0239ae520d4']},
//     {title:'coding',des:'admin',deadLine:'2022-11-18',status:'done',member:['63731edb4627123878fb427b','63731fc1873bf0239ae520d4']},
//     {title:'design',des:'admin',deadLine:'2022-11-18',status:'todo',member:['6373159aaa3e356c86890999','63731fc1873bf0239ae520d4']}
    
// )
// .then(data=>{console.log(data);})
// .catch(er=>{console.log(er);})
