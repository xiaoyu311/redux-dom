import React from 'react'
import { Link } from 'react-router-dom'

class Homepage extends React.Component{
  render(){
    return(
      <div>
        <Link to="/post/1">Git jiqiao</Link>
        <Link to="/post/2">redux</Link>
      </div>
    )
  }
}

export default Homepage
