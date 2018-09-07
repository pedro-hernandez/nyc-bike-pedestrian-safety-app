import React, { Component } from "react";
import "./style.css";

class ZipCodeSelect extends Component {
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
        let selectedZip = `${this.state.value}`;
        this.props.zipInfo(selectedZip);
        event.preventDefault();
        this.setState({
            value: '',
        })
    }

    // zip code input field
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <lable className="lable">
            Enter a five-digit NYC zip code 
            <input className="text-input" type="text" value={this.state.value} onChange={this.handleChange} />
            </lable>
            <button className="submit-button" type="Submit">Submit</button>
            </form>
        )
    }    
}
                    
export default ZipCodeSelect;