'use strict';

const express = require('express');
const app = express();
const homeController = require('./controllers/homeController');
const layouts = require('express-ejs-layouts');
const errorController = require('./controllers/errorController')

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.use(layouts);
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/courses', homeController.showCourses);
app.get('/contact', homeController.showSignUp);
app.post('/contact', homeController.postedSignUpForm);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get('port'), () => {
    console.log(
        `Server running at http://localhost:${app.get('port')}`
    );
});