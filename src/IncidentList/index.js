import React, { Component } from "react";
import "./style.css";
import moment from "moment";

class IncidentList extends Component {

    render() {
        return (
            <div>
            <h2 className="h2">The following incidents recently occured in {this.props.borough === 'BRONX' ? `THE BRONX`: this.props.borough}:</h2>
            <ul>
                {this.props.incidents.map((item, index) => {
                    return (
                        <li key={item.unique_key}>{moment(item.date).format("dddd, MMMM Do YYYY")} at {moment(item.time, 'hh:mm a').format("hh:mm a")} in zip code {item.zip_code}.</li>
                    );
                })
                }
            </ul>
            </div>
        );
    }

}

export default IncidentList;