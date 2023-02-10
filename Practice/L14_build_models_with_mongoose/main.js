const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://127.0.0.1:27017/recipe_db',
    {useNewUrlParser: true}
)
const db = mongoose.connection;
const Subscriber = require('./models/subscriber')

var myQuery = Subscriber.findOne({
    name: 'Jon Wexler'
    })
    .where('email', /wexler/)

// create data
// var subscriber1 = new Subscriber({
//     name: 'Jon Wexler',
//     email: 'jon@jonwexler.com'
// });

// subscriber1.save((error, saveDocument) => {
//     if (error) console.log(error);
//     console.log(saveDocument);
// });

// Subscriber.create(
//     {
//         name: 'tle er',
//         email: 'rosa@hi.com'
//     },
//     function (error, saveDocument) {
//         if (error) console.log(error);
//         console.log(saveDocument);
//     }
// );

myQuery.exec((error, data) => {
    if (data) console.log(data.name);
});

db.once('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose!')
});