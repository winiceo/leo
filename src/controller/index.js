var async = require('async');
var _ = require('underscore');


console.log("adfasdfasdf")

var app = kevio.app


app.use('/api/test', function (req, res, next) {

    res.json({a: 333})

});

