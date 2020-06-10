import React, { Fragment, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';

import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Mounting component
    const unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setUser({
            user: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })          
        });
      } else {
        setUser(null);
      }
    });

    // Unmounting component
    return () => unsubscribe();
  }, []);

  // console.log(user);

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
