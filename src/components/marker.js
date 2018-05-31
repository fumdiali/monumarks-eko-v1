import React, {Component} from 'react';
import '../App';
import './marker.css';

export default class Marker extends Component {
    
    

    render() {
        let classes = "marker";
        if(this.props.selectedLocation){
            classes += " selected";
        }
       return(
           <div className={classes}>
             {this.props.text}
           </div>
       );
    }
}