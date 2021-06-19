import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({})

const initialState = {}

const middelware = [thunk]

const store = createStore(reducer, initialState,
  composeWithStore(applyMiddleware(...middleware)))

export default store
