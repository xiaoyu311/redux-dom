import React from 'react'
import { connect } from 'react-redux'
import store from './store'


class Postbody extends React.Component{
  handleClick = () => {
    store.dispatch({type:'ADD_LIKE'})
  }
  render(){
    return(
      <div className="top">
        <span onClick={this.handleClick} className="like">{this.props.likes}赞</span>
        <span className="number">
          {this.props.comments.length}
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
