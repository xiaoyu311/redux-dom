import React from 'react'

class Postbody extends React.Component{
  render(){
    return(
      <div className="top">
        <span className="number">
          {this.props.length}
        </span>
      </div>
    )
  }
}

export default Postbody
