const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("index");
});

app.post("/submit", function(req, res) {
    var studentName = req.body.name;
    var studentEmail = req.body.email;
    var studentMessage = req.body.message;

    res.render("result", {
        name: studentName,
        email: studentEmail,
        message: studentMessage
    });
});

app.listen(3005, function() {
    console.log("Server Started");
});