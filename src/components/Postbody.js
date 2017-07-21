import React from 'react'
import { connect } from 'react-redux'
import store from '../store'
import { Link } from 'react-router-dom'


class Postbody extends React.Component{
  handleClick = () => {
    store.dispatch({type:'ADD_LIKE', PostId:this.props.PostId})
  }
  render(){
    let { posts, PostId, comments} = this.props
    let currentPost = posts.filter( value => value.PostId === PostId)
    return(
      <div className="top">
          <h1><Link to={`/post/${PostId}`}>{currentPost[0].title}</Link></h1>
          <span onClick={this.handleClick} className="like">{currentPost[0].likes}赞</span>
          <span className="number">
            {comments.filter( item => item.PostId === PostId).length}
          </span>
      </div>
    )
  }
}

 const mapStateToProps = (state) => ({
   comments:state.comments,
   posts:state.posts
 })

 //state就是redux中的整个状态树，也就是整个数据store.getState()获取的数据。
 //state就是store.js 中的store

export default connect(mapStateToProps)(Postbody)
