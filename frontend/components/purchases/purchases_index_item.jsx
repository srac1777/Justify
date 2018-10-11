import React from 'react';
import { Link } from 'react-router-dom';

class PurchasesIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let purchase_val = Math.round(this.props.purchase.value * 100) / 100;
        var s = purchase_val.toString();
        if (s.indexOf('.') == -1) s += '.';
        while (s.length < s.indexOf('.') + 3) s += '0';

        return (
            <div>
                <Link to={`/purchases/${this.props.purchase.id}`}>
                    <div className="each-purchase-box">
                        <div className="purchase-name-top-index-item">{this.props.purchase.name}</div>
                        <div>Current Cost: ${s}</div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default PurchasesIndexItem;