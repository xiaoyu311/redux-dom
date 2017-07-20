  let comments = [
    '第一条','第二条'
  ]
//这里的state是状态树的comments部分
export default function commentReducer(state = comments, action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, action.comment]
    default:
      return state;
  }
}
