import React, { Component } from 'react';
import Postbody from './Postbody'
import CommentBox from './CommentBox'
import store from './store'
import { Provider } from 'react-redux'
import './App.css';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div>
            <Postbody />
            <CommentBox />
          </div>
        </Provider>
    );
  }
}

export default App;
