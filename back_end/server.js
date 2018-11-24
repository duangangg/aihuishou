var express = require('express');

var mysql = require('mysql');

var app = express();

app.use(function (req,res,next){
    res.set('Access-Control-Allow-Origin', '*');
    res.set("Access-Control-Allow-Headers", "content-type");
    next();
})


//登录
app.post('/Login',function(req,res){
    console.log(body);
    var body = '';

    var client = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database : 'return'
    });

    req.on('data',function(chunk){
        body += chunk;
    });

    req.on('end',function(){
        console.log('==============================')
        body = JSON.parse(body);
        var username = body.username;
        var password = body.password;
        client.connect();
        var sql = `select * from users where username = '${username}' and password = '${password}'`;
        console.log(sql);
        console.log('万能的分割线啊hahahahahahh------------------------------------------');
        client.query(sql,function(err,results,fields){
            if(err){
                console.log(err)
                 // return res.send({code:-1,msg: '登录失败'});

            }else{
                if(results.length > 0){
                    return res.send({code:0,msg:'登录成功'});
                    res.cookie('username',username,{
                        maxAge: 1000*60*30,
                    });
                    //实现页面跳转的关键步骤
                    // res.redirect('/');
                  
            }else{
                // response.sendRedirect(msg);
                return res.send({code:-2,msg:'用户名或密码错误'});
                
                }
        
            }
            client.end();
        });
    })

});





app.post('/Register',function(req,res){
      var body ='';  console.log('我进来了吗')
      var client = mysql.createConnection({
           host:'localhost',
           user:'root',
           password:'',
           port:3306,
           database:'return'
      
      })


      req.on('data',function(chunk){
        body += chunk; 
        console.log(body,'------------------------')
   });

   req.on('end',function(){
       console.log('我在这里')
       body = JSON.parse(body);
       console.log(body);
       var username = body.username;
       var password = body.password;
       
       console.log(username);
 
       console.log(password);
    //    var id = 0;
       console.log('数据库称呼了吗--------------------------0');
       
       client.connect();
       console.log('连接成功');
       var selectSql = `select * from users where username = '${username}'`;
       client.query(selectSql,function(err,rows){
           console.log("wooshiresule");
            console.log('我进来了');
            if(err){
                return res.send({code:-2,msg: '查询错误'});
                client.end();
            }
            else{
                if(rows.length != 0){
                    return res.send({code:-3,msg: '该用户已存在'});
                }
                else{
                    var InsertSql = `INSERT INTO users (username,password) VALUES ("${username}","${password}")`;
                    client.query(InsertSql,function(err){
                        if(err){
                            console.log(err);
                        }else{
                            console.log('成功');
                            return res.send({code:0,msg: '该用户已存在'});
                        }
                    });
                   
                }
               
            }
            client.end();
       })
   })
});

app.listen(3001);
