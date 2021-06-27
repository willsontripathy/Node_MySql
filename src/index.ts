import express from 'express';
import mysql from 'mysql';

const app = express();
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employee',
    password: 'guduKuna@5152'
});

connection.query('SELECT * FROM tbl_employee',(err, result)=>{
    if(err){
        console.log(err);
    }
    console.log(result);
})

app.listen(3000,()=>{
    console.log('Listining...');
})