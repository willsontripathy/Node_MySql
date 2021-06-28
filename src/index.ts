import express from 'express';
import { router } from './router';
import {branchRouter} from './router/branch.routes'

const app = express();
app.use(express.json());

app.use('/employee',router);
app.use('/branch', branchRouter);

app.listen(3000,()=>{
    console.log('Listining...');
})