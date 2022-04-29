const mangoose = require("mongoose");

mangoose.connect(
  "mongodb://localhost:27017/nodeApi",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB connection succeeded.");
    } else {
      console.log("Error in DB connection : " + err);
    }
  }
);
