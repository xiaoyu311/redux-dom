import React from 'react'
import {Link} from 'react-router-dom'

class HomePage extends React.Component{
  render(){
    return(
      <div>
        <li><Link to="/post/1">Git技巧</Link></li>
        <li><Link to="/post/2">学习redux</Link></li>
      </div>
    )
  }
}

export default HomePage
