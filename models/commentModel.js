const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    comment:{
        type:String,
        required:true,
    },
    post_id:{
        type: mongoose.Types.ObjectId,
        ref:"Post"
    },
    created_at:{
        type: Date,
        default: Date.now()
    }
})


module.exports=mongoose.model("Comment",commentSchema)