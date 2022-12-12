require("dotenv").config();

const express = require("express");
const router = express.Router();

const feedController = require("../controllers/feedController");

router.get("/", feedController.getFeed);

router.get("/:id", feedController.getFeedById);

router.post("/", feedController.addPost);
  
module.exports = router;