import React from 'react'
import Postbody from './Postbody'
import CommentBox from './CommentBox'

class PostPage extends React.Component{
  render(){
    return(
      <div>
        <Postbody />
        <CommentBox />
      </div>
    )
  }
}
export default PostPage
