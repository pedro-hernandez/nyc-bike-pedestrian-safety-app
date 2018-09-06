import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";

class App extends Component {

  constructor() {
    super();
    this.state = {
      cyclistsHurt: 0,
      cyclistsKilled: 0,
      pedestriansHurt: 0,
      pedestriansKilled: 0,
      locationDataLat: '',
      locationDataLong: '',
      vehicleData: '',

    }
  }

  componentDidMount = async () => {
    const nypdApi = await fetch('https://data.cityofnewyork.us/resource/qiz3-axqb.json?$$app_token=vsw3d1IWA34wIGA56fGGb4DIc');
    const nypdData = await nypdApi.json();
    console.log(nypdData);

    this.setState({
      cyclistsHurt: nypdData[9].number_of_cyclist_injured,
      cyclistsKilled: nypdData[9].number_of_cyclist_killed,
      pedestriansHurt: nypdData[9].number_of_pedestrians_injured,
      pedestriansKilled: nypdData[9].number_of_pedestrians_killed,
      locationDataLat: nypdData[9].location.coordinates[0],
      locationDataLong: nypdData[9].location.coordinates[1],
      vehicleData: nypdData[9].vehicle_type_code1,
    })
  }

  render() {
    return (
      <div>
        <h1 className="h1">NYC Bike and Pedestrian Safety</h1>
        <div className="info-pane">
        {this.state.cyclistsHurt > 0 && <p>Cyclists hurt: {this.state.cyclistsHurt}</p>}
        {this.state.cyclistsKilled > 0 && <p>Cyclists killed: {this.state.cyclistsKilled}</p>}
        {this.state.pedestriansHurt > 0 && <p>Pedestrians hurt: {this.state.pedestriansHurt}</p>}
        {this.state.pedestriansKilled > 0 && <p>Pedestrians killed: {this.state.pedestriansKilled}</p>}
        <p>Latitude of incident: {this.state.locationDataLat}</p>
        <p>Longitude of incident: {this.state.locationDataLong}</p>
        <p>Type of vehicle involved: {this.state.vehicleData}</p>
        </div>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
