let mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    from : {
        type:String,
    },
    to : {
        type:String,
    },
    depart : {
        type:String
    },
    return : {
        type:String,
    },
    class: {
        type:String,
        required : false
    },
    adult : {
        type:String,
    },
    child : {
        type:String,
    }
}) 


module.exports = mongoose.model('userdemodetails',userSchema)