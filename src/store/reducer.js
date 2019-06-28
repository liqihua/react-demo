//import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'
import listReducer from '../pages/list/store/reducer'

export default combineReducers({
    list: listReducer
})
