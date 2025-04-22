// - Create an API using MongoDB.*  
// - *Database:* companyDB with employees & assets collections.  
// - *Functionality:* Search an employee by *name or ID* and retrieve their *assigned assets.*  
// - *Use:* Express & Mongodb

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const employeeRoutes = require('./routes/employeeRoutes');
const port = 3000;

const Mongo_url = "mongodb+srv://prabinkumarpradhanpk:prabin1999@cluster0.yjiiopv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(express.json());

mongoose.connect(Mongo_url)
  .then(() => console.log('DB is connected'))
  .catch(err => console.log("MongoDB Error:", err));

app.use('/', employeeRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
