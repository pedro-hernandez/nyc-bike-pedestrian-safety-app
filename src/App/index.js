import React, { Component } from "react";
import ReactDOM from "react-dom";
import ZipCodeSelect from "../ZipCodeSelect"
import BoroughSelect from "../BoroughSelect";
import IncidentList from "../IncidentList";
import "./style.css";


class App extends Component {

  constructor() {
    super();
    this.state = {
      incidents: [],
      borough: '',
      zip: '',
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

  boroughInfo = async (selectedBorough) => {
    this.setState({
      borough: selectedBorough,
    })
    const nypdApi = await fetch(`https://data.cityofnewyork.us/resource/qiz3-axqb.json?$$app_token=vsw3d1IWA34wIGA56fGGb4DIc&$limit=5&borough=${selectedBorough}&$order=date%20DESC&$offset=0&$where=location%20IS%20NOT%20NULL`);
    const nypdData = await nypdApi.json();

    this.setState({
      incidents: nypdData,
    })
  }

  zipInfo = async (selectedZip) => {
    this.setState({
      zip: selectedZip,
    })

    const nypdApi = await fetch(`https://data.cityofnewyork.us/resource/qiz3-axqb.json?$$app_token=vsw3d1IWA34wIGA56fGGb4DIc&$limit=5&zip_code=${selectedZip}&$order=date%20DESC&$offset=0&$where=location%20IS%20NOT%20NULL`);
    const nypdData = await nypdApi.json();

    this.setState({
      incidents: nypdData,
    })
  }

  render() {
    return (
      <div>
        <h1 className="h1">NYC Bike and Pedestrian Safety</h1>
        <div className="info-pane">
          <ZipCodeSelect zipInfo={this.zipInfo} /> or
          <BoroughSelect boroughInfo={this.boroughInfo} />
          <IncidentList zip={this.state.zip} borough={this.state.borough} incidents={this.state.incidents} />
        </div>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
