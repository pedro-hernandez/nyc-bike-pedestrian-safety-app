import React, { Component } from "react";
import "./style.css";

class BoroughSelect extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            value: '',
        })
    }

    handleChange = (event) => {

        this.setState({
            value: event.target.value,
        });
    }

    handleSubmit = (event) => {
        let selectedBorough = `${this.state.value}`;
        this.props.boroughInfo(selectedBorough);
        event.preventDefault();
    }

    // borough drop-down
    render() {
        return (
            <div className="borough-select">
            <form onSubmit={this.handleSubmit}>
            <label> ...or
            <select className="select" onChange={this.handleChange}>
                <option selected disabled>Select a Borough</option>
                <option value="MANHATTAN">Manhattan</option>
                <option value="BROOKLYN">Brooklyn</option>
                <option value="QUEENS">Queens</option>
                <option value="BRONX">The Bronx</option>
                <option value="STATEN ISLAND">Staten Island</option>
            </select>
            </label>
            <button className="submit-button" type="Submit">Submit</button>
            </form>
            </div>
        )
    }
}

export default BoroughSelect;