import { connect } from 'react-redux';
import { updatePurchase, fetchPurchase } from '../../actions/purchase_actions';
import PurchaseEdit from './purchase_edit';

const mapStateToProps = state => ({
    // purchase: { name: '', description: '', purchase_date: '', cost: '', category_id: 1, user_id: `${state.session.currentUser.id}` }
});

const mapDispatchToProps = dispatch => ({
    updatePurchase: purchase => dispatch(updatePurchase(purchase)),
    fetchPurchase: id => dispatch(fetchPurchase(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PurchaseEdit);