//Import MYSQL connection.
const connection = require("./connection.js");

// SQL commands
// //Object for all our SQL statement functions.
const orm = {
    selectAll: function (table, cb) {
        const queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        const queryString = `INSERT INTO ${table} ` +
            `(${cols.toString()}) VALUES` +
            `(${printQuestionMarks(vals.length)});`;

        // console.log(`create: ${queryString}`);

        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (table, objColVals, condition, cb) {
        const queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`

        // console.log(`update: ${queryString}`)

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    delete: function (table, condition, cb) {
        const queryString = `DELETE FROM ${table} WHERE ${condition};`
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}
// ____________________________________________________________________________________

function objToSql(obj) {
    // Convert object to SQL query format
    // column1=value, column2=value2,...
    const arr = [];

    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(`${key} = ${obj[key]}`);
        }
    }
    // Convert array to string for SQL query
    return arr.toString();
}

// ____________________________________________________________________________________

function printQuestionMarks(num) {
    const arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}




// Export the orm object for the model (burger.js).
module.exports = orm;