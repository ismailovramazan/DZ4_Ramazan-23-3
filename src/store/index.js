import {combineReducers, legacy_createStore as createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import counterReducer from './counterReducer.js'
import todoReducer from './todoReducer.js'


const rootReducer = combineReducers({
    todos: todoReducer,
    counter: counterReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store