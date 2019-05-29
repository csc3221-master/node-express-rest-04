var express = require('express');       // imports the express library
var router = express.Router();          // Router object for routes

var departmentModel = require('./models/departments');

router.get('/departments', function DepartmentsGetHandler(request, response){
    departmentModel.getAll(function DoneGettingAll(err, result, fields){
        if (err) {
            console.log("Some error selecting all");
            console.log(err);
            response.write("Error Getting All");
        } else {
            console.log("Successfully retrieve all records (100)");
            response.json(result);
        }
    });
});

router.get('/departments/:id', function DepartmentsGetByIdHandler(request, response){
    departmentModel.findById(request.params.id, function DoneGettingById(err, result, fields){
        if (err){
            console.log("Some error finding by id");
            console.log(err);
            response.write("Error finding by id");
        }else {
            response.json(result);
        }
    });
});



module.exports = router;
