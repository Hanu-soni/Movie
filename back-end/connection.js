const mysql = require('mysql');
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Pankaj123@',//need to enter your password of mysqlDB
    database:'Movie'
});

con.connect((err)=>{
    if(err){
        console.log("Connection not proper");
    }else{
        console.log("connected");
    }
});

module.exports = con;