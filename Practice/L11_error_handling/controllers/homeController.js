'use strict';

exports.respondWithName = (req, res) => {
    //throw Error('error in code');
    let paramsName = req.params.myName;
    res.render('index', { name: paramsName});  // extension is not required
};

exports.sendWithName = (req, res) => {
    let veg = req.params.vegetable
    res.send(`This is the page for ${veg}`)
};