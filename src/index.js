import React, { Component } from "react";
import ReactDOM from "react-dom";
// import App from "./App";

class App extends Component {

    constructor() {
        super();
        this.state = {
            locationData: [],
            vehicleData: [],

        }
    }
    
    componentDidMount = async () => {
        const nypdApi = await fetch('https://data.cityofnewyork.us/resource/qiz3-axqb.json');
        const nypdData = await nypdApi.json();
        console.log (nypdData);

        this.setState({
            // locationData: nypdData,
        })
        // const locData = locationData;
        // console.log(locData);
    }

    render() {
        return(
        <p>Hello World!</p>
        )
    }

}

ReactDOM.render(<App />, document.getElementById("root"));
