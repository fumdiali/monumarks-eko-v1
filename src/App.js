import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
//import logo from './logo.svg';
import './App.css';
import Location from './components/location';
//import Map from './components/map';
import Marker from './components/marker';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      locations: [],
      allLocations: [],
      selectedLocation: null,
      search: ""
    };
  }

  componentDidMount(){
    const url = "https://raw.githubusercontent.com/fumdiali/monumarks-boilerplate/master/locations.json";
    fetch(url) // AJAX
      .then(response => response.json())
      .then((data) => {
        this.setState({
          locations: data,
          allLocations: data
        });
      })
  }

  zoomLocation = (location) => {
    console.log(location);
    this.setState({
      selectedLocation: location
    })
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
      locations: this.state.allLocations.filter(((location) => new RegExp(event.target.value, "i").exec(location.name)))
    })
  }
  
  render() {

    let center = {
      lat: 6.4537,
      lng: 3.3900
    }

    if(this.state.selectedLocation){
      center = {
        lat: this.state.selectedLocation.lat,
        lng: this.state.selectedLocation.lng
      }
    }
    return (
      <div className="app">
                <div className="main">
                  <div className="search">
                    <input type="text"
                           placeholder="Search.."
                           value={this.state.search}
                           onChange={this.handleSearch}
                    />
                  </div>
                  <div className="locations">
                      {this.state.locations.map((location) => {
                        return <Location key={location.id}
                         location={location} 
                         handleClick={this.zoomLocation}/>
                      })}
                  </div>
                  
                </div> 

                <div className="map">
                <GoogleMapReact
                    //bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                    center={center}
                    zoom={15}>
                    {this.state.locations.map((location) => {
                     return <Marker key={location.id}
                        lat={location.lat}
                        lng={location.lng}
                        text={location.name}
                        selected={location === this.state.selectedLocation}
                        />
                    })}
                  </GoogleMapReact>
                </div>  
                
       </div> 
    );
  }
}

export default App;
