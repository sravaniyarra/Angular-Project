let mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    Username : {
        type:String,
    },
    fullname : {
        type:String,
    },
    email : {
        type:String
    },
    number : {
        type:Number,
    }
}) 


module.exports = mongoose.model('userdemodetails',userSchema)