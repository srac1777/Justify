export const fetchPurchases = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/purchases'
    });
};

export const fetchPurchase = id => {
    return $.ajax({
        method: 'GET',
        url: `api/purchases/${id}`
    });
};

export const createPurchase = purchase => {
    // console.log(purchase);

    return $.ajax({
        url: 'api/purchases',
        method: 'POST',
        data: { purchase }
    });
};

export const updatePurchase = (purchase) => {
    return $.ajax({
        url: `api/purchases/${purchase.id}`,
        method: 'PATCH',
        data: { purchase }
    });
};

export const deletePurchase = id => {
    return $.ajax({
        url: `api/purchases/${id}`,
        method: 'DELETE'
    });
};