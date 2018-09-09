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
            showIncident: false,
        }
    }

    handleClick = (event) => {

        this.setState({
            value: event.target.value,
            showIncident: true,
        });
        
        let incidentInfo = true;
        this.props.incidentDisplay(incidentInfo);

        // let clicked = incidentInfo;
        console.log(incidentInfo);

    }

    // generates listing of recent motor vehicle collisions and 
    // conditionally renders additional details when applicable
    render() {
        console.log(this.state.showIncident);
        
        return ((this.props.borough || this.props.zip) &&
            <div>
                <h2 className="h2">The following recently occured in {this.props.borough === 'BRONX' ? `THE BRONX` : this.props.borough} {this.props.zip}</h2>
                <div className="incidents_wrapper">
                    {this.props.incidents.map((item, index) => {
                        return (
                            <div className="incidents" key={item.unique_key} value={this.state.value} onClick={this.handleClick} >
                                {(parseInt(item.number_of_persons_injured, 10) === 0 && parseInt(item.number_of_persons_killed, 10) === 0) ? `No one was hurt` : `At least one person was hurt`} {moment(item.date).format("dddd, MMMM Do YYYY")} at {moment(item.time, 'hh:mm a').format("hh:mm a")}{this.props.borough && <span className="zip-span"> in zip code {item.zip_code}</span>}
                                <p>Click or tap for details.</p>
                                <MapThumb latitude={item.latitude} longitude={item.longitude} />
                                {this.state.showIncident && <Incident item={item}/>}
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