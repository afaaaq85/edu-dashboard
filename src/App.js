import "./App.css";
import Navbar from "./pages/NavBar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/">
            <Homepage></Homepage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
