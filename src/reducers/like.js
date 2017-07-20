

export default function commentReducer(state = 0, action) {
  //这里的初始值只运行一次，以后会不断变化
  switch (action.type) {
    case 'ADD_LIKE':
      return (state + 1)
    default:
      return state;
  }
}
