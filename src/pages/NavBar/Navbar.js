import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  DashboardIcon,
  QuizIcon,
  MockTestsIcon,
  PerformanceIcon,
  LearningIcon,
  LogoutIcon,
  MenuIcon as HamMenuIcon,
  MenuIcon,
} from "../../components/Icons/MUIcons";

const Navbar = () => {
  const [isActive, setIsActive] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleMenuOptionClick = (name) => {
    setIsActive(name);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
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

  return (
    <aside>
      <div class="top">
        <div class="logo">
          <img src={logo} alt="logo" />
          <h2>
            EDU<span class="primary2 global-small">Global</span>
          </h2>
        </div>
      </div>
      <div className="burger-menu">
        <MenuIcon fontSize='large'/>
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
  );
};

export default Navbar;
