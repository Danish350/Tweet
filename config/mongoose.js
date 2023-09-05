const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Danish96:Shaikh17@cluster0.r91pfxp.mongodb.net/')
.then(()=>{
    console.log('DB connected')
})
.catch(err => console.log('DB error'))