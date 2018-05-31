import React, {Component} from 'react';
import '../App.css';

class User extends Component {
    render() {
        return <h4>Hello, {this.props.name}</h4>
    }
}

export default User;