var Kevio = require('../kevio');
var kevio = new Kevio(__dirname,{

    verbose: false,
    core: ['mongo', 'redis', 'cache'],
    cores: 1,

})
//
//kevio.run();
kevio.init()

kevio.on("ready", function () {
    "use strict";
    console.log(0)

})


