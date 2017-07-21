import React from 'react'
import { connect } from 'react-redux'
import store from '../store'

class Postbody extends React.Component{
  handleClick = () => {
    store.dispatch({
      type:'ADD_CURRENT',
      postId:this.props.postId
    })
  }
  render(){
    let { postId, comments, posts} = this.props
    let currentPost = comments.filter( value => value.postId === postId)
    return(
      <div>
        <span onClick={this.handleClick}>{posts.filter( value => value.postId === postId)[0].likes}like</span>
        <span style={{marginLeft:'100px'}}>{currentPost.length}</span>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments:state.comments,
  posts:state.posts
})
export default connect(mapStateToProps)(Postbody)
