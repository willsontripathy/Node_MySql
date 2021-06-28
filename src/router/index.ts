import { Router } from 'express';

import { getAllEmployee } from '../controller/employee.controller'


const router = Router();

router.get('/',getAllEmployee)

export {router};