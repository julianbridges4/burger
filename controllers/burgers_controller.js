var express = require("express");
var router = express.Router();
var burgerModel = require("../models/burger.js");


router.get("/", function(req, res) {
    burgerModel.all(function(data) {
        var handlebarsObj = {
            burgers: data
        }
        console.log()
        res.render("index", handlebarsObj);
    });
});

router.put("/api/devour", function(req, res) {

    var burgerID = parseInt(req.body.burgerID);
    console.log(burgerID);
    burgerModel.update(burgerID, function(data) {

    });
});

router.post("/api/addBurger", function(req, res) {
    var burgerName = req.body.burgerName;

    burgerModel.create(burgerName, function(data) {

    });
});

module.exports = router;