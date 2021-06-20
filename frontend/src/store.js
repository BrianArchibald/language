import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { teacherListReducer } from './reducers/teacherReducers'

const reducer = combineReducers({
  teacherReducer: teacherListReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState,
  composeWithDevTools(applyMiddleware(...middleware)))

export default store
