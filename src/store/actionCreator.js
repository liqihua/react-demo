import {CHANGE_INPUT_TYPE, ADD_ITEM, DELETE_ITEM} from './actionTypes'

const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_TYPE,
    value
})

const getAddItemAction = () => ({
    type: ADD_ITEM
})

const getDeleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})

export {getInputChangeAction, getAddItemAction, getDeleteItemAction}