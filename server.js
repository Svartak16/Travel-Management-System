const express = require('express');
const dotenv = require('dotenv')
const index = require('./routes/index');
const add = require('./routes/adduser');
const hbs = require('handlebars');
const { handlebars } = require('hbs');
const {engine} = require('express-handlebars');

dotenv.config({
    path: "./.env",
});

const db = require('./config/database').db;


const app = express();
app.engine('handlebars', engine());
app.set('view engine','handlebars');
app.set('views','./views');
app.use(express.static(__dirname + "/public"));


app.use("/",index);
app.use("/adduser",add);


const port = process.env.PORT || 7000

app.listen(port,(err)=>{
    if(err) 

        throw err
    else
    console.log(`server started on ${port}`);

});
