import React, { Component } from "react";
import ReactDOM from "react-dom";
import ZipCodeSelect from "../ZipCodeSelect"
import BoroughSelect from "../BoroughSelect";
import IncidentList from "../IncidentList";
import PagingButtons from "../PagingButtons"
import "./style.css";


class App extends Component {

  constructor() {
    super();
    this.state = {
      incidents: [],
      borough: '',
      zip: '',
      page: 0,
    }
  }

  // accepts data from BoroughSelect component to get most recent 
  // vehicle collison info from NYC Open Data API 
  boroughInfo = async (selectedBorough) => {
    this.setState({
      borough: selectedBorough,
    })
    const nypdApi = await fetch(`https://data.cityofnewyork.us/resource/qiz3-axqb.json?$$app_token=vsw3d1IWA34wIGA56fGGb4DIc&$limit=5&borough=${selectedBorough}&$order=date%20DESC&$offset=0&$where=location%20IS%20NOT%20NULL`);
    const nypdData = await nypdApi.json();

    this.setState({
      incidents: nypdData,
      zip: '',
    })
  }

  // accepts data from ZipCodeSelect component to get most recent 
  // vehicle collison info from NYC Open Data API 
  zipInfo = async (selectedZip) => {
    this.setState({
      zip: selectedZip,
    })

    const nypdApi = await fetch(`https://data.cityofnewyork.us/resource/qiz3-axqb.json?$$app_token=vsw3d1IWA34wIGA56fGGb4DIc&$limit=5&zip_code=${selectedZip}&$order=date%20DESC&$offset=0&$where=location%20IS%20NOT%20NULL`);
    const nypdData = await nypdApi.json();

    this.setState({
      incidents: nypdData,
      borough: '',
    })
  }

  pageInfo = async (pageChange) => {
    this.setState({
      page: this.state.page + pageChange,
    })

    let nypdData = this.state.incidents;

    if (this.state.borough !== ''){
      let nypdApi = await fetch(`https://data.cityofnewyork.us/resource/qiz3-axqb.json?$$app_token=vsw3d1IWA34wIGA56fGGb4DIc&$limit=5&borough=${this.state.borough}&$order=date%20DESC&$offset=${this.state.page}&$where=location%20IS%20NOT%20NULL`);
      nypdData = await nypdApi.json();
    } else {
      const nypdApi = await fetch(`https://data.cityofnewyork.us/resource/qiz3-axqb.json?$$app_token=vsw3d1IWA34wIGA56fGGb4DIc&$limit=5&zip_code=${this.state.zip}&$order=date%20DESC&$offset=${this.state.page}&$where=location%20IS%20NOT%20NULL`);
      nypdData = await nypdApi.json();
    }
    
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
          <IncidentList zip={this.state.zip} borough={this.state.borough} incidents={this.state.incidents} page={this.state.page}/>
          <PagingButtons pageInfo={this.pageInfo} page={this.state.page} />
        </div>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
