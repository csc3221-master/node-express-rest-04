var db = require('../db');

exports.insert = function InsertHandler(employeeId, departmentId, fromDate, toDate, done){
    var values = [employeeId, departmentId, new Date(fromDate).toISOString().slice(0, 19).replace('T', ' '), new Date(toDate).toISOString().slice(0, 19).replace('T', ' ')];
    db.get().query(
        'INSERT INTO dept_emp (emp_no, dept_no, from_date, to_date) ' +
        'VALUES (?,?,?,?)', values, function InsertQueryHandler(err, result){
            if (err)
                return done(err);
            done(null, result.insertId);
        });
}
