var express = require('express');       // imports the express library
var router = express.Router();          // Router object for routes

var employeeModel = require('./models/employees');


router.post('/employees',
	// birthDate, firstName, lastName, gender, hireDate
	function EmployeesPostHandler(request, response){
        employeeModel.insert(
            request.body.birthDate,
            request.body.firstName,
            request.body.lastName,
            request.body.gender,
            request.body.hireDate,
            function DoneInserting(err, resultId){
                if (err){
                    console.log("Some error inserting");
                    console.log(err);
                    response.write("Error Inserting");
                }else{
                    response.json({ insertedId: resultId });
                }
            } );
});

router.get('/employees', function EmployeesGetHandler(request, response){
    employeeModel.getAll(function DoneGettingAll(err, result, fields){
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

router.get('/employees/:id', function EmployeesGetByIdHandler(request, response){
    employeeModel.findById(request.params.id, function DoneGettingById(err, result, fields){
        if (err){
            console.log("Some error finding by id");
            console.log(err);
            response.write("Error finding by id");
        }else {
            response.json(result);
        }
    });
});

router.put('/employees',
	// birthDate, firstName, lastName, gender, hireDate
	function EmployeesPutHandler(request, response){
        employeeModel.update(
            request.body.birthDate,
            request.body.firstName,
            request.body.lastName,
            request.body.gender,
            request.body.hireDate,
			request.body.employeId,
            function DoneInserting(err, affectedRows){
                if (err){
                    console.log("Some error updating");
                    console.log(err);
                    response.write("Error updating");
                }else{
                    response.json({ rows: affectedRows });
                }
            } );
});

router.delete('/employees',
	function EmployeesDeleteHandler(request, response){
        employeeModel.delete(
			request.body.employeId,
            function DoneInserting(err, affectedRows){
                if (err){
                    console.log("Some error deleting");
                    console.log(err);
                    response.write("Error deleting");
                }else{
                    response.json({ rows: affectedRows });
                }
            } );
});

module.exports = router;
