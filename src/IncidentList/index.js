import React, { Component } from "react";
import moment from "moment";
// import Map from "../Map";
import MapThumb from "../MapThumb";
import Incident from "../Incident";
import "./style.css";


class IncidentList extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            key: 0,
            showIncident: false,
        }
    }

    render() {
        console.log(this.state.showIncident);

        return ((this.props.borough || this.props.zip) &&
            <div>
                <h2 className="h2">The following occured in {this.props.borough === 'BRONX' ? `THE BRONX` : this.props.borough} {this.props.zip}:</h2>
                <div className="incidents_wrapper">
                    {this.props.incidents.map((item, index) => {
                        return (
                            <div className="incident" key={item.unique_key} value={this.state.value}>
                                <div className="text-summary">
                                    {(parseInt(item.number_of_persons_injured, 10) === 0 && parseInt(item.number_of_persons_killed, 10) === 0) ? `No one was hurt ` : <span className="hurt">At least one person was hurt </span>}
                                    on {moment(item.date).format("dddd, MMMM Do YYYY")} at {moment(item.time, 'hh:mm a').format("hh:mm a")}{this.props.borough && <span className="zip-span"> in zip code {item.zip_code}</span>}
                                </div>
                                <Incident item={item} showIncident={this.state.showIncident} />
                            </div>
                        );
                    })
                    }
                </div>

            </div>
        );
    }
}

export default IncidentList;