import React, { Component } from 'react';
import Postbody from './Postbody'
import CommentBox from './CommentBox'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Postbody />
        <CommentBox />
      </div>
    );
  }
}

export default App;
