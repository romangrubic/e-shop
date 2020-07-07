import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
// So that our App knows who is authorized
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
        };
    }

    // We will use this for logging out user
    unsubscribeFromAuth = null;

    // Firebase allows us to easily get the logged in user
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
            createUserProfileDocument(user);
            this.setState({ currentUser: user });
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={Shop} />
                    <Route path='/signIn' component={SignInAndSignUp} />
                </Switch>
            </div>
        );
    }
}

export default App;
