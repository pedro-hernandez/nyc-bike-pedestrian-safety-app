import React, { Component } from 'react';

class StatsPedestriansInjured extends Component {
    constructor() {
        super();
        this.state = {
            pedestriansInjured: 0,
        }
    }

    componentDidMount = async () => {

        const pedestriansInjuredApi = await fetch(`https://data.cityofnewyork.us/resource/qiz3-axqb.json?$select=sum(number_of_pedestrians_injured)`);
        const pedestriansInjuredData = await pedestriansInjuredApi.json();

        this.setState({
            pedestriansInjured: pedestriansInjuredData[0].sum_number_of_pedestrians_injured,
        })
    }

    render() {
        return (
            <span>
             {`🚶‍${this.state.pedestriansInjured} pedestrians have been injured`}   
            </span>
        )
    }
}

export default StatsPedestriansInjured;

