import React,{useEffect, useState} from "react";
import { BrowserRouter as Router, Switch, Route, NavLink,useLocation } from "react-router-dom";
import FullMockTest from "./FullMockTest";
import SectionalMockTest from "./SectionalMockTest";
import "./MockTests.css";

const MockTests = () => {
  const location = useLocation();

  const [activeOption, setActiveOption] = useState('fullmocktest');

  const handleTogggleOption = (index) => {
    if(index===1){
      setActiveOption("fullmocktest")
    }
    if(index===2){
      setActiveOption('sectionalmocktest')
    }
  }
  

  return (
    <div className="mocktest-body">
      <div id="mocktest-container">
        <h2 className="mocktest-title">Mock Test</h2>
        <div>
          <Router>
            <div className="mocktest-options">
              <NavLink
                to="/mocktests/fullmocktest"
                className="btn-item"
                activeClassName="active-btn"
                onClick = {()=> handleTogggleOption(1)}
                isActive = {()=> activeOption==='fullmocktest' ? true : false}
              >
                Full Mock test
              </NavLink>
              <NavLink
                to="/mocktests/sectionalmocktest"
                className="btn-item"
                activeClassName="active-btn"
                onClick = {()=> handleTogggleOption(2)}
                isActive = {()=>activeOption==='sectionalmocktest' ? true : false}
              >
                Sectional Mock test
              </NavLink>
            </div>
            <Switch>
              <Route exact path="/mocktests">
                <FullMockTest />
              </Route>
              <Route path="/mocktests/fullmocktest">
                <FullMockTest />
              </Route>
              <Route path="/mocktests/sectionalmocktest">
                <SectionalMockTest />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default MockTests;
