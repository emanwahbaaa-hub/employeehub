// const express = require('express');
// const app =express();
// app.use(express.json());

// const port = 5000;

// const departments = [
//     {id :2 , name: 'hr'},
//     {id :3 , name : 'finance'},
// ];

// let employees =[
//     {id :1 , name: 'Eman'},
//     {id :2 , name : 'Aya'}, 
//     {id :3 , name : 'Alla'}, 
// ];

// app.get('/',(req,res)=>{
//     res.send('EmployeeHub is Running')
// })

// app.get('/api/departments',(req,res)=>{
//     res.json(departments)
// })


// app.get('/api/employees',(req,res)=>{
//     res.json(employees)
// })

// app.get ('/api/employees/:DepartmentId',(req,res)=>{
//     let SearchDepartmentId =number (req.params.DepartmentId);
//     let NewList =employees.filter(e=>e.DepartmentId ===SearchDepartmentId);
//     if(NewList.length===0)
//     {
//         res.status(404).json({message : `Department with id = ${SearchDepartmentId} not found`})

//     }
//     res.json(NewList)
// })



// app.listen(port, ()=>{
//     console.log(`System is Running ${port}`);
// });


// Entry point: load settings, connect to MongoDB, then start listening.
require('dotenv').config();
 
const app = require('./src/app');
const connectDB = require('./src/config/db');
 
const PORT = process.env.PORT || 5000;
 

connectDB().then(() => {
  app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
});
