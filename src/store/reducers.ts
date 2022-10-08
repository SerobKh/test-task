import { combineReducers } from 'redux-immer';
import produce from 'immer';
import CatsReducer from './cats/reducer';


export default combineReducers(produce, {
    datas: CatsReducer
})