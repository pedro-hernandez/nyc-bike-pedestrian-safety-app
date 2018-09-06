import React, { Component } from "react";
import ReactDOM from "react-dom";
import BoroughSelect from "../BoroughSelect";
import "./style.css";
import IncidentList from "../IncidentList";

class App extends Component {

  constructor() {
    super();
    this.state = {
      incidents: [],
      borough: '',
    }
  }

  // componentDidMount = async () => {
  //   const nypdApi = await fetch('https://data.cityofnewyork.us/resource/qiz3-axqb.json?$$app_token=vsw3d1IWA34wIGA56fGGb4DIc&$limit=10&$offset=0&$where=location%20IS%20NOT%20NULL');
  //   const nypdData = await nypdApi.json();
  //   // console.log(nypdData);

  //   this.setState({
  //     // cyclistsHurt: nypdData[1].number_of_cyclist_injured,
  //     // cyclistsKilled: nypdData[1].number_of_cyclist_killed,
  //     // pedestriansHurt: nypdData[1].number_of_pedestrians_injured,
  //     // pedestriansKilled: nypdData[1].number_of_pedestrians_killed,
  //     // locationDataLat: nypdData[1].latitude,
  //     // locationDataLong: nypdData[1].longitude,
  //     // vehicleData: nypdData[1].vehicle_type_code1,
  //   })
  // }

  boroughInfo = async (selectedBorough) =>{
    this.setState({
      borough: selectedBorough,
    })
    const nypdApi = await fetch(`https://data.cityofnewyork.us/resource/qiz3-axqb.json?$$app_token=vsw3d1IWA34wIGA56fGGb4DIc&$limit=10&borough=${selectedBorough}&$offset=0&$where=location%20IS%20NOT%20NULL`);
    const nypdData = await nypdApi.json();

    this.setState({
      incidents: nypdData,
    })
    // let boroughString = `${this.state.borough}`;
    // console.log(boroughString);
  }

  render() {
    return (
      <div>
        <h1 className="h1">NYC Bike and Pedestrian Safety</h1>
        <div className="info-pane">
        <BoroughSelect boroughInfoProps={this.boroughInfo} />
        <IncidentList incidents={this.state.incidents} />
        {/* {this.state.cyclistsHurt > 0 && <p>Cyclists hurt: {this.state.cyclistsHurt}</p>}
        {this.state.cyclistsKilled > 0 && <p>Cyclists killed: {this.state.cyclistsKilled}</p>}
        {this.state.pedestriansHurt > 0 && <p>Pedestrians hurt: {this.state.pedestriansHurt}</p>}
        {this.state.pedestriansKilled > 0 && <p>Pedestrians killed: {this.state.pedestriansKilled}</p>}
        <p>Latitude of incident: {this.state.locationDataLat}</p>
        <p>Longitude of incident: {this.state.locationDataLong}</p>
        {this.state.vehicleData && <p>Type of vehicle involved: {this.state.vehicleData}</p>} */}
        </div>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
