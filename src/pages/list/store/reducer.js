import {CHANGE_INPUT_TYPE, ADD_ITEM, DELETE_ITEM} from './actionTypes'
import { fromJS } from 'immutable';

const defaultState = fromJS({
    inputValue: '123',
    list: ['11','22','33']
})

export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_TYPE) {
        return state.set('inputValue',action.value)
    }
    if (action.type === ADD_ITEM) {
        const newState = state.set('list',state.get('list').push(state.get('inputValue')))
        return newState.set('inputValue','')
    }
    if (action.type === DELETE_ITEM) {
        return state.set('list',state.get('list').splice(action.index, 1))
    }
    return state;
}

