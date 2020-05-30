//Import MYSQL connection.
const connection = require("../config/connection.js");

//Object for all our SQL statement functions.
const orm = {
    selectAll: function (tableInput, cb) {
        const queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    },

    insertOne: function (table, cols, vals, cb) {
        const queryString = `INSERT INTO ${tableInput} SET ? `,
            {
                burger_name: cols,
                devoured: vals

            }

        console.log(queryString);
        connection.query(queryString, [table, cols, vals], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
            console.log(result);

        });
    },

    // An example of objColVals would be {name: bear, sleepy: true}
    updateOne: function (table, objColVals, condition, cb) {
        const queryString = `UPDATE ${tableInput} SET devoured = ? WHERE id = ?; `;

        console.log(queryString);
        connection.query(queryString, [table, objColVals, condition], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};








// Export the orm object for the model (burger.js).
module.exports = orm;