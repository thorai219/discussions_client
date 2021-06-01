import ThreadForm from "../../components/thread-form/thread-form.component";
import Threads from "../../components/threads/threads.component";

const ThreadPage = ({ user }) => {
  return (
    <div className="container">
      {!user?.token ? (
        <p>Please login to start a discussion</p>
      ) : (
        <ThreadForm user={user} />
      )}
      <Threads />
    </div>
  );
};

export default ThreadPage;
