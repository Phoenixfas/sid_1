const mongoose = require("mongoose");

const TweetSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  text: {
    type: String,
  },
});

module.exports = mongoose.model("Tweet", TweetSchema);
