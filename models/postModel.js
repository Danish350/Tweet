const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title:{
        type:String,
        required:true,
        minlength:20,
    },
    desc:{
        type: String,
        required: true,
        maxlength: 50,
    },
    comments:[
        {
        type: mongoose.Types.ObjectId,
        ref: "Comment"
    }
    ],
    created_at:{
        type: Date,
        default: Date.now()
    }
})


module.exports=mongoose.model("Post",postSchema)