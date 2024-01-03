import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  DashboardIcon,
  QuizIcon,
  MockTestsIcon,
  PerformanceIcon,
  LearningIcon,
  LogoutIcon,
  MenuIcon,
} from "../../components/Icons/MUIcons";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";


const Navbar = () => {
  const [isActive, setIsActive] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleMenuOptionClick = (name) => {
    setIsActive(name);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 768) {
        setShowSidebar(false);
      } else {
        setShowSidebar(true);
      }
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div class="top">
          <div class="logo">
            <h2>
              EDU<span class="primary2 global-small">Global</span>
            </h2>
          </div>
        </div>
        <div className="sidebar">
          <Link
            to="/"
            className={isActive === "dashboard" ? "active" : ""}
            onClick={() => handleMenuOptionClick("dashboard")}
          >
            <span class="material-icons-sharp">
              <DashboardIcon />
            </span>
            <h3>Dashboard</h3>
          </Link>
          <Link
            to="/quizes"
            className={isActive === "quizes" ? "active" : ""}
            onClick={() => handleMenuOptionClick("quizes")}
          >
            <span class="material-icons-sharp">
              <QuizIcon />
            </span>
            <h3>Quizes</h3>
          </Link>
          <Link
            to="/mocktests"
            className={isActive === "mocktests" ? "active" : ""}
            onClick={() => handleMenuOptionClick("mocktests")}
          >
            <span class="material-icons-sharp">
              <MockTestsIcon />
            </span>
            <h3>Mock Tests</h3>
          </Link>
          <Link
            to="/learning"
            className={isActive === "learning" ? "active" : ""}
            onClick={() => handleMenuOptionClick("learning")}
          >
            <span class="material-icons-sharp">
              <LearningIcon />
            </span>
            <h3>Learning</h3>
          </Link>
          <Link
            to="/performance"
            className={isActive === "performance" ? "active" : ""}
            onClick={() => handleMenuOptionClick("performance")}
          >
            <span class="material-icons-sharp">
              <PerformanceIcon />
            </span>
            <h3>Performace</h3>
            <span class="message-count">16</span>
          </Link>
          <Link to="#">
            <div className="logout-tab">
              <span class="material-icons-sharp">
                <LogoutIcon />
              </span>
              <h3>Logout</h3>
            </div>
          </Link>
        </div>
      </List>
    </Box>
  );

  return (
    <>
      <aside>
        <div>
          <div key="left">
            <Drawer anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)}>
              {list("left")}
            </Drawer>
          </div>
        </div>
        <div class="top">
          <div class="logo">
            <h2>
              EDU<span class="primary2 global-small">Global</span>
            </h2>
          </div>
        </div>
        <div className="burger-menu" onClick={toggleDrawer("left", true)}>
          <MenuIcon fontSize="large" />
        </div>
        <div className="sidebar">
          <Link
            to="/"
            className={isActive === "dashboard" ? "active" : ""}
            onClick={() => handleMenuOptionClick("dashboard")}
          >
            <span class="material-icons-sharp">
              <DashboardIcon />
            </span>
            <h3>Dashboard</h3>
          </Link>
          <Link
            to="/quizes"
            className={isActive === "quizes" ? "active" : ""}
            onClick={() => handleMenuOptionClick("quizes")}
          >
            <span class="material-icons-sharp">
              <QuizIcon />
            </span>
            <h3>Quizes</h3>
          </Link>
          <Link
            to="/mocktests"
            className={isActive === "mocktests" ? "active" : ""}
            onClick={() => handleMenuOptionClick("mocktests")}
          >
            <span class="material-icons-sharp">
              <MockTestsIcon />
            </span>
            <h3>Mock Tests</h3>
          </Link>
          <Link
            to="/performance"
            className={isActive === "performance" ? "active" : ""}
            onClick={() => handleMenuOptionClick("performance")}
          >
            <span class="material-icons-sharp">
              <PerformanceIcon />
            </span>
            <h3>Performace</h3>
            <span class="message-count">16</span>
          </Link>
          <Link
            to="/learning"
            className={isActive === "learning" ? "active" : ""}
            onClick={() => handleMenuOptionClick("learning")}
          >
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
    </>
  );
};

export default Navbar;
