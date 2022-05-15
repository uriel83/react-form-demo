import React from "react";
import FormWithState from "./form-with-state"

class NewControlledClass extends React.Component {
    
  
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.props.state.email, this.props.state.password);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <div className="form-group mt-2">
                <label htmlFor="email-input">
                    Email
                </label>
              </div>  
                <input 
                    type="email" 
                    name="email" 
                    id="email-input"
                    value={this.props.state.email}
                    onChange={this.props.updateFormState}/>
            
            <div>
                <label htmlFor="password-input">
                    Password
                </label>
             </div>   
                <input 
                    type="password" 
                    name="password" 
                    id="password-input"
                    value={this.props.state.password}
                    onChange={this.props.updateFormState}/>
            
            <div>
                <button className="btn btn-secondary mt-3" type="submit">Submit</button>
            </div>
        </form>
        )
    }
}
export default FormWithState({
    email:'',
    password: ''
})(NewControlledClass)
