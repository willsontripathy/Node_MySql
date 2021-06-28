import { NextFunction, Request, Response } from "express";
import { Connect } from "../utils/mysql";

// const router = Router();

const getAllEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Connect()
    .then((conection) => {
      conection.query("SELECT * FROM tbl_employee", (err, result) => {
        if (err) {
          conection.end();
          return res.status(200).json({
            message: err.message,
          });
        }
        return res.status(200).json({
          result,
        });
      });
    })
    .catch((err) => {
      return res.status(200).json({
        message: err,
      });
    });
};

export { getAllEmployee };
