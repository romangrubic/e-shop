// Lazy loading and suspense for performance boost!
import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// Pages
import Header from './components/header/header.component';
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

// For lazy loading
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

// React Lazy loading for pages. Dont forget to wrap them in Suspense component
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const Shop = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUp = lazy(() =>
    import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);
const Checkout = lazy(() => import('./pages/checkout/checkout.component'));
const Contact = lazy(() => import('./pages/contact/contact.component'));

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
                <ErrorBoundary>
                    <Suspense fallback={<Spinner />}>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/shop' component={Shop} />
                        <Route path='/contact' component={Contact} />
                        {/* This will redirect user to main page if they're logged in */}
                        <Route
                            exact
                            path='/signIn'
                            render={() =>
                                currentUser ? (
                                    <Redirect to='/' />
                                ) : (
                                    <SignInAndSignUp />
                                )
                            }
                        />
                        <Route exact path='/checkout' component={Checkout} />
                    </Suspense>
                </ErrorBoundary>
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
