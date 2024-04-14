const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const createRecord = require('./MVC/controllers/createRecord');




app.use(cors());
app.use(express.json());

const regroutes = require('./MVC/routes/regroutes');
app.use(regroutes);


mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB Server.");
});

mongoose.connection.once("error", () => {
    console.log("Failed to connect to MongoDB Server.");
});

mongoose.connection.once("disconnected", () => {
    console.log("Disconnected from MongoDB Server.");
});

mongoose.connect('mongodb+srv://cmdpalencia:SpaceFlex123@spaceflexbooking.rll3n5j.mongodb.net/SpaceFlexBooking?retryWrites=true&w=majority&appName=SpaceFlexBooking')



app.listen(port, () => {
    console.log(`Spaceflex backend: http://localhost:${port}`);
});
