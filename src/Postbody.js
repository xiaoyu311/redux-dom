import React from 'react'
import { connect } from 'react-redux'


class Postbody extends React.Component{
  handleClick = () => {
    
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

 //就是redux中的整个状态树，也就是整个数据store.getState()获取的数据。

export default connect(mapStateToProps)(Postbody)
