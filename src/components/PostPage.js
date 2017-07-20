import React from 'react'
import Postbody from './Postbody'
import CommentBox from './CommentBox'

class PostPage extends React.Component{
  render(){
    let { id } = this.props.match.params
    return(
      <div>
        <Postbody PostId={id} />
        <CommentBox PostId={id} />
      </div>
    )
  }
}
export default PostPage
