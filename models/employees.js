var db = require('../db');

exports.insert = function InsertHandler(employeeId, birthDate, firstName, lastName, gender, hireDate, done){
    var values = [employeeId, new Date(birthDate).toISOString().slice(0, 19).replace('T', ' '), firstName, lastName, gender, new Date(hireDate).toISOString().slice(0, 19).replace('T', ' ')];
    db.get().query(
        'INSERT INTO employees (emp_no, birth_date, first_name, last_name, gender, hire_date) ' +
        'VALUES (?,?,?,?,?,?)', values, function InsertQueryHandler(err, result){
            if (err)
                return done(err);
            done(null, result);
        });
}

exports.getAll = function GetAllHandler(done){
    db.get().query(
        'SELECT * FROM employees LIMIT 100', function SelectQueryHandler(err, result, fields){
            if (err)
                return done(err);
            done(null, result, fields);
        });
}

exports.findById = function FindByIdHandler(id, done){
    db.get().query(
        'SELECT * FROM employees WHERE emp_no = ?', id,
        function SelectQueryHandler(err, result, fields){
            if (err)
                return done(err);
            done(null, result, fields);
        });
}

exports.findByName = function FindByNameHandler(name, done){
    db.get().query(
        'SELECT * FROM employees WHERE first_name = ?', name,
        function SelectQueryHandler(err, result, fields){
            if (err)
                return done(err);
            done(null, result, fields);
        });
}

exports.update = function UpdateHandler(employeeId, birthDate, firstName, lastName, gender, hireDate, done){
    var values = [new Date(birthDate).toISOString().slice(0, 19).replace('T', ' '), firstName, lastName, gender,
				new Date(hireDate).toISOString().slice(0, 19).replace('T', ' '), employeeId];
    db.get().query(
        'UPDATE employees SET birth_date = ?, first_name = ?, last_name = ?, gender = ?, hire_date = ? ' +
        'WHERE emp_no =?', values, function InsertQueryHandler(err, result){
            if (err)
                return done(err);
            done(null, result.affectedRows);
        });
}

exports.delete = function DeleteHandler(employeeId, done){
    db.get().query(
        'DELETE FROM employees WHERE emp_no = ?', employeeId,
        function DeleteQueryHandler(err, result){
            if (err)
                return done(err);
            console.log(result);
            done(null, result.affectedRows); // Number of deleted records
        }
    );
}
