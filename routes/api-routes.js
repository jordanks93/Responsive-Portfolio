var db = require("../models");

module.exports = function (app) {

    app.post("/api/contact", function (req, res) {

        db.Contacts.create({

            name: req.body.name,
            email: req.body.email,
            message: req.body.message

        }).then(function () {

            res.redirect("/");

        });

    });

};
