import React, { Component } from "react";
import Map from "../Map";

class Incident extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }

    }

    render() {
        return (
            <div>
                <Map latitude={this.props.item.latitude} longitude={this.props.item.longitude} />
                {this.props.item.number_of_persons_injured > 0 && <p>People hurt: {this.props.item.number_of_persons_injured}</p>}
                {this.props.item.number_of_persons_killed > 0 && <p>People killed: {this.props.item.number_of_persons_killed}</p>}
                {this.props.item.number_of_cyclists_injured > 0 && <p>Cyclists hurt: {this.props.item.number_of_cyclists_injured}</p>}
                {this.props.item.number_of_cyclist_killed > 0 && <p>Cyclists killed: {this.props.item.number_of_cyclist_killed}</p>}
                {this.props.item.number_of_pedestrians_injured > 0 && <p>Pedestrians hurt: {this.props.item.number_of_pedestrians_injured}</p>}
                {this.props.item.number_of_pedestrians_killed > 0 && <p>Pedestrians killed: {this.props.item.number_of_pedestrians_killed}</p>}
                {this.props.item.number_of_motorist_injured > 0 && <p>Motorists hurt: {this.props.item.number_of_motorist_injured}</p>}
                {this.props.item.number_of_motorist_killed > 0 && <p>Motorists killed: {this.props.item.number_of_motorist_killed}</p>}
            </div>
        )
    }

}

export default Incident;