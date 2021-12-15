const express = require("express");

const app = express();

const connect = require("./config/db")

app.use(express.json());

const courseController = require("./controllers/course.controller");
app.use("/courses" , courseController);

const searchController = require("./controllers/search.controller");
app.use("/search" , searchController);

app.listen( 1234 , async (req , res ) => {
    await connect();
    console.log('Listening on port 1234')
});


