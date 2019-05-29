// app.js: Main Program

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var db         = require('./db');


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var port = 3000;        // set our port

db.connect(function ConnectionHandler(err){
    if (err){
        console.log('Unable to connect to MySQL');
        process.exit(1);
    }
    console.log("Connection to MySQL Successfull");
});



// ROUTES FOR OUR API
// =============================================================================
app.all('/api', function HandleAll(request, response, next){
    console.log(request.connection.remoteAddress);
    next();
});

// more routes for our API will happen here
var employeesRouter = require('./routers/employees.js');         // get an instance of the express Router
var departmentsRouter = require('./routers/departments.js')

app.use(express.static('public'));


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', employeesRouter);
app.use('/api', departmentsRouter);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Employees Departments Application ' + port);
