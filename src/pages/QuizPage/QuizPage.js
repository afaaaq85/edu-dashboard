import React from "react";
import "./QuizPage.css";
import Reading from "../../assets/reading.png";
import Writing from "../../assets/writing.png";
import Speaking from "../../assets/speech.png";
import Listening from "../../assets/listening.png";
import { InfoIcon } from "../../components/Icons/MUIcons";
import { Tooltip, Zoom } from "@mui/material";

const QuizPage = () => {
  const tooltipTexts = {
    writtenTest:
      "By utilizing our written tests, you can accurately assess your proficiency in typed and written tests.",
    readingTest:
      "Our reading tests will gauge your proficiency and enhance your ability to comprehend and interpret diverse content effectively.",
    listeningTest:
      "These listening assessments have ability to grasp nuances, understand varied accents, and enhance your communication skills",
    speakingTest:
      "This tool is going to help you evaluate your speaking clarity and listening comprehension.",
  };

  return (
    <div className="quiz-container">
      <div className="writing-container">
        <div className="writing-container-top">
          <img src={Writing} alt="writing-img" />
          <h2>Written Test</h2>
          <i>
            <Tooltip arrow title={<p style={{fontSize:'16px', color:"white"}}>{tooltipTexts.writtenTest}</p>} TransitionComponent={Zoom}>
              <InfoIcon sx={{ color: "#2c5aff" }} />
            </Tooltip>
          </i>
        </div>
        <div>
          <p>Write essays/short answers etc.</p>
        </div>
        <div className="quiz-access-pagebtn">Go to Test</div>
      </div>

      <div className="reading-container">
        <div className="reading-container-top">
          <img src={Reading} alt="reading-img" />
          <h2>Reading Test</h2>
          <i>
            <Tooltip arrow title={<p style={{fontSize:'16px', color:"white"}}>{tooltipTexts.readingTest}</p>} TransitionComponent={Zoom}>
              <InfoIcon sx={{ color: "#ff5858" }} />
            </Tooltip>
          </i>
        </div>
        <div>
          <p>Read a paragraph to answer Q/A.</p>
        </div>
        <div className="quiz-access-pagebtn">Go to Test</div>
      </div>

      <div className="speaking-container">
        <div className="speaking-container-top">
          <img src={Speaking} alt="speaking-img" />
          <h2>Speech Test</h2>
          <i>
            <Tooltip arrow title={<p style={{fontSize:'16px', color:"white"}}>{tooltipTexts.speakingTest}</p>} TransitionComponent={Zoom}>
              <InfoIcon sx={{ color: "#2eb700" }} />
            </Tooltip>
          </i>
        </div>
        <div>
          <p>Articulation & fluency in speech patterns.</p>
        </div>
        <div className="quiz-access-pagebtn">Go to Test</div>
      </div>

      <div className="listening-container">
        <div className="listening-container-top">
          <img src={Listening} alt="listening-img" />
          <h2>Listening Test</h2>
          <i>
            <Tooltip arrow title={<p style={{fontSize:'16px', color:"white"}}>{tooltipTexts.listeningTest}</p>} TransitionComponent={Zoom}>
              <InfoIcon sx={{ color: "#001287" }} />
            </Tooltip>
          </i>
        </div>
        <div>
          <p>Listen to oral speech to answer accordingly.</p>
        </div>
        <div className="quiz-access-pagebtn">Go to Test</div>
      </div>
    </div>
  );
};

export default QuizPage;
