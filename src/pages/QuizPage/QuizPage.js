import React from "react";
import "./QuizPage.css";

const QuizPage = () => {
  return (
    <div className="quiz-body">
      <div id="quiz-container">
        <h2 className="quiz-title">Quiz</h2>
        <form id="quiz-form">
          <div class="question">
            <p>1. What is the capital of France?</p>
            <ul class="options">
              <li>
                <input type="radio" name="q1" id="q1a" value="a" />
                <label for="q1a">a) Paris</label>
              </li>
              <li>
                <input type="radio" name="q1" id="q1b" value="b" />
                <label for="q1b">b) Rome</label>
              </li>
              <li>
                <input type="radio" name="q1" id="q1c" value="c" />
                <label for="q1c">c) Madrid</label>
              </li>
            </ul>
          </div>
          <div class="question">
            <p>2. What is the capital of Pakistan?</p>
            <ul class="options">
              <li>
                <input type="radio" name="q2" id="q2a" value="a" />
                <label for="q2a">a) Karachi</label>
              </li>
              <li>
                <input type="radio" name="q2" id="q2b" value="b" />
                <label for="q2b">b) Lahore</label>
              </li>
              <li>
                <input type="radio" name="q2" id="q2c" value="c" />
                <label for="q2c">c) Islamabad</label>
              </li>
            </ul>
          </div>

          <div class="question">
            <p>3. What is the largest planet in our solar system?</p>
            <ul class="options">
              <li>
                <input type="radio" name="q3" id="q3a" value="a" />
                <label for="q3a">a) Earth</label>
              </li>
              <li>
                <input type="radio" name="q3" id="q3b" value="b" />
                <label for="q3b">b) Jupiter</label>
              </li>
              <li>
                <input type="radio" name="q3" id="q3c" value="c" />
                <label for="q3c">c) Mars</label>
              </li>
            </ul>
          </div>

          <div class="question">
            <p>4. What is the capital of Japan?</p>
            <ul class="options">
              <li>
                <input type="radio" name="q4" id="q4a" value="a" />
                <label for="q4a">a) Beijing</label>
              </li>
              <li>
                <input type="radio" name="q4" id="q4b" value="b" />
                <label for="q4b">b) Seoul</label>
              </li>
              <li>
                <input type="radio" name="q4" id="q4c" value="c" />
                <label for="q4c">c) Tokyo</label>
              </li>
            </ul>
          </div>
          <div class="question">
            <p>5. What is the capital of India?</p>
            <ul class="options">
              <li>
                <input type="radio" name="q5" id="q5a" value="a" />
                <label for="q5a">a) Dehli</label>
              </li>
              <li>
                <input type="radio" name="q5" id="q5b" value="b" />
                <label for="q5b">b) Kalkota</label>
              </li>
              <li>
                <input type="radio" name="q5" id="q5c" value="c" />
                <label for="q5c">c) Haydaerabad</label>
              </li>
            </ul>
          </div>
          <div class="question">
            <p>6. Current Prime Miniester Of Pakistan?</p>
            <ul class="options">
              <li>
                <input type="radio" name="q6" id="q6a" value="a" />
                <label for="q6a">a) Imran Khan</label>
              </li>
              <li>
                <input type="radio" name="q6" id="q6b" value="b" />
                <label for="q6b">b) Anwer Ul Haq Kakar</label>
              </li>
              <li>
                <input type="radio" name="q6" id="q6c" value="c" />
                <label for="q6c">c) Nawaz Sharif</label>
              </li>
            </ul>
          </div>
          <div class="question">
            <p>7. What is the sweetest language in the world?</p>
            <ul class="options">
              <li>
                <input type="radio" name="q7" id="q7a" value="a" />
                <label for="q7a">a) Russian</label>
              </li>
              <li>
                <input type="radio" name="q7" id="q7b" value="b" />
                <label for="q7b">b) Urdu</label>
              </li>
              <li>
                <input type="radio" name="q7" id="q7c" value="c" />
                <label for="q7c">c) Bengali</label>
              </li>
            </ul>
          </div>
          <div class="question">
            <p>8. What is the most beautiful language in the world?</p>
            <ul class="options">
              <li>
                <input type="radio" name="q8" id="q8a" value="a" />
                <label for="q8a">a) Russian</label>
              </li>
              <li>
                <input type="radio" name="q7" id="q8b" value="b" />
                <label for="q8b">b) Urdu</label>
              </li>
              <li>
                <input type="radio" name="q8" id="q8c" value="c" />
                <label for="q8c">c) Bengali</label>
              </li>
            </ul>
          </div>
          <div class="question">
            <p>9. What language is the official language in the most countries?</p>
            <ul class="options">
              <li>
                <input type="radio" name="q9" id="q9a" value="a" />
                <label for="q9a">a) Russian</label>
              </li>
              <li>
                <input type="radio" name="q9" id="q9b" value="b" />
                <label for="q9b">b) Urdu</label>
              </li>
              <li>
                <input type="radio" name="q9" id="q9c" value="c" />
                <label for="q9c">c) English</label>
              </li>
            </ul>
          </div>
          <div class="question">
            <p>10. Who is the Current Chief of the Naval Staff of Pakistan Navy?</p>
            <ul class="options">
              <li>
                <input type="radio" name="q10" id="q10a" value="a" />
                <label for="q10a">a) Admiral Syed Arifullah Hussaini,</label>
              </li>
              <li>
                <input type="radio" name="q10" id="q10b" value="b" />
                <label for="q10b">b) Admiral Naveed Ashraf</label>
              </li>
              <li>
                <input type="radio" name="q10" id="q10c" value="c" />
                <label for="q10c">c) Admiral Zafar Mahmood Abbasi</label>
              </li>
            </ul>
          </div>

          <button type="button" id="submit-btn" onclick="submitQuiz()">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuizPage;
