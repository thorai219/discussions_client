import { Comment } from "./comment.component";

const CommentsList = ({ comments }) => {
  const jsx = !comments ? (
    <p>No Comments Yet</p>
  ) : (
    comments.map((comment) => <Comment comment={comment} />)
  );

  return <div>{jsx}</div>;
};

export default CommentsList;
