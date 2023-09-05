const express = require('express')
const route = express.Router()
const postController =require('../controller/postController')
const commentController = require("../controller/commentController")

route.get('/twitter',postController.homePage)
route.get('/create-new-post',postController.createNewPostPage)
route.post('/submit-new-post',postController.submitNewPost)
route.post('/add-comment/:id',commentController.addComment)
route.get('/delete-comment/:id', commentController.deleteComment)
route.get('/edit-post/:id',postController.openEditPage)
route.post('/submit-edit/:id',postController.submitEditPost)


module.exports=route;