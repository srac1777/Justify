import { connect } from 'react-redux';
import { createPurchase } from '../../actions/purchase_actions';
import PurchaseForm from './purchase_form';

const mapStateToProps = state => ({
    purchase: { name: '', description: 'hi', purchase_date: '', cost: '', category_id: 1, user_id: `${state.session.currentUser.id}` }
});

const mapDispatchToProps = dispatch => ({
    createPurchase: purchase => dispatch(createPurchase(purchase)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PurchaseForm);