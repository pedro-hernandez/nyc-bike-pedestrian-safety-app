import React, { Component } from "react";
import "./style.css";

class BoroughSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    handleChange = (event) => {

        this.setState({
            value: event.target.value,
        })
    }

    handleSubmit = (event) => {
        let selectedBorough = `${this.state.value}`;
        this.props.boroughInfoProps(selectedBorough);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <select onChange={this.handleChange}>
                <option value="MANHATTAN">Manhattan</option>
                <option value="BROOKLYN">Brooklyn</option>
                <option value="QUEENS">Queens</option>
                <option value="BRONX">The Bronx</option>
                <option value="STATEN%20ISLAND">Staten Island</option>
            </select>
            <button type="Submit">Submit</button>
            </form>
        )
    }
}

export default BoroughSelect;