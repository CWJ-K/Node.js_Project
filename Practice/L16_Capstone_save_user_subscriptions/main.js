"use strict";

const express = require("express");
const  app = express();
const  homeController = require("./controllers/homeController");
const  errorController = require("./controllers/errorController");
const  subscribersController = require("./controllers/subscribersController");
const  layouts = require("express-ejs-layouts");

const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://127.0.0.1:27017/node'
)

app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(layouts);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});


app.get('/subscribers', subscribersController.getAllSubscribers);
app.get('/contact', subscribersController.getSubscriptionPage);
app.post('/subscribe', subscribersController.saveSubscriber);

app.get("/courses", homeController.showCourses);
app.post("/contact", homeController.postedSignUpForm);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});