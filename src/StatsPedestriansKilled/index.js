import React, { Component } from 'react';

class StatsPedestriansKilled extends Component {
    constructor() {
        super();
        this.state = {
            pedestriansKilled: 0,
        }
    }

    getPedestriansKilled = async () => {

        const pedestriansKilledApi = await fetch(`https://data.cityofnewyork.us/resource/qiz3-axqb.json?$select=sum(number_of_pedestrians_killed)`);
        const pedestriansKilledData = await pedestriansKilledApi.json();

        this.setState({
            pedestriansKilled: pedestriansKilledData[0].sum_number_of_pedestrians_killed,
        })
    }

    render() {
        return (
            <span>
             {this.getPedestriansKilled(),`${this.state.pedestriansKilled} pedestrians have been killed`}   
            </span>
        )
    }
}

export default StatsPedestriansKilled;

