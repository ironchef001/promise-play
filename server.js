// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var cors       = require('cors');
var bodyParser = require('body-parser');

var app        = express();                 // define our app using express
app.use(cors());

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8384;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here
router.route('/s1rem')
    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .get(function(req, res) {
        res.json({ message: 'section 1 remediation created!' });

        // var bear = new Bear();      // create a new instance of the Bear model
        // bear.name = req.body.name;  // set the bears name (comes from the request)

        // // save the bear and check for errors
        // bear.save(function(err) {
        //     if (err)
        //         res.send(err);

        //     res.json({ message: 'Bear created!' });
        // });
        
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);