import { combineReducers } from 'redux';
import purchasesReducer from './purchases_reducer';

export default combineReducers({
    purchases: purchasesReducer
});