import React from 'react'
import store from '../store'
import { connect } from 'react-redux'

class CommentBox extends React.Component{
  //渲染还是需要state改变才行，没有直接给state赋值，不违背redux思想
  handleSubmit = (e) =>{
    e.preventDefault();
    let comment = this.input.value
    store.dispatch({type:'ADD_COMMENT', comment:{PostId:this.props.PostId, comment:comment}});
    //store.dispatch()修改数据  这个对象就是action
    this.form.reset();
  }
  render(){
    //console.log(store.getState());
    //let comments = store.getState()//获取数据
    let {PostId, comments} = this.props
    //console.log(comments);
    return(
      <div className="bottom">
        {
          // this.props.comments.map(item =>
          comments.filter( item => item.PostId === PostId).map(item =>
            <li key={Math.random()}>{item.comment}</li>
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
  comments:state.comments
})

export default connect(mapStateToProps)(CommentBox)

//connect 连接 store 和组件
// mapStateToProps：把 store 中的数据（一部分）映射为当前组件的 props
// map 的意思是“映射”
// State 指的是 store 状态树（ State Tree ），也就是 store 的实际数据
// Porps 就是属性
