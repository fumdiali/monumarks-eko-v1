import React, {Component} from 'react';
import '../App.css';
import Title from './title';
import User from './user';

class Hello extends Component {
    render() {
        return(
            <div className="container">
                <Title heading="digireal!s" />
                
            </div>    
        );
    }
}

export default Hello;