const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const dotenv = require("dotenv").config();
const PORT = 5000;

//Routes
const userRouter = require('./routes/userRoute');
const employeeRouter = require('./routes/employeeRoute');

const cors = require("cors");
const client = require("./config/dbConnect");

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Server is running")
})

app.use('/api/user', userRouter);
app.use('/api/employee', employeeRouter);

client.connect()
  .then(() => {
    console.log('Connected to database');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to database', err);
  });

  