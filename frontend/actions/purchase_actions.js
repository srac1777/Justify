import * as PurchasesUtil from '../util/purchase_util';

export const RECEIVE_ALL_PURCHASES = 'RECEIVE_ALL_PURCHASES';
export const RECEIVE_PURCHASE = 'RECEIVE_PURCHASE';
export const REMOVE_PURCHASE = 'REMOVE_PURCHASE';

export const fetchPurchases = () => dispatch => (
    PurchasesUtil.fetchPurchases().then(purchases => dispatch({ type: RECEIVE_ALL_PURCHASES, purchases }))
);

export const fetchPurchase = id => dispatch => {

    return (
        PurchasesUtil.fetchPurchase(id).then(purchase => dispatch({ type: RECEIVE_PURCHASE, purchase }))
    );
}

export const createPurchase = purchase => dispatch => {
    return PurchasesUtil.createPurchase(purchase).then(purchase => dispatch({ type: RECEIVE_PURCHASE, purchase }))
};

export const updatePurchase = (purchase) => dispatch => {
    return PurchasesUtil.updatePurchase(purchase).then(purchase => dispatch({ type: RECEIVE_PURCHASE, purchase }))
};

export const deletePurchase = id => dispatch => (
    PurchasesUtil.deletePurchase(id).then(purchase => dispatch({ type: REMOVE_PURCHASE, id: purchase.id }))
);