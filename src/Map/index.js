import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import "./style.css";

const mapboxToken = 'pk.eyJ1IjoicGhlcm4iLCJhIjoiY2psc2JlN3lnMDBiaTNwcGhyaWlpa2VldCJ9.665bVWc7nQRX882OxrIaNg';

class Map extends Component {
    state = {
        viewport: {
            width: 600,
            height: 300,
            latitude: parseFloat(this.props.latitude),
            longitude: parseFloat(this.props.longitude),
            zoom: 14,
            pitch: 45,
        }
    };

    render() {
        return (
            <ReactMapGL
                {...this.state.viewport}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                onViewportChange={(viewport) => this.setState({ viewport })}
                mapboxApiAccessToken={mapboxToken} >
            <Marker latitude={parseFloat(this.props.latitude)} longitude={parseFloat(this.props.longitude)}>
            <div></div>
            </Marker>
            </ReactMapGL>
        );
    }
}

export default Map;