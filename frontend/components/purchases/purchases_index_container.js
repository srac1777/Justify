import { connect } from 'react-redux';
import { fetchPurchases } from '../../actions/purchase_actions';
import PurchasesIndex from './purchases_index';

const mapStateToProps = state => {
    // console.log(state);
    return {
        purchases: Object.values(state.entities.purchases),
    }
};

const mapDispatchToProps = dispatch => ({
    fetchPurchases: () => dispatch(fetchPurchases()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PurchasesIndex);