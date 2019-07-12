const express=require("express");
const pool=require("../pool");
var router=express.Router();
router.post("/",(req,res)=>{
    var $uname=req.body.uname;
    var $upwd=req.body.upwd;
    var $phone=req.body.phone;
    pool.query("select * from lin_name where uname=? and upwd=? and phone=?",[$uname,$upwd,$phone],(err,result)=>{
		if(err)throw err;
		if(result.length>0){
		res.send("1");
        }else
        {
            pool.query("insert into lin_name set uname=?,upwd=?,phone=?",[$uname,
            $upwd,$phone],(err,result)=>{
            if(err)throw err;
            if(result.affectedRows>0){res.send("2");}else{res.send("-1");}});
        }
    });
})










module.exports=router;