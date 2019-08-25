import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from '../src/constants/routes';
import Landing from './components/Landing/landing';
import Home from './components/Home/home'
import SignIn from './components/SignIn/signIn';
import SignUp from './components/SignUp/signUp';
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Route exact path={ROUTES.LANDING} component={Landing} />
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
        {/* <Route exact path={ROUTES.ACCOUNT} component={Account} /> */}
        {/* <Route exact path={ROUTES.ADMIN} component={Admin} /> */}
        {/* <Route exact path={ROUTES.PASSWORD_FORGET} component={PassForget} /> */}
      </Router>
    </div>
  );
}

export default App;
