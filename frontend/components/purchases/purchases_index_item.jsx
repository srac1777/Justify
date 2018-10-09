import React from 'react';
import { Link } from 'react-router-dom';

class PurchasesIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <li>
                    <Link to={`/purchases/${this.props.purchase.id}`}><p>{this.props.purchase.name}</p></Link>
                </li>
            </div>
        );
    }
}

export default PurchasesIndexItem;