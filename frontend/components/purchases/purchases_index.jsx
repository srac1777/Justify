import React from 'react';
import PurchasesIndexItem from './purchases_index_item';
// import PurchasesFormContainer from './purchases_form_container';
import { Link } from 'react-router-dom';

class PurchasesIndex extends React.Component {

    constructor(props){
        super(props);
        this.state={total_value: ''}
    }

    componentWillMount() {
        this.props.fetchPurchases().then(pur => {
            this.setState({total_value: pur.purchases.total_value})
        })
    }

    render() {
        let to_return;
        // debugger
        if(this.props.purchases === {}){
             to_return = <div>Loading...</div>
        } else {
            to_return = (<div>
                {this.props.purchases.map((purchase,i) => (<PurchasesIndexItem key={i} purchase={purchase} />))}
            </div>)
        }
        
        return (
            <div className="purchases-index">
                <div className="total-amt-text">
                    <div>Your total Amortized Cost for all your purchases is</div>
                    <div className="total-number">
                        {Math.round(this.state.total_value*100) / 100}
                    </div>
                </div>

                <div className="purchases-index-stuff">
                    <div className="your-purchases-text">Your Purchases</div>
                    <div className="create-new-btn-container">
                        <Link to="/purchases/new" className="create-new-btn">+</Link>
                    </div>
                    {to_return}
                </div>
                
            </div>
        );
    }
}
export default PurchasesIndex;