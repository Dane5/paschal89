import React, { useState } from "react";
import "./PostitBox.css";
import { Avatar, Button } from "@material-ui/core";
// import db from "./firebase";

function PostitBox() {
  const [postMessage, setPostMessage] = useState("");
  const [postImage, setPostImage] = useState("");

  const sendPost = (e) => {
    e.preventDefault();

  ("posts").add({
      displayName: "Paschal Ramdan",
      username: "DaneRahh",
      verified: true,
      text: postMessage,
      image: postImage,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaU1ryJzDjnyHGAdc5izSBh8GtYssZx1oicw&usqp=CAU",
    });

    setPostMessage("");
    setPostImage("");
  };

  return (
    <div className="postitBox">
      <form>
        <div className="postitBox__input">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaU1ryJzDjnyHGAdc5izSBh8GtYssZx1oicw&usqp=CAU" />
          <input
            onChange={(e) => setPostMessage(e.target.value)}
            value={postMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={postImage}
          onChange={(e) => setPostImage(e.target.value)}
          className="postitBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendPost}
          type="submit"
          className="postitBox__postitButton"
        >
          Post-It!
        </Button>
      </form>
    </div>
  );
}

export default PostitBox;