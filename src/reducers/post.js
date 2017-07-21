let posts = [
  {
    PostId:'1',
    likes:1,
    title:'Git 技巧'
  },
  {
    PostId:'2',
    likes:2,
    title:'学习redux'
  }
]

export default function postReducer(state = posts, action) {
  //这里的初始值只运行一次，以后会不断变化
  switch (action.type) {
    case 'ADD_LIKE':
    let stateCopy = state.slice()//数组拷贝用slice()方法
    stateCopy.map( item =>{
      if (item.PostId === action.PostId) {
        item.likes ++
      }
      return item
    })
      return stateCopy
    default:
      return state;
  }
}
