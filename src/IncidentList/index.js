import React, { Component } from "react";
import "./style.css";
import moment from "moment";

class IncidentList extends Component {

    render() {
        return (
            <div>
                <h2 className="h2">The following recently occured in {this.props.borough === 'BRONX' ? `THE BRONX` : this.props.borough} {this.props.zip}</h2>
                <div className="incidents_wrapper">
                    {this.props.incidents.map((item, index) => {
                        return (
                            <div key={item.unique_key}>{moment(item.date).format("dddd, MMMM Do YYYY")} at {moment(item.time, 'hh:mm a').format("hh:mm a")} in zip code {item.zip_code}.
                            {item.number_of_persons_injured > 0 && <p>People hurt: {item.number_of_persons_injured}</p>}
                                {item.number_of_persons_killed > 0 && <p>People killed: {item.number_of_persons_killed}</p>}
                                {item.number_of_cyclists_injured > 0 && <p>Cyclists hurt: {item.number_of_cyclists_injured}</p>}
                                {item.number_of_cyclist_killed > 0 && <p>Cyclists killed: {item.number_of_cyclist_killed}</p>}
                                {item.number_of_pedestrians_injured > 0 && <p>Pedestrians hurt: {item.number_of_pedestrians_injured}</p>}
                                {item.number_of_pedestrians_killed > 0 && <p>Pedestrians killed: {item.number_of_pedestrians_killed}</p>}
                                {item.number_of_motorist_injured > 0 && <p>Motorists hurt: {item.number_of_motorist_injured}</p>}
                                {item.number_of_motorist_killed > 0 && <p>Motorists killed: {item.number_of_motorist_killed}</p>}
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