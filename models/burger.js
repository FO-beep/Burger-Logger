//Import the ORM to create functions that will interact with the database.
const orm = ("../config/orm.js");

const burger = {

    selectAll: function (tableInput, cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);

        });

    },

    // The variables cols and vals are arrays.
    insertOne: function (table, cols, vals, cb) {
        orm.insertOne("burgers", table, cols, vals, function (res) {
            cb(res);

        });

    },

    updateOne: function (table, objColVals, condition, cb) {
        orm.updateOne("burgers", table, objColVals, condition, function (res) {
            cb(res);
        });

    }
};









// Export the database functions for the controller (burgerController.js).
module.exports = burger;