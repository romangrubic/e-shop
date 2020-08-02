import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
// Pages
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Checkout from './pages/checkout/checkout.component';
// So that our App knows who is authorized
import {
    auth,
    createUserProfileDocument,
    // addCollectionsAndDocuments,
} from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
// Selectors
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import { selectCollectionsForPreview } from './redux/shop/shop.selector';

class App extends Component {
    // We will use this for logging out user
    unsubscribeFromAuth = null;

    // Firebase allows us to easily get the logged in user
    componentDidMount() {
        const { setCurrentUser } = this.props;

        // Switching to redux-saga
        //  this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
        //     if (userAuth) {
        //         const userRef = await createUserProfileDocument(userAuth);

        //         // Query to Firebase DB
        //         userRef.onSnapshot((snapShot) => {
        //             setCurrentUser({
        //                 id: snapShot.id,
        //                 ...snapShot.data(),
        //             });
        //         });
        //     }
        //     setCurrentUser(userAuth);
        //     // addCollectionsAndDocuments(
        //     //     'collections',
        //     //     collectionsArray.map(({ title, items }) => ({ title, items }))
        //     // );
        // });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={Shop} />
                    {/* This will redirect user to main page if they're logged in */}
                    <Route
                        exact
                        path='/signIn'
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to='/' />
                            ) : (
                                <SignInAndSignUp />
                            )
                        }
                    />
                    <Route exact path='/checkout' component={Checkout} />
                </Switch>
            </div>
        );
    }
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
