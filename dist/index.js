"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_1 = require("./router");
var branch_routes_1 = require("./router/branch.routes");
var app = express_1.default();
app.use(express_1.default.json());
app.use('/employee', router_1.router);
app.use('/branch', branch_routes_1.branchRouter);
app.listen(3000, function () {
    console.log('Listining...');
});
