//使用express构建web服务器
const express = require('express');
const bodyParser = require('body-parser');
const cors=require("cors");
/*引入路由模块*/
const login=require("./routes/login");
const register=require("./routes/register");
const index=require("./routes/index");
const list_one=require("./routes/list_one");
const list_two=require("./routes/list_two");
const list_three=require("./routes/list_three");
const list_four=require("./routes/list_four");
const details=require("./routes/details");
const details_two=require("./routes/details_two");
const details_three=require("./routes/details_three");
var app = express();
var server = app.listen(8888);
app.use(cors({
    origin:"http://127.0.0.1:5500"
}))
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('html'));
/*使用路由器来管理路由*/
app.use("/login",login);
app.use("/register",register);
app.use("/index",index);
app.use("/list_one",list_one);
app.use("/list_two",list_two);
app.use("/list_three",list_three);
app.use("/list_four",list_four);
app.use("/details",details);
app.use("/details_two",details_two);
app.use("/details_three",details_three);


