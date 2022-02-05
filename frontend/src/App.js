import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
