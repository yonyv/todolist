var express = require('express');

var app=express();

app.set('view engine','ejs');
app.use(express.static('./public'));


app.get('/',function(req,res){
    res.sendFile('index.html')
});

var server=app.listen(8080,function(){
    console.log("正在监听端口8080")
  })
