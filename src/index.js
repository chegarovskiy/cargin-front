import React from 'react'
import {render} from 'react-dom'


import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/mystyles.css'
import { Provider } from 'react-redux';
import  { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

