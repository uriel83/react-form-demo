import React from "react";

export default class RegisterFormClass extends React.Component{
    state ={
        firstName:'',
        lastName:'',
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
        console.log(this.state.name, this.state.email, this.state.password);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group mt-2">
                <label htmlFor="firstName-input">
                    firstName
                </label>
                </div>
                <input 
                    className="form-control"
                    type="string" 
                    name="firstName" 
                    id="firstName-input"
                    value={this.state.firstName}
                    onChange={this.updateFormState}/>
                <div className="form-group mt-2">
                <label htmlFor="lastName-input">
                lastName
                </label>
                </div>
                <input 
                    className="form-control"
                    type="string" 
                    name="lastName" 
                    id="lastName-input"
                    value={this.state.lastName}
                    onChange={this.updateFormState}/>
                <div className="form-group mt-2">
                    <label htmlFor="email-input">
                        Email
                    </label>
                </div>   
                <input 
                    className="form-control"
                    type="email" 
                    name="email" 
                    id="email-input"
                    value={this.state.email}
                    onChange={this.updateFormState}/>
            
                <div>
                <div className="form-group mt-2">
                    <label htmlFor="password-input">
                        Password
                    </label>
                </div>    
                <input 
                    className="form-control"
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