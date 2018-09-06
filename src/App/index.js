import React, { Component } from "react";
import ReactDOM from "react-dom";

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
    const nypdApi = await fetch('https://data.cityofnewyork.us/resource/qiz3-axqb.json');
    const nypdData = await nypdApi.json();
    console.log(nypdData);

    this.setState({
      cyclistsHurt: nypdData[0].number_of_cyclist_injured,
      cyclistsKilled: nypdData[0].number_of_cyclist_killed,
      pedestriansHurt: nypdData[0].number_of_pedestrians_injured,
      pedestriansKilled: nypdData[0].number_of_pedestrians_killed,
      locationDataLat: nypdData[0].location.coordinates[0],
      locationDataLong: nypdData[0].location.coordinates[1],
      vehicleData: nypdData[0].vehicle_type_code1,
    })
  }

  render() {
    return (
      <div>
        <p>Cyclists hurt: {this.state.cyclistsHurt}</p>
        <p>Cyclists killed: {this.state.cyclistsKilled}</p>
        <p>Pedestrians hurt: {this.state.pedestriansHurt}</p>
        <p>Pedestrians killed: {this.state.pedestriansKilled}</p>
        <p>Latitude of incident: {this.state.locationDataLat}</p>
        <p>Longitude of incident: {this.state.locationDataLong}</p>
        <p>Type of vehicle involved: {this.state.vehicleData}</p>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
