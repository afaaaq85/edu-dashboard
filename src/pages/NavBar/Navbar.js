import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  DashboardIcon,
  QuizIcon,
  MockTestsIcon,
  PerformanceIcon,
  LearningIcon,
  LogoutIcon,
} from "../../components/Icons/MUIcons";

const Navbar = () => {
  return (
    <aside>
      <div class="top">
        <div class="logo">
          <img src={logo} alt="logo" />
          <h2 cla>
            EDU<span class="primary2 global-small">Global</span>
          </h2>
        </div>
        <div class="close" id="close-btn">
          <span class="material-icons-sharp">close</span>
        </div>
      </div>

      <div class="sidebar">
        <Link to="/" class="active">
          <span class="material-icons-sharp">
            <DashboardIcon />
          </span>
          <h3>Dashboard</h3>
        </Link>
        <Link to="/quizes">
          <span class="material-icons-sharp">
            <QuizIcon />
          </span>
          <h3>Quizes</h3>
        </Link>
        <Link to="/mocktests">
          <span class="material-icons-sharp">
            <MockTestsIcon />
          </span>
          <h3>Mock Tests</h3>
        </Link>
        <Link to="/performance">
          <span class="material-icons-sharp">
            <PerformanceIcon />
          </span>
          <h3>Performace</h3>
          <span class="message-count">16</span>
        </Link>
        <Link to="/learning">
          <span class="material-icons-sharp">
            <LearningIcon />
          </span>
          <h3>Learning</h3>
        </Link>
        <Link to="/signout">
          <span class="material-icons-sharp">
            <LogoutIcon />
          </span>
          <h3>Logout</h3>
        </Link>
      </div>
    </aside>
  );
};

export default Navbar;
