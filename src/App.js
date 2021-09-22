import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ItemState from "./context/ItemState";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <ItemState>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login-signup">
            <Login />
          </Route>
        </Switch>
      </ItemState>
    </Router>
  );
}

export default App;
