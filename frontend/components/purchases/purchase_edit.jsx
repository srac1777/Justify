import React from 'react';
import { Link } from 'react-router-dom';

class PurchaseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.errors = [];
        // this.errors = [];
    }

    componentWillMount(){
        this.props.fetchPurchase(this.props.match.params.purchaseId)
        .then(pur => {
            this.setState(pur.purchase);
        })
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
        if (this.state.cost <= 0) {
            this.setState({ errors: ['Cost cannot be negative'] });
        } else if (input > today) {
            this.setState({ errors: ['Date has to be in the past'] });
        } else {
            this.props.updatePurchase(this.state)
                .then(pur => {
                    this.props.history.push(`/purchases/${pur.purchase.id}`)
                }, err => {
                    // debugger;
                    this.setState({ errors: err.responseJSON });
                })
        }

        this.setState({ name: '', description: '', purchase_date: '', cost: '' }) //category
    }

    render() {
        return (
            <div className="new-form-full">
                <div className="new-title">Edit Purchase Details</div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div><label> Name:
                        <input
                            className="new-form-input"
                            type="text"
                            onChange={this.handleName.bind(this)}
                            autoFocus
                            value={this.state.name}
                            placeholder="Name of Product"
                        />
                    </label></div>
                    {/* <label> description:
                    <input
                            className="new-form-input"
                            type="textarea"
                            onChange={this.handleDescription.bind(this)}
                            value={this.state.description}
                            placeholder="description"
                        />
                    </label> */}
                    {/* <label> category:
                    <input
                            type="textarea"
                            onChange={this.handleDescription.bind(this)}
                            value={this.state.description}
                            placeholder="description"
                        />
                    </label> */}
                    <div><label> Date:
                    <input
                            className="new-form-input"
                            type="date"
                            onChange={this.handleDate.bind(this)}
                            value={this.state.purchase_date}
                            placeholder="date"
                        />
                    </label></div>
                    <div><label> Cost:
                    <input
                            className="new-form-input"
                            type="number"
                            onChange={this.handleCost.bind(this)}
                            value={this.state.cost}
                            placeholder="0"
                        />
                    </label></div>


                    <div className="tester">
                        <div className="ps-back-btn-2"><input type="submit" value="Update" className="new-submit" /></div>
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