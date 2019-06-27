import { combineReducers } from 'redux'
import listReducer from '../pages/list/store/reducer'

export default combineReducers({
    list: listReducer
})
