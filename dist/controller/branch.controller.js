"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBranch = void 0;
var mysql_1 = require("../utils/mysql");
var getAllBranch = function (req, res, next) {
    mysql_1.Connect().then(function (conection) {
        conection.query('SELECT * FROM tbl_branch', function (err, result) {
            if (err) {
                conection.end();
                res.status(200).json({
                    errorMessage: err
                });
            }
            return res.status(200).json({
                result: result
            });
        });
    }).catch(function (err) {
        return res.status(200).json({
            errorMessage: err.message
        });
    });
};
exports.getAllBranch = getAllBranch;
