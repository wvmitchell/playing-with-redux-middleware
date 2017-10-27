import { combineReducers } from 'redux'
import counterReducer from './containers/Counter/reducer'

const rootReducer = combineReducers({
  counter: counterReducer,
})

export default rootReducer
