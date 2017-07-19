import React from 'react'
import store from './store'
import { connect } from 'react-redux'

class CommentBox extends React.Component{
  //渲染还是需要state改变才行，没有直接给state赋值，不违背redux思想
  handleSubmit = (e) =>{
    e.preventDefault();
    let comment = this.input.value
    store.dispatch({type:'ADD_COMMENT', comment:comment});//修改数据
    this.form.reset();
  }
  render(){
    //let comments = store.getState()//获取数据
    console.log(store.getState());
    return(
      <div className="bottom">
        {
          store.getState().map(item =>
            <li key={Math.random()}>{item}</li>
          )
        }
        <form ref={value => this.form = value} onSubmit={this.handleSubmit}>
          <input className="input" ref={value => this.input = value } type="text" />
          <button type="submit" className="btn">提交</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments:state
})

export default connect(mapStateToProps)(CommentBox)
