import React, {Component} from 'react';
import '../App.css';
import User from './user';

class Title extends Component {
    render() {
        return(
            <div>
            <h1>Welcome to {this.props.heading}</h1>
            <User name="Shazam"/>
            </div>
        ); 
    }
}

export default Title;