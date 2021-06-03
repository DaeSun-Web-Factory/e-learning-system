import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import { BrowserRouter } from 'react-router-dom';

import reducers from './reducers';

import dotenv from 'dotenv';

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
dotenv.config();

ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>

    , document.getElementById('root')
);