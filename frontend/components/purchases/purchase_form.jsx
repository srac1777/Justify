import React from 'react';

class PurchaseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.purchase;
    }

    handleName(e) {
        this.setState({ name: e.target.value });
    }

    handleDescription(e) {
        this.setState({ description: e.target.value });
    }

    handleDate(e) {
        
        this.setState({ purchase_date: e.target.value });
    }

    handleCost(e) {
        this.setState({ cost: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger;
        this.props.createPurchase(this.state);
        this.setState({ name: '', description: '', purchase_date: '', cost: '', category_id: ''});
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
        </div>
        );
    }
}

export default PurchaseForm;