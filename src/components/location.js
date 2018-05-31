import React, {Component} from 'react';
//import './App.css';
import './location.css';


export default class Location extends Component {

    handleClick = () => {
        this.props.handleClick(this.props.location);
    }
    render() {
        const style = {
            backgroundImage: `url('${this.props.location.imageUrl}')`
        };
        const title = this.props.location.name;
        return(
            <div className="location" onClick={this.handleClick}>
                <div className="location-picture" style={style}></div>
                <div className="location-title">
                  {title}
                </div>
            </div>    
        );
    }
    
}

//export default Location;