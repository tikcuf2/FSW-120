import React from 'react';
import NameList from '../name-entries/NameList.js';
import './nameForm.css';

class NameForm extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            
            nameBadges: []
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name] : value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let newBadge = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
         
        }
        this.setState({ 
            nameBadges : [ newBadge, ...this.state.nameBadges ], 
            firstName: "",
            lastName: "",
           
        })
    }

    render() {
        return (
            <div id ="root">
               
                    <form className="wrapper" id="badgeArea" onSubmit={this.handleSubmit}>
                        <input
                            className="input-left"
                            type="text"
                            name="firstName"
                            value={this.state.firstName} 
                            placeholder="First Name" 
                            onChange={this.handleChange}
                            minLength="3"
                            required={true}
                        />
                        <input
                            className="input-right"
                            type="text"
                            name="lastName"
                            value={this.state.lastName} 
                            placeholder="Last Name" 
                            onChange={this.handleChange}
                            minLength="3"
                            required={true}
                        />
                     
                      
                      
                      <div>
                      
                            <button className="submit-button">Submit</button>
                        </div>
                      
                    </form>
                    <NameList
                    nameBadges={this.state.nameBadges}     
                />
                
            </div>
        );
    }
}

export default NameForm;