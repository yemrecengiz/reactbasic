import React, { Component } from 'react';
import Form from './Form';
import List from "./List";
import PropTypes from 'prop-types';

class Contacts extends Component {
    static propTypes = 
    {
        contacts:PropTypes.array.isRequired,
        addContact:PropTypes.func
    };
    render() {
        return (
            <div>
            <h3>Add New Data</h3>
                
                <Form addContact={this.props.addContact}/>
                <List contacts={this.props.contacts}/>
            </div>
        )
    }
}
export default Contacts;