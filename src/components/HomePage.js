import React from 'react'
import {Link} from 'react-router-dom'
import Postbody from './Postbody'
import { connect } from 'react-redux'

class HomePage extends React.Component{
  render(){
    let postList = this.props.posts.map( item =>
      <Postbody key={item.PostId} PostId={item.PostId} />
    )
    return(
        <div>
          <ul>
            <li> <Link to="/post/1">Git 技巧</Link> </li>
            <li> <Link to="/post/2">学习 Redux</Link> </li>
          </ul>
        { postList }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts:state.posts
})
export default connect(mapStateToProps)(HomePage)
