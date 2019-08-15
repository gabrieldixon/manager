import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyB-FZR3XnScu905UsZcHqTxa8qNuZ0oJMc',
      authDomain: 'manager-fb199.firebaseapp.com',
      databaseURL: 'https://manager-fb199.firebaseio.com',
      projectId: 'manager-fb199',
      storageBucket: 'manager-fb199.appspot.com',
      messagingSenderId: '220239829902'
        };
      firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
