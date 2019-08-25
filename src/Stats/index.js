import React, { Component } from 'react';
import StatsCyclistsKilled from "../StatsCyclistsKilled";
import StatsCyclistsInjured from "../StatsCyclistsInjured";
import StatsPedestriansKilled from "../StatsPedestriansKilled";
import StatsPedestriansInjured from "../StatsPedestriansInjured";
import "./style.css";


class Stats extends Component {
    render() {
        return (
            <div className="stats">
                <p>Know your nabe and be safe out there!</p>
                <p>Since July 2012:</p>
                <ul className="stats-list">
                <li> <StatsCyclistsKilled /> </li>
                <li> <StatsCyclistsInjured /> </li>
                <li> <StatsPedestriansKilled /> </li>
                <li> <StatsPedestriansInjured /> </li>
                </ul>
            </div>
        )
    }
}

export default Stats;