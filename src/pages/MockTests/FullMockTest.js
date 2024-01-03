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
        <h2>Free Mock Test</h2>
        <div className="create-mock-attributes">
          <div>
            <p>Questions: 25-30</p>
            <p>Approx time: 1 hour</p>
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
