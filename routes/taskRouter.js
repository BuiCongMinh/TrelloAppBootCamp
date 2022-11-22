const router = require('express').Router()
const taskController = require('../controller/taskController')

//all Task
router.get('/',taskController.getAll)

//get one task
router.get('/:id',taskController.getOneTask)

//create task
router.post('/create-task',taskController.createTask)

//update task
router.patch('/updeate/:id',taskController.updateTask)

//delete task
router.delete('/delete/:id',taskController.deleteTask)



module.exports = router
