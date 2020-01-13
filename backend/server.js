// Require the things we need
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


// Allows enviroment variables to be in the dotenv file
require('dotenv').config();

// Create express server
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
// JSON Parser
app.use(express.json());


// URI from mogodb dashboard
const uri = process.env.ATLAS_URI;
// connect to DB (Flags on here with the "true" Just needed for the updates for express)
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// require the files (CRUD)
const petsRouter = require('./routes/pets');
const usersRouter = require('./routes/users');

// use the files for (CRUD)
app.use('/pets', petsRouter);
app.use('/users', usersRouter);

// Starts the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});