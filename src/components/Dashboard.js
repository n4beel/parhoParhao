import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import RecentProposals from "./dashboardComponents/RecentProposals";
import RecentRequests from "./dashboardComponents/RecentRequests";
import PaymentGateway from "./dashboardComponents/PaymentGateway";
import Settings from "./dashboardComponents/Settings";

import Avatar from "./../assets/images/avatar-placeholder.png";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {

    return (
      <div className="container">
        <div className="extra-margin"></div>
        <div className="five columns">
          {/* user info card */}
          <div className="job-overview user-card-wrapper">
            <div className="user-avatar">
              <img src={Avatar} alt="" />
            </div>
            <ul className="user-card">
              <li>
                <div>
                  <strong>Name: </strong>
                  <span>Nabeel Ahmed Khan</span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Email: </strong>
                  <span>nabeel-a-khan@outlook.com</span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Phone no: </strong>
                  <span>+92 333 033 0889</span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Role: </strong>

                  {/* will be visible according to role of the user */}
                  <span>Scholar</span>
                  <button className="role-button">Change to Student</button>
                  {/* <span>Student</span>
                  <button className="role-button">Change to Scholar</button> */}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="eleven columns">
          {/* user action tabs */}
          <ul className="tabs-nav ">
            {/* visible only if user is scholar */}
            {/* <li><Link to="/dashboard">Profile</Link></li> */}
            <li>
              <Link to="/dashboard/proposals">Recent Propsals</Link>
            </li>
            <li>
              <Link to="/dashboard/paymentGateway">Payment Gateway</Link>
            </li>

            {/* visible only if user is student */}
            <li>
              <Link to="/dashboard/requests">Recent Requests</Link>
            </li>

            <li>
              <Link to="/dashboard">Settings</Link>
            </li>
          </ul>

          <div className="tabs-container dashboard-tabs">
            <Switch>
              {/* Profile Window - Scholar Only */}
              {/* <Route path="/dashboard" component={Profile} exact /> */}

              {/* Recent Proposals Window - Scholar Only */}
              <Route path="/dashboard/proposals" component={RecentProposals} />

              {/* Recent Requests Window - Student Only */}
              <Route path="/dashboard/requests" component={RecentRequests} />

              {/* Payment Gateway Window - Scholar Only*/}
              <Route path="/dashboard/paymentGateway" component={PaymentGateway} />

              {/* Settings Window */}
              <Route path="/dashboard" component={Settings} exact />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;