  let comments = [
    {
      comment:'这个一真是好',
      PostId: '1'
    },
    {
      comment:'是真是好',
      PostId: '1'
    },
    {
      comment:'这个二真是好',
      PostId: '2'
    }
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
