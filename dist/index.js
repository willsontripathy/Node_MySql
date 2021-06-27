"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mysql_1 = __importDefault(require("mysql"));
var app = express_1.default();
app.use(express_1.default.json());
var connection = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employee',
    password: 'guduKuna@5152'
});
connection.query('SELECT * FROM tbl_employee', function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log(result);
});
app.listen(3000, function () {
    console.log('Listining...');
});
