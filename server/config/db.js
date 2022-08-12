const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://Phoenixfas:3867Ff1515@cluster0.u9pcvp8.mongodb.net/sid_db?retryWrites=true&w=majority"
  );

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
