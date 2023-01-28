'use strict';

const express = require("express");
const app = express();
const homeController = require('./controllers/homeController');
const layouts = require('express-ejs-layouts');
const errorController = require('./controllers/errorController');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');  // homecontroller does not specify extentions

app.use(layouts);
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

app.use(express.static('public'));  // can directly to call http://localhost:3000/404.html

app.use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
});


                                
app.get('/name', homeController.respondWithName);
app.get('/items/:vegetable', homeController.sendWithName);



app.post('/', (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send('POST Successfully');
});

app.use(errorController.logErrors);
app.use(errorController.responNoResourceFound);
app.use(errorController.responInternalError);


app.listen(app.get('port'), () => {
    console.log(`Server running on port: ${app.get('port')}`);
});