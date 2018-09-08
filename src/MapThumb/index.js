import React, { Component } from "react";

class MapThumb extends Component {

    render() {
        return (
            <div className="map-thumb">
                <img src={`https://api.mapbox.com/v4/mapbox.light/pin-s+b60000(${this.props.longitude},${this.props.latitude})/${this.props.longitude},${this.props.latitude},15/200x200.png?access_token=pk.eyJ1IjoicGhlcm4iLCJhIjoiY2psc2JlN3lnMDBiaTNwcGhyaWlpa2VldCJ9.665bVWc7nQRX882OxrIaNg`} alt={`Map thumbnail of longitude ${this.props.longitude} and latitude ${this.props.latitude}`} />
            </div>
        );
    }
}

export default MapThumb;