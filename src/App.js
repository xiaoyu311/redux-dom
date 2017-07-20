import React, { Component } from 'react';
import HomePage from './components/HomePage'
import PostPage from './components/PostPage'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';


class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/post/1" component={PostPage} />
            </Switch>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
