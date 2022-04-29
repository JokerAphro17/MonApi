const mangoose = require("mongoose");
PostsModel = mangoose.model(
  "nodeApi",
  {
    auteur: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  "posts"
);

module.exports = { PostsModel };
