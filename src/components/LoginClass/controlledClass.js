import React from "react";

export default class ControlledClass extends React.Component {
    state ={
        email:'',
        password: ''
    }
    updateFormState =(event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.email, this.state.password);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <div className="form-group mt-2">
                <label htmlFor="email-input">
                    Email
                </label>
                <input 
                    type="email" 
                    name="email" 
                    id="email-input"
                    value={this.state.email}
                    onChange={this.updateFormState}/>
            </div>
            <div>
                <label htmlFor="password-input">
                    Password
                </label>
                <input 
                    type="password" 
                    name="password" 
                    id="password-input"
                    value={this.state.password}
                    onChange={this.updateFormState}/>
            </div>
            <div>
                <button className="btn btn-secondary mt-3" type="submit">Submit</button>
            </div>
        </form>
        )
    }
}