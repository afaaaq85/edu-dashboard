import React from "react";
import Button from "@mui/material/Button";

const FullMockTest = () => {
  return (
    <div className="full-mock-container">
      <div className="create-mock-div">
        <h2>Create your own</h2>
        <div className="create-mock-attributes">
          <div>
            <p>Questions: 55-65</p>
            <p>Approx time: 3 hours</p>
          </div>
          <div>
            <Button variant="contained">Create</Button>
          </div>
        </div>
      </div>
      <div className="create-mock-div">
        <div className="mock-div-topbar">
          <h2 className="mock-topbar-title">Free mock test 1</h2>
          <p>1hrs format</p>
        </div>
        <div className="create-mock-attributes">
          <div>
            <p>Questions: 15-20</p>
            <p>Approx time: 1 hours</p>
          </div>
          <div>
            <Button variant="contained">Start</Button>
          </div>
        </div>
      </div>
      <div className="create-mock-div">
        <div className="mock-div-topbar">
          <h2 className="mock-topbar-title">Free mock test 2</h2>
          <p>2hrs format</p>
        </div>
        <div className="create-mock-attributes">
          <div>
            <p>Questions: 25-30</p>
            <p>Approx time: 2 hours</p>
          </div>
          <div>
            <Button variant="contained">Start</Button>
          </div>
        </div>
      </div>
      <div className="create-mock-div">
        <div className="mock-div-topbar">
          <h2 className="mock-topbar-title">Free mock test 3</h2>
          <p>2hrs format</p>
        </div>
        <div className="create-mock-attributes">
          <div>
            <p>Questions: 25-30</p>
            <p>Approx time: 2 hours</p>
          </div>
          <div>
            <Button variant="contained">Start</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullMockTest;
