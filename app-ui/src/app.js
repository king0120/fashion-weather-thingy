import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducer from './reducers';

import App from './components/App';
import Login from './components/Login';
import RouteContainer from './components/RouteContainer';



injectTapEventPlugin();

import {Router, Route, hashHistory} from 'react-router';

// import {Provider} from 'react-redux';
// import {createStore, applyMiddleware} from 'redux';
// import reducer from './reducer';
// import {setState} from './action_creators';
// import remoteActionMiddleware from './remote_action_middleware';

// import io from 'socket.io-client';
// import App from './components/App';

// const socket = io(`${location.protocol}//${location.hostname}:8090`);
// socket.on('state', state =>
//   store.dispatch(setState(state))
// );

// const createStoreWithMiddleware = applyMiddleware(
//   remoteActionMiddleware(socket)
// )(createStore);

// const store = createStoreWithMiddleware(reducer);

let store = createStore(reducer)

const routes = <Route component={RouteContainer}>
  <Route path="/" component={App} />
  <Route path="/login" component={Login} />
</Route>

// <Route path="/" component={VotingContainer} />
// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={hashHistory}>{routes}</Router>
//   </Provider>,
//   document.getElementById('app')
// )

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>
  , document.getElementById('app')
)