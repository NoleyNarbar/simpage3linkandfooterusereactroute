import "./styles.css";
//import Footsy from "/components/footsy";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import Mygit from "./components/Mygit";
//import Mygeorgianapp from "./components/Mygeorgianapp";

const Footsy = () => {
  return (
    <div className="footer">
      <p>You can touch base with me through...</p>
      <img
        src="/images/youtube.logo.png"
        alt="Youtube"
        width="50"
        height="60"
      />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <h1>Narbar: The Nar</h1>
        <hr />
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Mygit">Mygit</Link>
          </li>
          <li>
            <Link to="/Mygeorgianapp">Mygeorgianapp</Link>
          </li>
        </ul>
        <footer>
          <Footsy />
        </footer>
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Mygit">
            <Mygit />
          </Route>
          <Route exact path="/Mygeorgianapp">
            <Mygeorgianapp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

const Mygit = () => {
  return (
    <div>
      <h2>This my git</h2>
    </div>
  );
};

const Mygeorgianapp = () => {
  return (
    <div>
      <h2>This my georgian app</h2>
    </div>
  );
};

export default App;
