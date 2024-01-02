import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./pages/NavBar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import Learning from "./pages/Learning/Learning";
import MockTests from "./pages/MockTests/MockTests";
import Performance from "./pages/Performance/Performance";
import QuizPage from "./pages/QuizPage/QuizPage";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/quizes">
            <QuizPage />
          </Route>
          <Route exact path="/mocktests">
            <MockTests />
          </Route>
          <Route exact path="/learning">
            <Learning />
          </Route>
          <Route exact path="/performance">
            <Performance />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
