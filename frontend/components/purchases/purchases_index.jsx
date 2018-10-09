import React from 'react';
import PurchasesIndexItem from './purchases_index_item';
// import PurchasesFormContainer from './purchases_form_container';
import { NavLink } from 'react-router-dom';

class PurchasesIndex extends React.Component {

    constructor(props){
        super(props);
    }

    componentWillMount() {
        this.props.fetchPurchases()
    }

    render() {
        let to_return;
        // debugger
        if(this.props.purchases === {}){
             to_return = <div>Loading...</div>
        } else {
            to_return = (<div>
                <ul>
                    {this.props.purchases.map(purchase => (<PurchasesIndexItem key={purchase.id} purchase={purchase} />))}
                </ul>
            </div>)
        }
        
        return (
            <div>
                <div>
                    <NavLink to="/purchases/new">Create New</NavLink>
                </div>
                {to_return}
            </div>
        );
    }
}
export default PurchasesIndex;