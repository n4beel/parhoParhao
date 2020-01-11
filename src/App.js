import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import CreateRequest from './components/CreateRequest';
import ViewRequests from './components/ViewRequests';
import RequestPage from './components/RequestPage';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/createRequest" component={CreateRequest}></Route>
          <Route path="/viewRequests" component={ViewRequests}></Route>
          <Route path="/request/:id" component={RequestPage}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={SignUp}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
