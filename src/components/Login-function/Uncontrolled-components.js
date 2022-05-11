import React from "react";

export default function UncontrolledComponents(){
    const emailRef = React.createRef();
    const passwordRef = React.createRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email ,password);
    }
    return(
        <form onSubmit={handleSubmit} noValidate>
            <div className="form-group mt-2">
                <label htmlFor="email-input">
                    Email
                </label>
                <input 
                    type="email" 
                    name="email" 
                    id="email-input"
                    ref={emailRef}/>
            </div>
            <div>
                <label htmlFor="password-input">
                    Password
                </label>
                <input 
                    type="password" 
                    name="password" 
                    id="password-input"
                    ref={passwordRef}/>
            </div>
            <div>
                <button className="btn btn-secondary mt-3" type="submit">Submit</button>
            </div>
        </form>
    )
}