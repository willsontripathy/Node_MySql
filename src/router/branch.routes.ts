import { Router } from 'express';
import {getAllBranch } from '../controller/branch.controller';

const branchRouter = Router();
branchRouter.get('/',getAllBranch)

export {branchRouter};