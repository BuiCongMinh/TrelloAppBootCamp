const Task = require('../models/Task')
async function getAll (req,res){
    try {
        const allTask = await Task.find()
        if(!allTask ){return res.status(400).json('non data')}
        
        return res.status(200).json(allTask)

    } catch (error) {
        res.status(500).json({message:"server er",error})
    }
}

async function getOneTask (req,res){
    try {
        const task = await Task.findOne({_id: req.params.id})
        if(!task){return res.status(400).json({message: 'these is no task'})}

        return res.status(200).json(task)

    } catch (error) {
        res.status(500).json({message:"server er",error})
    }
}


async function createTask(req,res){
    try {
        console.log(17 ,req.body);
        const newTask = await Task.create(req.body)
        if(!newTask){return res.status(400).json('is no Task')}
        
        return res.status(200).json(newTask)
        
    } catch (error) {
        res.status(500).json({message:"server er",error})        
    }
}


async function updateTask(req,res){
    console.log(42,req.body);
    if(!req.params.id){ return res.status(400).json('id er!') }
    
    try {
        const updateTask =  await Task.updateOne({_id:req.params.id}, req.body)
        if(!updateTask){return res.status(400).json('updeate false!')}

        return res.status(200).json(updateTask)

    } catch (error) {
        res.status(500).json({message:"server er",error})        
    }
    
}

async function deleteTask(req,res){
    if(!req.params.id){return res.status(400).json('id er !')}

    try {
        const deleteTask = await Task.deleteOne({_id:req.params.id})

        if(!deleteTask){return res.status(400).json('delete false !')}
        
        res.status(200).json({message:'success',deleteTask})

    } catch (error) {
        res.status(500).json({message:"server er",error})        
    }
}

module.exports = {getAll,createTask,getOneTask,updateTask,deleteTask}
