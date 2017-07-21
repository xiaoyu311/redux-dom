import postReducer from './posts'
import commentReducer from './comment'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  comments:commentReducer,
  posts:postReducer
})

export default rootReducer
