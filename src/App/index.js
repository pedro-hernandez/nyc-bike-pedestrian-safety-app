import React, { Component } from "react";
import ReactDOM from "react-dom";
import ZipCodeSelect from "../ZipCodeSelect"
import BoroughSelect from "../BoroughSelect";
import IncidentList from "../IncidentList";
import PagingButtons from "../PagingButtons";
import Stats from "../Stats";
import "./style.css";


class App extends Component {

  constructor() {
    super();
    this.state = {
      incidents: [],
      borough: '',
      zip: '',
      page: 0,
      longitude: 0,
      latitude: 0,
    }
  }

  // accepts data from BoroughSelect component to get most recent
  // vehicle collison info from NYC Open Data API
  boroughInfo = async (selectedBorough) => {
    this.setState({
      borough: selectedBorough,
    });
    const nypdApi = await fetch(`https://data.cityofnewyork.us/resource/qiz3-axqb.json?$$app_token=vsw3d1IWA34wIGA56fGGb4DIc&$limit=5&borough=${selectedBorough}&$order=crash_date%20DESC&$offset=${this.state.page}&$where=location%20IS%20NOT%20NULL`);
    const nypdData = await nypdApi.json();

    this.setState({
      incidents: [...nypdData],
      zip: '',
      page: 0,
    });
  }

  // accepts data from ZipCodeSelect component to get most recent
  // vehicle collison info from NYC Open Data API
  zipInfo = async (selectedZip) => {
    this.setState({
      zip: selectedZip,
    });

    const nypdApi = await fetch(`https://data.cityofnewyork.us/resource/qiz3-axqb.json?$$app_token=vsw3d1IWA34wIGA56fGGb4DIc&$limit=5&zip_code=${selectedZip}&$order=crash_date%20DESC&$offset=0&$where=location%20IS%20NOT%20NULL`);
    const nypdData = await nypdApi.json();

    this.setState({
      incidents: [...nypdData],
      borough: '',
      page: 0,
    });
  }

  // pages through results using next/back buttons
  pageInfo = async (pageChange) => {

    this.setState(prevState => ({
      page: prevState.page + pageChange,
    }));

    let nypdData = [];

    if (this.state.borough !== '') {
      await fetch(this.state.page);
      const nypdApi = await fetch(`https://data.cityofnewyork.us/resource/qiz3-axqb.json?$$app_token=vsw3d1IWA34wIGA56fGGb4DIc&$limit=5&borough=${this.state.borough}&$order=crash_date%20DESC&$offset=${this.state.page}&$where=location%20IS%20NOT%20NULL`);
      nypdData = await nypdApi.json();
      this.setState({
        incidents: [...nypdData],
      });
    } else if (this.state.zip !== '') {
      await fetch(this.state.page);
      const nypdApi = await fetch(`https://data.cityofnewyork.us/resource/qiz3-axqb.json?$$app_token=vsw3d1IWA34wIGA56fGGb4DIc&$limit=5&zip_code=${this.state.zip}&$order=crash_date%20DESC&$offset=${this.state.page}&$where=location%20IS%20NOT%20NULL`);
      nypdData = await nypdApi.json();
      this.setState({
        incidents: [...nypdData],
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>⚠️ NYC Bike and Pedestrian Safety App ⚠️</h1>
        </div>
        <div className="top-info-bar">
          <Stats />
        </div>
        <div className="content">
          <div className="selectors-wrapper">
            <ZipCodeSelect zipInfo={this.zipInfo} />
            <BoroughSelect boroughInfo={this.boroughInfo} />
          </div>
          <div className="info-pane">
            <IncidentList zip={this.state.zip} borough={this.state.borough} incidents={this.state.incidents} page={this.state.page} incidentDisplay={this.incidentDisplay} latitude={this.state.latitude} longitude={this.state.longitude} pageInfo={this.pageInfo} />
            {((this.state.zip || this.state.borough) !== '' && this.state.incidents.length > 0) && <PagingButtons pageInfo={this.pageInfo} page={this.state.page} />}
          </div>
        </div>
        <div className="footer">
          <p>Data courtesy of the NYPD and NYC Open Data.</p>
        </div>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
