import React from "react";

export default class RegisterFormClass extends React.Component{
    state ={
        name:'',
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
                <label htmlFor="name-input">
                    Name
                </label>
                </div>
                <input 
                    type="string" 
                    name="name" 
                    id="name-input"
                    value={this.state.name}
                    onChange={this.updateFormState}/>
            
                <div className="form-group mt-2">
                    <label htmlFor="email-input">
                        Email
                    </label>
                </div>   
                <input 
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