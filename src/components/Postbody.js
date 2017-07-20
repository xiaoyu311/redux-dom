import React from 'react'
import { connect } from 'react-redux'
import store from '../store'


class Postbody extends React.Component{
  handleClick = () => {
    store.dispatch({type:'ADD_LIKE'})
  }
  render(){
    let {PostId, comments} = this.props
    return(
      <div className="top">
        <h1>{this.props.PostId}</h1>
        <span onClick={this.handleClick} className="like">{this.props.likes}赞</span>
        <span className="number">
          {comments.filter( item => item.PostId === PostId).length}
        </span>
      </div>
    )
  }
}

 const mapStateToProps = (state) => ({
   comments:state.comments,
   likes:state.likes
 })

 //state就是redux中的整个状态树，也就是整个数据store.getState()获取的数据。
 //state就是store.js 中的store

export default connect(mapStateToProps)(Postbody)
