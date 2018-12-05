import React, { Component } from 'react';

class StatsCyclistsInjured extends Component {
    constructor() {
        super();
        this.state = {
            cyclistsInjured: 0,
        }
    }

    componentDidMount = async () => {

        const cyclistsInjuredApi = await fetch(`https://data.cityofnewyork.us/resource/qiz3-axqb.json?$select=sum(number_of_cyclist_injured)`);
        const cyclistsInjuredData = await cyclistsInjuredApi.json();

        this.setState({
            cyclistsInjured: cyclistsInjuredData[0].sum_number_of_cyclist_injured,
        })
    }

    render() {
        return (
            <span>
             {`🚴‍♀️${this.state.cyclistsInjured} cyclists have been injured`}   
            </span>
        )
    }
}

export default StatsCyclistsInjured;

