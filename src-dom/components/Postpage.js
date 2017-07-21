import React from 'react'
import Postbody from './Postbody'
import CommentBox from './commentBox'

class Postpage extends React.Component{
  render(){
    let {id} = this.props.match.params
    return(
      <div>
        <Postbody postId={id} />
        <CommentBox postId={id} />
      </div>
    )
  }
}

export default Postpage
