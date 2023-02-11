"use strict";

const express = require("express");
const app = express();
const subscribersController = require('./controllers/subscribersController');
const mongoose = require('mongoose');

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.get('/contact', subscribersController.getSubscriptionPage);
app.post('/subscribe', subscribersController.saveSubscriber);


mongoose.connect(
    "mongodb://127.0.0.1:27017/node",
    { useNewUrlParser: true }
);
const db = mongoose.connection;

db.once("open", () => {
console.log("Successfully connected to MongoDB using Mongoose!");
});


app.get('/subscribers', subscribersController.getAllSubscribers,
    (req, res, next) => {
        console.log(req.data);
        res.send(req.data);
    });

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
    });