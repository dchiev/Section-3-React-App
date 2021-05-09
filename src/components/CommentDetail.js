import React from "react";
import faker from "faker";

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {faker.name.findName()}
        </a>
        <div className="metadata">
          <span className="date">Today at 6PM</span>
        </div>
        <div className="text">Nice BLog post</div>
      </div>
    </div>
  );
};

export default CommentDetail;