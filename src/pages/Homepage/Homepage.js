import React from "react";
import Analytics from "../../assets/analytics.png";
import Chart1 from "../../assets/chart1.png";
import Chart2 from "../../assets/chart2.png";
import profile1 from "../../assets/profile-1.jpg";
import person from "../../assets/person.png";
import cart from "../../assets/cart.png";
import bag from "../../assets/bag.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <main>
        <h1>Dashoard</h1>
        <div class="date">
          <input type="date" />
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
                <CircularProgressbar value={33} text="33%" />
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
            <div class="info">
              <p>
                Hey, <b>Daniel</b>
              </p>
              <small class="text-muted">Admin</small>
            </div>
            <div class="profile-photo">
              <img src={profile1} alt="profile-1" />
            </div>
          </div>
        </div>
        {/* <!-- END OF TOP --> */}
        <div class="recent-updates">
          <h2>Recent Updates</h2>
          <div class="updates">
            <div class="update">
              <div class="profile-photo">
                <img src={person} alt="profile-2" />
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
                <img src={person} alt="profile-3" />
              </div>
              <div class="message">
                <p>
                  <b>Yousaf</b> has completed Quiz 01.
                </p>
                <small class="text-muted">2 Minutes Ago</small>
              </div>
            </div>
            <div class="update">
              <div class="profile-photo">
                <img src={person} alt="profile-img" />
              </div>
              <div class="message">
                <p>
                  <b>Afaq</b> has received 100 points for Quiz 03.
                </p>
                <small class="text-muted">2 Minutes Ago</small>
              </div>
            </div>
          </div>
        </div>
        {/* <!----------------- END OF RECENT UPDATES --------------------> */}
        <div class="sales-analytics">
          <h2>Sales Analytics</h2>
          <div class="item online">
            <div class="icon">
              <img src={cart} alt="cart" className="home-charts-img" />
            </div>
            <div class="right">
              <div class="info">
                <h3>ONLINE ORDERS</h3>
                <small class="text-muted">Last 24 Hours</small>
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
                <h3>OFFLINE ORDERS</h3>
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
                <h3>NEW CUSTOMERS</h3>
                <small class="text-muted">Last 24 Hours</small>
              </div>
              <h5 class="success">+25%</h5>
              <h3>849</h3>
            </div>
          </div>
          <div class="item add-product">
            <div>
              <span class="material-icons-sharp">add</span>
              <h3>Add Product</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
