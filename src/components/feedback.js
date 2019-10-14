import React from "react";
import likes from "../img/likes.png";
import comments from "../img/comments.png";

const Feedback = () =>  (
    <div className="feedback">
      <div className="feedback_header">
        <div className="header_wrapper-text">
          <h1 className="header_last-feedbacks">Последние отзывы</h1>
          <p className="header_all-feedbacks">Все отзывы</p>
        </div>
        <div className="header_wrapper-icon">
          <div className="header_likes">
            <img className="likes_icon" src={likes} alt="Loading..." />
            <p className="likes_number">131</p>
            <div className="header_comments">
              <img className="comments_icon" src={comments} alt="Loading..." />
              <p className="comments_number">14</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default Feedback;
