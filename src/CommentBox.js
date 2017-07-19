import React from 'react'

class CommentBox extends React.Component{

  handleSubmit = (e) =>{
    e.preventDefault();
    let comment = this.input.value
    this.props.change(comment)
    this.form.reset();
  }
  render(){
    return(
      <div className="bottom">
        {this.props.state.map(item =>
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
