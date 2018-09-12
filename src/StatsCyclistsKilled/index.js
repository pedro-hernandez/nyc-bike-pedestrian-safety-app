import React, { Component } from 'react';

class StatsCyclistsKilled extends Component {
    constructor() {
        super();
        this.state = {
            cyclistsKilled: 0,
            cyclistsInjured: 0,
            pedestriansKilled: 0,
            pedestriansHurt: 0,
            motoristsKilled: 0,
            motoristsHurt: 0,
        }
    }

    componentDidMount = async () => {

        const cyclistsKilledApi = await fetch(`https://data.cityofnewyork.us/resource/qiz3-axqb.json?$select=sum(number_of_cyclist_killed)`);
        const cyclistsKilledData = await cyclistsKilledApi.json();

        this.setState({
            cyclistsKilled: cyclistsKilledData[0].sum_number_of_cyclist_killed,
        })
    }

    render() {
        return (
            <span>
             {`${this.state.cyclistsKilled} cyclists have been killed`}   
            </span>
        )
    }
}

export default StatsCyclistsKilled;

