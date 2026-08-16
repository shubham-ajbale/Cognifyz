const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

var data = [];

app.get("/", function(req, res) {
    res.render("index");
});

app.post("/submit", function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var age = req.body.age;
    var course = req.body.course;
    var password = req.body.password;

    if (name == "") {
        return res.send("Please enter your name");
    }

    if (email == "") {
        return res.send("Please enter your email");
    }

    if (age == "") {
        return res.send("Please enter your age");
    }

    if (course == "") {
        return res.send("Please select a course");
    }

    if (password == "") {
        return res.send("Please enter your password");
    }

    var student = {
        name: name,
        email: email,
        age: age,
        course: course
    };

    data.push(student);

    res.render("result", {
        student: student
    });
});

app.listen(4000, function() {
    console.log("Server is running");
});