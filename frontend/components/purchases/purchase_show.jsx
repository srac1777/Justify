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
            </div>
        );
    }
}

export default PurchaseShow;