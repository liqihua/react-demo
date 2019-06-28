import {CHANGE_INPUT_TYPE, ADD_ITEM, DELETE_ITEM} from './actionTypes'
import { fromJS } from 'immutable';

const defaultState = {
    inputValue: '123',
    list: ['11','22','33']
}
// const defaultState = fromJS({
//     inputValue: '123',
//     list: ['11','22','33']
// })

export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_TYPE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
        //return state.set('inputValue',action.value)
    }
    if (action.type === ADD_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
        // return state.merge({
        //     list: state.get('list').push(state.get('inputValue')),
        //     inputValue: ''
        // })
    }
    if (action.type === DELETE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1)
        return newState
        //return state.set('list',state.get('list').splice(action.index, 1))
    }
    return state;
}