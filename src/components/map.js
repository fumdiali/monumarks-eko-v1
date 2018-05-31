import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import '../App.css';

import './marker.css';

import Marker from './marker';



export default class Map extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //       locations: []
    //     };
    //   }

    render() {

        const center = {
            lat: 6.5244,
            lng: 3.3792
          }
          
          
        return(
           <div className="map"> 
                <GoogleMapReact
                    //bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                    center={center}
                    zoom={11}>
                    <Marker
                        lat={6.4764}
                        lng={3.3694}
                        place={'Arts Theatre'}
                        />
                  </GoogleMapReact>
            </div>
        );
    }
}



                    // <Marker
                    //     lat={6.4764}
                    //     lng={3.3694}
                    //     place={'Art Theatre'}/>
                    //  {this.state.locations.map((location) => {
                    //    <Marker lat={location.lat} lng={location.lng} />
                    // })} 