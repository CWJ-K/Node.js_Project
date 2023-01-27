const port = 3000;
const express = require('express');
const app = express();
const homeController = require('./controllers/homeControllers');

app.use((req, res, next) => {
    console.log(`request body as a buffer stream: ${req.url}`);
    next();
});


/* Tell express.js to parse URL-encoded data*/ 
https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(express.json()); 

/* Tell express.js to parse URL-encoded data*/ 

app.post('/', (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send('POST sucessful!');
});



app.get('/items/:vegetable', (req, res) => {
    let veg = req.params.vegetable;
    console.log(req.params);
    console.log(req.body);
    console.log(req.url);
    console.log(req.query);
    res.send(`This is the page for ${veg}`);
})


app.get('/items2/:vegetable', homeController.sendReqParam);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });