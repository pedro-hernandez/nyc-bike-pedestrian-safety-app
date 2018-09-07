import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

const mapboxToken = 'pk.eyJ1IjoicGhlcm4iLCJhIjoiY2psc2JlN3lnMDBiaTNwcGhyaWlpa2VldCJ9.665bVWc7nQRX882OxrIaNg';

class Map extends Component {
    state = {
        viewport: {
            width: 500,
            height: 250,
            latitude: parseFloat(this.props.latitude),
            longitude: parseFloat(this.props.longitude),
            zoom: 14
        }
    };

    render() {
        return (
            <ReactMapGL
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({ viewport })}
                mapboxApiAccessToken={mapboxToken} >
            <Marker latitude={parseFloat(this.props.latitude)} longitude={parseFloat(this.props.longitude)}>
            <div>HERE</div>
            </Marker>
            </ReactMapGL>
        );
    }
}

export default Map;