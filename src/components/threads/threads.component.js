import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./threads.styles.css";

const Threads = () => {
  const threads = useSelector((state) => state.threads.threads);

  return (
    <ul>
      {threads
        ? threads.map((thread) => (
            <li key={thread._id}>
              <Link to={`/threads/${thread._id}`}>{thread.title}</Link>
            </li>
          ))
        : null}
    </ul>
  );
};

export default Threads;
