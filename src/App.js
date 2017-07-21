import React, { Component } from 'react';
import HomePage from './components/HomePage'
import PostPage from './components/PostPage'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import './App.css';

const Header = () =>(
  <Link to="/">首页</Link>
)


class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/post/:id" component={PostPage} />
              </Switch>
            </div>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
