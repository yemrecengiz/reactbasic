import React, { Component } from 'react';
import Contacts from "./Contacts";
import "./App.css";

class App extends Component {

  constructor(props){
    super();
    this.addContact = this.addContact.bind(this);
  }


  state = {
    contacts:[{
      name:'Emre',
      phone:'0555 444 5478'
    },
    {
      name:'Tuba',
      phone:'0545 222 1234'
    },
  ]
  };


  addContact(contact){
    console.log(contact);

    const{contacts} = this.state;
    contacts.push(contact);

    this.setState(
      {
        contacts:contacts
      }
    );
  }

  

  render()
    {
      return (
        <div className="App">
          <Contacts addContact={this.addContact} contacts={this.state.contacts}/>
        </div>
      );
    }
}

export default App;
