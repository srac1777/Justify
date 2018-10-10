import React from 'react';
import { Link } from 'react-router-dom';

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
            <div>
                {this.props.purchase.id}
                {this.props.purchase.name}
                {this.props.purchase.cost}
                {this.props.purchase.description}
                {this.props.purchase.purchase_date}
                <button onClick={this.handleDelete.bind(this)}>Delete purchase</button>
                <Link to='/home'>Home</Link>
                <Link to={`/purchases/${this.props.match.params.purchaseId}/edit`}>Edit</Link>
                

            </div>
        );
    }
}

export default PurchaseShow;