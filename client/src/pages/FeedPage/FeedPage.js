import "./FeedPage.scss";
import Feed from '../../components/Feed/Feed';

import axios from "axios";
import { useState, useEffect } from "react";

const FeedPage = () => {

  const urlForFeed = "http://localhost:1000/feed";
  const [postsToDislplay, setPostsToDisplay] = useState([]);

  useEffect(() => {
    axios
      .get(urlForFeed)
      .then((response) => {
        setPostsToDisplay(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    
    <div className="feed">

        <div className="feed-container">
            <h1 className="feed-container__header">Feed</h1>
        </div>

        <Feed
            posts={postsToDislplay}
            setPostsToDisplay={setPostsToDisplay}
        />

    </div>
  );
};

export default FeedPage;