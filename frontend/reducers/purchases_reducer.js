import { RECEIVE_ALL_PURCHASES, REMOVE_PURCHASE, RECEIVE_PURCHASE } from "../actions/purchase_actions";
import merge from 'lodash/merge';
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const purchasesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_PURCHASES:
            // debugger
            return merge({}, state, action.purchases);
        case RECEIVE_PURCHASE:
            return merge({}, state, { [action.purchase.id]: action.purchase })
        case REMOVE_PURCHASE:
            let newState = merge({}, state);
            delete newState[action.id];
            return newState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default purchasesReducer;