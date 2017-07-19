import React from 'react'

class CommentBox extends React.Component{
  state = {
    comments:[
      '第一条','第二条'
    ]
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    let comment = this.input.value
    // let {comments} = this.state
    // comments.slice()
    // comments.push(comment)
    let comments = [...this.state.comments,comment]
    this.setState({
      comments:comments
    })
    this.form.reset();
  }
  render(){
    let {comments} = this.state
    return(
      <div className="bottom">
        {comments.map(item =>
          <li key={Math.random()}>{item}</li>
        )}
        <form ref={value => this.form = value} onSubmit={this.handleSubmit}>
          <input className="input" ref={value => this.input = value } type="text" />
          <button type="submit" className="btn">提交</button>
        </form>
      </div>
    )
  }
}
export default CommentBox
