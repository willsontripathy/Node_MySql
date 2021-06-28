import { Request, Response, NextFunction } from 'express';
import {Connect} from '../utils/mysql';

const getAllBranch = (req: Request, res: Response, next: NextFunction) => {
    Connect().then((conection ) => {
        conection.query('SELECT * FROM tbl_branch', (err, result) => {
            if(err){
                conection.end();
                res.status(200).json({
                    errorMessage: err
                })
            }
            return res.status(200).json({
                result
            })
        })
    }).catch((err) => {
        return res.status(200).json({
            errorMessage: err.message
        })
    })
}

export { getAllBranch };