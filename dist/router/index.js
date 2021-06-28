"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var employee_controller_1 = require("../controller/employee.controller");
var router = express_1.Router();
exports.router = router;
router.get('/', employee_controller_1.getAllEmployee);
