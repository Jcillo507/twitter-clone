import React from "react";
import { Avatar } from "@material-ui/core";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar src="" />
          <input type="text" placeholder="What's Happening" />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="optional:Enter Image URL"
        />
        <button className='tweetBox__tweetButton'>Tweet</button>
      </form>
    </div>
  );
};

export default TweetBox;
