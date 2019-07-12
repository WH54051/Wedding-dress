//引入express
const express=require("express");
//引入连接池
const pool=require("../pool");
//创建路由器对象
var router=express.Router();
//用户登录
router.post("/",(req,res)=>{
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    pool.query("select * from lin_name where uname=? and upwd=?",[uname,upwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send("1");
        }else{
            res.send("-1")
        }
    })
})
//导出路由器
module.exports=router;