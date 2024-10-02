const express=require('express');
const router=express.Router();
const db = require('../config/database').db;

router.get("/", (req, res) => {
    const {destination, guests, adate, ldate} = req.query;
                // insert query
                let qry = "insert into intership.book(destination, guests, adate, ldate) values(?,?,?,?)";
                db.query(qry, [destination, guests, adate, ldate], (err, results) => {
                    if (results.affectedRows > 0) {
                        res.render("project", { msg: true });
                    }
                });
            });



module.exports=router;