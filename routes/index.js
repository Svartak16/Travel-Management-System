const express=require('express');
const router=express.Router();
const db = require('../config/database').db;

router.get("/",(req,res)=>{
    res.render("project");
});


module.exports = router;