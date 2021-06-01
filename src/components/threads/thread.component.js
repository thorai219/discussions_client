import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import CommentsList from "../comment/comments.component";

import "./threads.styles.css";

const Thread = ({ user }) => {
  const [comment, setComment] = useState("");
  const { threadId } = useParams();
  const threads = useSelector((state) => state.threads?.threads);

  const thread = threads
    ? threads.find((thread) => thread._id === threadId)
    : null;

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComment(comment);
    console.log(comment);
  };

  return (
    <div className="container">
      <div className="thread-header">
        <div>
          <h3>{thread?.title}</h3>
          <p>{thread?.date}</p>
        </div>
        <p>{thread?.username}</p>
      </div>
      <div className="thread-content">
        <p style={{ marginBottom: "none", fontSize: "22px" }}>{thread?.text}</p>
      </div>
      <hr />
      <h4>Comments</h4>
      <CommentsList comments={thread?.comments} />
      {user?.token ? (
        <form onSubmit={handleSubmit}>
          <p>Join the discussion</p>
          <div className="form-floating">
            <textarea
              value={comment}
              onChange={handleChange}
              className="form-control"
              id="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px", resize: "none" }}
            ></textarea>
            <label htmlFor="textarea">Comments</label>
          </div>
          <button className="btn btn-success m-3">Submit</button>
        </form>
      ) : (
        <p>Please login to leave a comment</p>
      )}
    </div>
  );
};

export default Thread;
