let posts = [
  {
    postId:'1',
    likes:1,
    title:'Git 技巧'
  },
  {
    postId:'2',
    likes:5,
    title:'学习 redux'
  }
]

export default function postReducer(state = posts, action){
  switch (action.type) {
    case 'ADD_CURRENT':
    let otherCurrent = state.filter( value => value.postId !== action.postId)
    let current = state.filter( value => value.postId === action.postId)[0]
      return [...otherCurrent, {...current,likes:current.likes + 1}]
    default:
      return state

  }
}
