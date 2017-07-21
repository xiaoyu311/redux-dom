import React from 'react'
import { connect } from 'react-redux'
import store from '../store'


class CommentBox extends React.Component{
  handleSubmit = (e) =>{
    e.preventDefault();
    let comment = this.input.value
    console.log(comment);
    store.dispatch({
      type:'ADD_COMMENT',
      comment:comment,
      postId:this.props.postId
    })
    this.form.reset()
  }
  render(){
    let { postId, comments } = this.props
    let commentsId = comments.filter( value => value.postId === postId)
    return(
      <div>
        {
          commentsId.map( item =>
            <li key={Math.random()}>{item.comment}</li>
          )
        }
        <form ref={value => this.form = value} onSubmit={this.handleSubmit}>
          <input ref={input => this.input = input} type="text" />
          <button type="submit">ok</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments:state.comments
})
export default connect(mapStateToProps)(CommentBox)
