import React from 'react'
import { connect } from 'react-redux'


class Postbody extends React.Component{
  render(){
    return(
      <div className="top">
        <span className="number">
          {this.props.comments.length}
        </span>
      </div>
    )
  }
}

 const mapStateToProps = (state) => ({
   comments:state
 })

export default connect(mapStateToProps)(Postbody)
