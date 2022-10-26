var express = require ('express')
var router = express.Router()
var usermodel = require('../models/usermodel')


router.get('/',async (req,res)=>{
     var data = await usermodel.find()
     res.json(data)
})

router.post('/',async (req,res)=>{
    var reqbody = {
        Username:req.body.Username,
        fullname:req.body.fullname,
        email : req.body.email,
        number : req.body.number

    }   
    console.log('reqbody' , reqbody)
    const postdata =  new usermodel(reqbody)
    try {
      let usermodelRes =   await postdata.save()
      res.json({status : 'ok' , data : usermodelRes})
    } catch (error) {
       console.log("error" , error) 
    }

})
router.delete('/:id',async (req,res)=>{
    var id = req.params.id
    await usermodel.findByIdAndDelete(id,(err,docs)=>{
        console.log("id is ",id)
        if(err){
            console.log(err)
            res.json({status : 'error' , data : null})
        }
        else{
            res.json({status : 'ok' , data : docs})
        }
    }).clone()
})

router.put('/:id',async (req,res)=>{
    var id = req.params.id
    try {
        const specoficData = await usermodel.findByIdAndUpdate(id,req.body)
        res.json({status : 'ok' , data : specoficData})  
    } catch (error) {
        res.json({status : 'error' , data : null})
    }
})

module.exports = router