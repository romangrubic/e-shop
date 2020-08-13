import React, { useEffect } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
// Pages
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Checkout from './pages/checkout/checkout.component';
import { GlobalStyle } from './global.styles';
// So that our App knows who is authorized
// import {
//     auth,
//     createUserProfileDocument,
//     // addCollectionsAndDocuments,
// } from './firebase/firebase.utils';
import { connect } from 'react-redux';
// Selectors
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {
    // Firebase allows us to easily get the logged in user
    useEffect(() => {
        // Persistence effect
        checkUserSession();
    }, [checkUserSession]);

    return (
        <div>
            <GlobalStyle />
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={Shop} />
                {/* This will redirect user to main page if they're logged in */}
                <Route
                    exact
                    path='/signIn'
                    render={() =>
                        currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
                    }
                />
                <Route exact path='/checkout' component={Checkout} />
            </Switch>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
    checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
