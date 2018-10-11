import React from 'react';
import { Link } from 'react-router-dom';
import LogoutContainer from '../session_form/logout_container';

class PurchaseShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        this.props.fetchPurchase(this.props.match.params.purchaseId);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deletePurchase(this.props.match.params.purchaseId)
        .then(this.props.fetchPurchases())
        .then(this.props.history.push('/home'));
    }

    render() {
        if (!this.props.purchase) {
            return (<div>Loading...</div>);
        }

        return (
            <div className="homepage-full">
                <div className="title-top-2">
                    <div></div>
                    <div className="justify-logo"></div>
                    <div><LogoutContainer /></div>
                </div>
                <div className="purchase-show-main">
                    <div className="purchase-show-left">
                        <div className="purchase-title">{this.props.purchase.name}</div>
                        {/* <div className="purchase-description">Description: {this.props.purchase.description}</div> */}
                        <div><i>Purchased on:</i> {this.props.purchase.purchase_date}</div>
                        <div><i>Cost of item:</i> ${this.props.purchase.cost}</div>
                        <div className="ps-cpd-container">Cost per Day: <span className="ps-value">${Math.round(this.props.purchase.value * 100) / 100}</span></div>

                        <div className="ps-back-container"><Link className="ps-back-btn" to='/home'>Back</Link></div>
                    </div>
                    <div className="purchase-show-right">
                        <div><button className="ps-delete-btn" onClick={this.handleDelete.bind(this)}>Delete</button></div>
                        <div><Link className="ps-edit-btn" to={`/purchases/${this.props.match.params.purchaseId}/edit`}>Edit</Link></div>
                    </div>
                </div>
                
                
                

            </div>
        );
    }
}

export default PurchaseShow;