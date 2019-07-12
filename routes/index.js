const express=require("express");
const pool=require("../pool");
var router=express.Router();
router.get("/",(req,res)=>{
    var sql="select * from lin_lunbo";
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err);
        res.send(result);
    })
})
module.exports=router;