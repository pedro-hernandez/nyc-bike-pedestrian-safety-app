import React, { Component } from "react";
import moment from "moment";
import Incident from "../Incident";
import "./style.css";


class IncidentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            key: 0,
            showIncident: false,
            coordsObj: {},
        }
    }

    render() {
        const borough = this.props.borough;
        const incidents = this.props.incidents;
        const zip = this.props.zip;

        if (borough || incidents.length > 0) {
            return (
                <div>
                    <h2>The following accidents occured in {borough === 'BRONX' ? `THE BRONX` : borough} {zip}:</h2>
                    <div className="incidents_wrapper">
                        {incidents.map((item, index) => {
                            return (
                                <div className={(parseInt(item.number_of_persons_injured, 10) === 0 && parseInt(item.number_of_persons_killed, 10) === 0) ? "incident" : "incident-hurt"} key={item.unique_key} value={this.state.value}>
                                    <div className="text-summary">
                                        {(parseInt(item.number_of_persons_injured, 10) === 0 && parseInt(item.number_of_persons_killed, 10) === 0) ? `No one was hurt ` : <span className="hurt">At least one person was hurt </span>}
                                        on {moment(item.date).format("dddd, MMMM Do YYYY")} at {moment(item.time, 'hh:mm a').format("hh:mm a")}{borough && <span className="zip-span"> in zip code {item.zip_code}</span>}
                                    </div>
                                    <Incident item={item} showIncident={this.state.showIncident} />
                                </div>
                            );
                        })
                        }
                    </div>

                </div>
            );
        } else if (zip && incidents.length === 0) {
            return (<h2>Please Enter a Valid, Five-Digit NYC Zip Code</h2>);
        } else {
            return null;
        }
    }
}

export default IncidentList;