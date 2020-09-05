import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './PrivateRoute';

import Login from './Login';
import FriendList from './FriendList';



function App() {
  return(
    <Router>
<div>
<div className="ui secondary pointing menu">
  <Link to="/" className="active item">
    Home
  </Link>
  <Link to="/login" className="item">
    Login
  </Link>
  <Link to="/protected" className="item">
    Friends
  </Link>
  <div className="right menu">
    <a className="ui item">
      Logout
    </a>
  </div>
</div>
<Switch>
          <PrivateRoute exact path="/protected" component={FriendList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
</div>
    </Router>
    
  )
};

export default App;