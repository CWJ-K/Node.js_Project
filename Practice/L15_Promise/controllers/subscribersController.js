const Subscriber = require('../models/subscriber');

exports.getAllSubscribers = (req, res, next) => {
    Subscriber.find({})
        .exec()
        .then((subscribers) => {
            res.render('subscribers', {
                subscribers: subscribers
            });
        })
        .catch((error) => {
            console.log(error.message);
            return []
        })
        .then(() => {
            console.log('promise complete');
        });
};

exports.getSubscription = (req, res) => {
    res.render('contact');
};

exports.saveSubscription = (req, res) => {
    let newSubscriber = new Subscriber({
        name: req.body.name,
        email: req.body.email,
        zipCode: req.body.zipCode
    });
    newSubscriber.save()
        .then(result => {
            res.render('thanks');
        })
        .catch(error => {
            if (error) res.send(error);
        });
};


