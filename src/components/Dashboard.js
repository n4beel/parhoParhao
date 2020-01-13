import React, { Component } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import RecentProposals from "./dashboardComponents/RecentProposals";
import RecentRequests from "./dashboardComponents/RecentRequests";
import PaymentGateway from "./dashboardComponents/PaymentGateway";
import Settings from "./dashboardComponents/Settings";

import Avatar from "./../assets/images/avatar-placeholder.png";
// import { compose } from "redux";
import { connect } from "react-redux";
import { changeUserRole } from "../store/actions/authActions";

class Dashboard extends Component {

  handleRoleChange = () => {
    this.props.changeUserRole();
  }

  render() {

    const { auth, profile } = this.props;
    if (!auth.uid) return <Redirect to='/login' />

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
                  <span> {profile.name} </span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Email: </strong>
                  <span> {profile.email} </span>
                </div>
              </li>
              <li>
                <div>
                  <strong>Role: </strong>

                  {/* will be visible according to role of the user */}
                  <span> {profile.role} </span>
                  {profile.role === 'Student' ?
                    <button className="role-button" onClick={this.handleRoleChange}>Change to Scholar</button>
                    :
                    <button className="role-button" onClick={this.handleRoleChange}>Change to Student</button>
                  }
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
            {profile.role === 'Student' ?
              <li>
                <Link to="/dashboard/requests">Recent Requests</Link>
              </li>
              :
              <li>
                <Link to="/dashboard/proposals">Recent Propsals</Link>
              </li>
            }
            {profile.role === 'Scholar' ?
              <li>
                <Link to="/dashboard/paymentGateway">Payment Gateway</Link>
              </li>
              :
              null
            }
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

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeUserRole: () => dispatch(changeUserRole())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);