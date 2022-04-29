const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectId;

const { PostsModel } = require("../models/postsModel");

// GET all posts
router.get("/", (req, res) => {
  PostsModel.find((err, posts) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(posts);
    }
  });
});

// Post a new post
router.post("/", (req, res) => {
  const newPost = new PostsModel({
    auteur: req.body.auteur,
    message: req.body.message,
  });
  newPost.save((err, post) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(post);
    }
  });
});

// updade a post by id
router.put("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send("Invalid id");
  }
  const updatePost = {
    auteur: req.body.auteur,
    message: req.body.message,
  };
  PostsModel.findByIdAndUpdate(
    req.params.id,
    { $set: updatePost },
    { new: true },
    (err, post) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(post);
      }
    }
  );
});

// delete a post by id
router.delete("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send("Invalid id");
  }
  PostsModel.findByIdAndRemove(req.params.id, (err, post) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(post);
    }
  });
});

module.exports = router;
