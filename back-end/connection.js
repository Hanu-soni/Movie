const mysql = require('mysql');
const env=require('dotenv');
require('dotenv').config();
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:process.env.password,//need to enter your password of mysqlDB
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