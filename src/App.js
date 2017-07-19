import React, { Component } from 'react';
import Postbody from './Postbody'
import CommentBox from './CommentBox'
import './App.css';

class App extends Component {
  state = {
    comments:[
      '第一条','第二条'
    ]
  }
  handleSubmit = (comment) => {
    this.setState({
      comments:[...this.state.comments,comment]
    })
  }
  render() {
    return (
      <div>
        <Postbody length={this.state.comments.length} />
        <CommentBox state={this.state.comments} change={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
