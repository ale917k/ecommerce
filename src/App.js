import React, { Fragment, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { auth } from './firebase/firebase.utils';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';

import './App.css';

function App() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(loggedUser => {
      setUser(loggedUser);

      console.log(user);
    });

    return function cleanup() {
      unsubscribeFromAuth();
    };
  });

  return (
    <Fragment>
      <Header user={user} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInUp} />
      </Switch>
    </Fragment>
  );
}

export default App;
