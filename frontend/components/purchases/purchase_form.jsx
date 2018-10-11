import React from 'react';
import { Link } from 'react-router-dom';

class PurchaseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.purchase;
        this.state.errors = [];
        // this.errors = [];
    }

    handleName(e) {
        this.setState({ name: e.target.value, errors: [] });
    }

    handleDescription(e) {
        this.setState({ description: e.target.value, errors: [] });
    }

    handleDate(e) {
        this.setState({ purchase_date: e.target.value, errors: [] });
    }

    handleCost(e) {
        this.setState({ cost: e.target.value, errors: [] });
    }

    handleSubmit(e) {
        e.preventDefault();
        let today = new Date();
        let input = new Date(this.state.purchase_date)
        // debugger;
        if(this.state.cost <= 0){
            this.setState({errors: ['Cost cannot be negative']});
        } else if (input > today) {
            this.setState({ errors: ['Date has to be in the past'] });
        } else {
            this.props.createPurchase(this.state)
                .then(pur => {
                    this.props.history.push(`/purchases/${pur.purchase.id}`)
                }, err => {
                    debugger;
                    this.setState({ errors: err.responseJSON });
                })
        }
        
        this.setState({ name: '', purchase_date: '', cost: ''}) //category
    }

    render() {
        return (
            
            <div className="new-form-full">
                <div className="new-title">Enter a New Purchase</div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div><label> Name:
                        <input
                        className="new-form-input"
                        type="text"
                        onChange={this.handleName.bind(this)}
                        autoFocus
                        value={this.state.name}
                        placeholder="What did you buy?"
                        />
                    </label></div>
                    {/* <div><label> description:
                    <input
                            className="new-form-input"
                        type="textarea"
                        onChange={this.handleDescription.bind(this)}
                        value={this.state.description}
                        placeholder="description"
                    />
                    </label></div> */}
                    {/* <label> category:
                    <input
                            type="textarea"
                            onChange={this.handleDescription.bind(this)}
                            value={this.state.description}
                            placeholder="description"
                        />
                    </label> */}
                    <div><label> Date of Purchase:
                    <input
                            className="new-form-input"
                            type="date"
                            onChange={this.handleDate.bind(this)}
                            value={this.state.date}
                            placeholder="date"
                        />
                    </label></div>
                    <div><label> Cost of Purchase:
                    <input
                            className="new-form-input"
                            type="number"
                            onChange={this.handleCost.bind(this)}
                            value={this.state.cost}
                            placeholder="How much did it cost?"
                        />
                    </label></div>


                    <div className="tester">
                        <div className="ps-back-btn-2"><input type="submit" value="Save" className="new-submit"/></div>
                        <div><Link to='/home' className="ps-back-btn">Back</Link></div>
                    </div>
                    <div className="new-errors">
                        {this.state.errors.map((err, i) => <p key={i}>{err}</p>)}
                    </div>
                </form>
                
                
        </div>
        );
    }
}

export default PurchaseForm;