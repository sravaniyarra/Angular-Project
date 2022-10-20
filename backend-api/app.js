var express = require ('express')
var app = express()
var mongoose = require('mongoose')
var cors = require('cors') 
//var bodyparser = require('body-parser')
var userdetailsrouter = require('./routes/userdetailsrouter')
var userSchema = require('./models/usermodel')


//app.use(bodyparser.json)
app.use(express.json())
app.use(cors()) 
app.use('/getdata',userdetailsrouter)  
app.use('/postdata',userdetailsrouter)
app.use('/delete',userdetailsrouter)
app.use('/modify',userdetailsrouter)


mongoose.connect('mongodb://localhost:27017',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if (!err){
        console.log("DB connected successfull")
    }
    else{
        console.log('not connected')
    }
})

app.listen(8000,err=>{
    if(!err){
        console.log("App is Listening")
    }
    else{
        console.log("App crashed.....")
    }
}) 
