const express = require("express");
const router = express.Router();

const { PostsModel } = require("../models/postsModel");
router.get("/", (req, res) => {
  PostsModel.find((err, posts) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log(posts);
    }
  });
});
module.exports = router;
