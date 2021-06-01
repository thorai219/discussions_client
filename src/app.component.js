import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Nav from "./components/nav/nav.component";
import AuthPage from "./pages/auth/auth.page";
import ThreadPage from "./pages/thread/thread.pages";
import Thread from "./components/threads/thread.component";

import { useLocation } from "react-router-dom";

import { fetchAllThreads } from "./reducers/threads/threads.action";

import "./app.styles.css";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
    dispatch(fetchAllThreads());
  }, [dispatch, location]);

  const renderThreadPage = (props) => <ThreadPage user={user} {...props} />;
  const renderThread = (props) => <Thread user={user} {...props} />;

  return (
    <div className="app-container">
      <Nav user={user} setUser={setUser} />
      <Switch>
        <Route path="/auth" component={AuthPage} />
        <Route exact path="/threads" render={renderThreadPage} />
        <Route exact path="/threads/:threadId" render={renderThread} />
      </Switch>
    </div>
  );
};

export default App;
