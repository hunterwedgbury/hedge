const knexConfig = require("../knexfile");
const db = require("knex")(knexConfig);
const uuid = require("uuid");

const getFeed = async (_req, res) => {
  const feedData = await db("feed_table");
  res.status(200).json(feedData);
};

const getFeedById = async (req, res) => {
    try {
        const feedData = await db("feed_table").where({ id: req.params.id });
        res.status(200).json(feedData[0]);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

const addPost = async (req, res) => {
    console.log(req.body);
    //Validate request body input fields
    if (
      !req.body.title ||
      !req.body.stock ||
      !req.body.current_price ||
      !req.body.forecast ||
      !req.body.analysis
    ) {
      return res.status(400).json({
        message:
          "Please make sure to provide title, stock, current price, forecast, and analysis in your post!",
      });
    }
  
    try {
      //Create new warehouse
      const newPost = {
        ...req.body,
        postId: uuid.v4(),
      };
  
      //Insert into warehouse list
      await db("feed_table").insert(newPost);
      //Successful add
      res.status(201).json(newPost);
    } catch (error) {
      console.log("error!!!");
      res.status(500).json({ error: error });
    }
};

module.exports = {
  getFeed,
  getFeedById,
  addPost
};