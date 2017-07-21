let comments = [
  {
    comment:'第一条',
    postId:'1'
  },
  {
    comment:'第二条',
    postId:'1'
  },
  {
    comment:'第三条',
    postId:'2'
  }
]


export default function commentReducer( state = comments, action){
  switch (action.type) {
    case 'ADD_COMMENT':

      return [...state, {comment:action.comment, postId:action.postId}]
    default:
      return state

  }
}
