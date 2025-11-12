const mongoose = require('mongoose');
const initdata = require('./data.js');
const Event = require('../model/event.js');

const mongoose_URL = 'mongodb://127.0.0.1:27017/collegia';

const initdb = async () => {
  try {

    await mongoose.connect(mongoose_URL);
    console.log("Connected to MongoDB");

    await Event.deleteMany({});
    console.log("Old data deleted");

    await Event.insertMany(initdata);
    console.log("Data was initialized");
    
  } catch (err) {
    console.log("Error initializing data:", err);
  }
};

initdb();
