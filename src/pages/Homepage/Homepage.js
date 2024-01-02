import React from "react";
import Analytics from "../../assets/analytics.png";
import Chart1 from "../../assets/chart1.png";
import Chart2 from "../../assets/chart2.png";
import profile1 from "../../assets/profile-1.jpg"
import profile2 from "../../assets/profile-2.jpg"
import profile3 from "../../assets/profile-3.jpg"
import profile4 from "../../assets/profile-4.jpg"
import person from "../../assets/person.png"
import cart from "../../assets/cart.png"
import bag from "../../assets/bag.png"
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
                <h3>Total Sales</h3>
                <h1>$25,024</h1>
              </div>
              <div class="progress">
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div class="number">
                  <p>81%</p>
                </div>
              </div>
            </div>
            <small class="text-muted">Last 24 Hours</small>
          </div>
          <div class="expenses">
            <img src={Chart1} alt="img2" className="home-charts-img" />
            <div class="middle">
              <div class="left">
                <h3>Total Expenses</h3>
                <h1>$14,160</h1>
              </div>
              <div class="progress">
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div class="number">
                  <p>62%</p>
                </div>
              </div>
            </div>
            <small class="text-muted">Last 24 Hours</small>
          </div>
          <div class="income">
            <img src={Chart2} alt="img2" className="home-charts-img" />
            <div class="middle">
              <div class="left">
                <h3>Total Income</h3>
                <h1>$10,864</h1>
              </div>
              <div class="progress">
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>
                </svg>
                <div class="number">
                  <p>44%</p>
                </div>
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
                <img src={profile2} alt="profile-2" />
              </div>
              <div class="message">
                <p>
                  <b>Mike Tyson</b> received his order of Night lion tech GPS drone.
                </p>
                <small class="text-muted">2 Minutes Ago</small>
              </div>
            </div>
            <div class="update">
              <div class="profile-photo">
                <img src={profile3} alt="profile-3" />
              </div>
              <div class="message">
                <p>
                  <b>Mike Tyson</b> received his order of Night lion tech GPS drone.
                </p>
                <small class="text-muted">2 Minutes Ago</small>
              </div>
            </div>
            <div class="update">
              <div class="profile-photo">
                <img src={profile4} alt="profile-img" />
              </div>
              <div class="message">
                <p>
                  <b>Mike Tyson</b> received his order of Night lion tech GPS drone.
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
            <div>
            <img src={cart} alt="cart" className="home-charts-img"/>
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
            <div>
            <img src={bag} alt="bag" className="home-charts-img"/>
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
            <div>
            <img src={person} alt="person" className="home-charts-img"/>
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
