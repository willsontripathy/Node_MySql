"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.branchRouter = void 0;
var express_1 = require("express");
var branch_controller_1 = require("../controller/branch.controller");
var branchRouter = express_1.Router();
exports.branchRouter = branchRouter;
branchRouter.get('/', branch_controller_1.getAllBranch);
