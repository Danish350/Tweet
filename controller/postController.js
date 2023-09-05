const postModel = require('../models/postModel')


const homePage = (req,res) =>{
    postModel.find()
    .populate('comments',"_id comment")
    .sort({created_at: -1})
    .then(data =>{
       
        res.render("index",{
            post:data
        })
    })
    .catch(err=> console.log(err))
}
const createNewPostPage = (req,res)=>{
    res.render('new-post',{
        err: ""
    })
}
const submitNewPost =(req,res) => {
    if(req.body.title === '' || req.body.desc === "") {
        res.render('new-post', {
            err:"fill the blankss"
        })
    }else{
    let newPost = new postModel(req.body)
    newPost.save()
    .then(()=>{
        res.redirect('/twitter')
    })
    .catch(err => {
        console.log(err)
    })
    }
}
const openEditPage =(req,res)=>{
    let postId = req.params.id;
postModel.findById(postId)
.then(postInfo =>{
    
    res.render('edit-post',{
        info:postInfo,
        err:" error please fill properly"
    })
})
.catch(err => console.log(err))
}
const submitEditPost=(req,res)=>{
    
        if(req.body.title === '' || req.body.desc === "") {
            res.render('edit-post', {
               info:"",
               err: " required fill it",
            
            })
        }else{
            postModel.findByIdAndUpdate(req.params.id,req.body)
            .then(()=>{
                res.redirect('/twitter')
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }

        
     
    
    

module.exports = {
    homePage,
    createNewPostPage,
    submitNewPost,
    openEditPage,
    submitEditPost
}