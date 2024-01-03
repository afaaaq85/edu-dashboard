import React, { useState, useEffect } from "react";
import Analytics from "../../assets/analytics.png";
import Chart1 from "../../assets/chart1.png";
import Chart2 from "../../assets/chart2.png";
import profile1 from "../../assets/profile-1.jpg";
import person from "../../assets/person.png";
import cart from "../../assets/cart.png";
import bag from "../../assets/bag.png";
import update from "../../assets/update.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Homepage.css";

const Homepage = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    // Function to get today's date in YYYY-MM-DD format
    const getTodayDate = () => {
      const today = new Date();
      const year = today.getFullYear();
      let month = today.getMonth() + 1;
      let day = today.getDate();

      // Ensure leading zero for months/days less than 10
      if (month < 10) {
        month = `0${month}`;
      }
      if (day < 10) {
        day = `0${day}`;
      }

      return `${year}-${month}-${day}`;
    };

    // Set the default value to today's date
    setDate(getTodayDate());
  }, []); // Run this effect only once on component mount

  return (
    <>
      <main>
        <h1>Dashoard</h1>
        <div class="date">
          <input type="date" value={date} disabled />
        </div>
        <div class="insights">
          <div class="sales">
            <img src={Analytics} alt="img1" className="home-charts-img" />
            <div class="middle">
              <div class="left">
                <h3>Total Quizes</h3>
                <h1>05/20</h1>
              </div>
              <div class="progress">
                <CircularProgressbar value={66} text="66%" />
              </div>
            </div>
            <small class="text-muted">Last 24 Hours</small>
          </div>
          <div class="expenses">
            <img src={Chart1} alt="img2" className="home-charts-img" />
            <div class="middle">
              <div class="left">
                <h3>Net Score</h3>
                <h1>366</h1>
              </div>
              <div class="progress">
                <CircularProgressbar
                  value={33}
                  text="33%"
                  styles={buildStyles({ pathColor: "magenta" })}
                />
              </div>
            </div>
            <small class="text-muted">Last 24 Hours</small>
          </div>
          <div class="income">
            <img src={Chart2} alt="img2" className="home-charts-img" />
            <div class="middle">
              <div class="left">
                <h3>Questions solved</h3>
                <h1>50/500</h1>
              </div>
              <div class="progress">
                <CircularProgressbar value={10} text="10%" />
              </div>
            </div>
            <small class="text-muted">Last 24 Hours</small>
          </div>
        </div>

        <div class="recent-orders">
          <h2>Recent Orders</h2>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Number</th>
                <th>Payment</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Foldable Mini Drone</td>
                <td>85631</td>
                <td>Due</td>
                <td class="warning">Pending</td>
                <td class="primary">Details</td>
              </tr>
            </tbody>
          </table>

          <a href="#nonee">Show All</a>
        </div>
      </main>

      <div class="right">
        <div class="top">
          <div class="profile">
              <p>
                Hey,<br/><b>Daniel</b>
              </p>
              <img src={profile1}></img>
          </div>
        </div>
        {/* <!-- END OF TOP --> */}
        <div class="recent-updates">
          <h2>Recent Updates</h2>
          <div class="updates">
            <div class="update">
              <div class="profile-photo">
                <img src={update} alt="update" />
              </div>
              <div class="message">
                <p>
                  <b>Rafay</b> completed Mock test 2 successfully.
                </p>
                <small class="text-muted">2 Minutes Ago</small>
              </div>
            </div>
            <div class="update">
              <div class="profile-photo">
                <img src={update} alt="update" />
              </div>
              <div class="message">
                <p>
                  <b>Points</b> are added to your dashboard.
                </p>
                <small class="text-muted">2 Minutes Ago</small>
              </div>
            </div>
            <div class="update">
              <div class="profile-photo">
                <img src={update} alt="update" />
              </div>
              <div class="message">
                <p>
                  <b>Quiz 02</b> result has been updated.
                </p>
                <small class="text-muted">2 Minutes Ago</small>
              </div>
            </div>
          </div>
        </div>
        {/* <!----------------- END OF RECENT UPDATES --------------------> */}
        <div class="sales-analytics">
          <h2>Other Analytics</h2>
          <div class="item online">
            <div class="icon">
              <img src={cart} alt="cart" className="home-charts-img" />
            </div>
            <div class="right">
              <div class="info">
                <h3>Speaking</h3>
                <small class="text-muted">Last 30 days</small>
              </div>
              <h5 class="success">+39%</h5>
              <h3>3849</h3>
            </div>
          </div>
          <div class="item offline">
            <div class="icon">
              <img src={bag} alt="bag" className="home-charts-img" />
            </div>
            <div class="right">
              <div class="info">
                <h3>Listening</h3>
                <small class="text-muted">Last 24 Hours</small>
              </div>
              <h5 class="danger">-17%</h5>
              <h3>1100</h3>
            </div>
          </div>
          <div class="item customers">
            <div class="icon">
              <img src={person} alt="person" className="home-charts-img" />
            </div>
            <div class="right">
              <div class="info">
                <h3>Writing</h3>
                <small class="text-muted">Last 24 Hours</small>
              </div>
              <h5 class="success">+25%</h5>
              <h3>849</h3>
            </div>
          </div>
          <div class="item add-product">
            <div>
              <h3>View Details</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
