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
        
        this.setState({ name: '', description: '', purchase_date: '', cost: ''}) //category
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label> Name:
                        <input
                        type="text"
                        onChange={this.handleName.bind(this)}
                        autoFocus
                        value={this.state.name}
                        placeholder="Name of Product"
                        />
                    </label>
                    <label> description:
                    <input
                        type="textarea"
                        onChange={this.handleDescription.bind(this)}
                        value={this.state.description}
                        placeholder="description"
                    />
                    </label>
                    {/* <label> category:
                    <input
                            type="textarea"
                            onChange={this.handleDescription.bind(this)}
                            value={this.state.description}
                            placeholder="description"
                        />
                    </label> */}
                    <label> date:
                    <input
                            type="date"
                            onChange={this.handleDate.bind(this)}
                            value={this.state.date}
                            placeholder="date"
                        />
                    </label>
                    <label> cost:
                    <input
                            type="number"
                            onChange={this.handleCost.bind(this)}
                            value={this.state.cost}
                            placeholder="0"
                        />
                    </label>


                    <div>
                        <input type="submit" value="CREATE" />
                    </div>
                </form>
                <Link to='/home'>back</Link>
                <div>
                    {this.state.errors.map((err,i) => <p key={i}>{err}</p>)}
                </div>
        </div>
        );
    }
}

export default PurchaseForm;