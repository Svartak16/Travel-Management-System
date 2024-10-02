let db = require('./config/database').db;
let express = require('express');
let port = 7000;
let app = express();
const index = require('./routes/index');
const add = require('./routes/adduser');
const hbs = require('handlebars');
const { handlebars } = require('hbs');
const {engine} = require('express-handlebars');
app.engine('handlebars', engine());
app.set('view engine','handlebars');
app.set('views','./views');
app.use(express.static(__dirname + "/public"));


app.use("/",index);
app.use("/adduser",add);

app.listen(port,(err)=>{
    if(err) 

        throw err
    else
    console.log(`server started on ${port}`);
});