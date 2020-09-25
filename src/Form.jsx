import React, { Component } from 'react'

class Form extends Component {
    constructor()
    {
        super();
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    state = 
    {
        name: '',
        phone: ''
    };

    onChange(e)
    {
        this.setState(
            {
                [e.target.name]:e.target.value
            }
        )
    }

    
    onSubmit(e)
    {
        e.preventDefault();
        this.props.addContact(
            {
                ...this.state
            }
        );
        this.setState({
            name:'',
            phone:''
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input name="name" id="name" onChange={this.onChange} value={this.state.name} placeholder="Bir isim giriniz.."/>
                    <br/>
                    <input name="phone" id="phone" onChange={this.onChange} value={this.state.phone} placeholder="Bir telefon giriniz.."/>
                    <button className="btn btn-success btn-block">Add New Data</button>
                </form>
            </div>
        )
    }
}
export default Form;