import { connect } from 'react-redux';
import PurchaseShow from './purchase_show';
import { fetchPurchase, deletePurchase } from '../../actions/purchase_actions';

const msp = (state, ownProps) => {
    return {
        purchase: state.entities.purchases[ownProps.match.params.purchaseId],
        // ownProps: ownProps,
        // currentUser: state.session.currentUser
    }
};

const mdp = dispatch => {
    // debugger
    return {
        fetchPurchase: id => dispatch(fetchPurchase(id)),
        fetchPurchases: () => dispatch(fetchPurchases()),
        deletePurchase: id => dispatch(deletePurchase(id)),
    }
};

export default connect(msp, mdp)(PurchaseShow);