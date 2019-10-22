import React, {Component} from 'react';
import './item-add.css';

export default class ItemAdd extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdded(this.state.label);
        this.setState({
            label:''
        });
    };

    render() {

        return (
            <form className="mt-3 d-flex"
                  onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control w-75"
                       onChange={this.onLabelChange}
                       placeholder="What needs to be done"
                       value={this.state.label}/>
                <button type="submit" className="btn btn-primary w-25 ml-2" >
                    Add Item
                </button>
            </form>
        );
    }

}