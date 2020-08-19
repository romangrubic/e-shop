import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
// Redux persist
import { PersistGate } from 'redux-persist/integration/react';
// Service worker for PWA
import * as serviceWorker from '../serviceWorker';

ReactDOM.render(
    // Store is now accessible to every component once its passed with Provider
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.register();
