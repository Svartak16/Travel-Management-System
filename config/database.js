const mysql = require('mysql');
const db = mysql.createConnection({
    host:'localhost',
    database:'internship',
    user:'root',
    password:'password',
    port:'3306'
});

db.connect(err=>{
    if(err)
    {
        console.log('Error occured' +err);
    }
    else 
    {
        console.log('Connected Successful');
    }
});
module.exports.db = db;
