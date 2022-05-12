import React, {useState} from "react";


export default function LoginControlled(){
    const [loginFormValues, setLoginFormValues] = useState({
        email: '',
        password : ''
    });

    // const updateEmailState =(event) =>{
    //     setLoginFormValues({
    //         email: event.target.value,
    //         password:loginFormValues.password
    //     })
    // }

    // const updatePasswordState =(event) =>{
    //     setLoginFormValues({
    //         email:loginFormValues.email,
    //         password: event.target.value
    //     })
    // }

    const updateFormState =(event) =>{
        setLoginFormValues({
            ...loginFormValues,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(loginFormValues.email, loginFormValues.password);
    }

    




    return(
        <form onSubmit={handleSubmit}>
            <div className="form-group mt-2">
                <label htmlFor="email-input">
                    Email
                </label>
             </div>   
                <input 
                    type="email" 
                    name="email" 
                    id="email-input"
                    value={loginFormValues.email}
                    onChange={updateFormState}/>
            <div>
                <label htmlFor="password-input">
                    Password
                </label>
            </div>  
                <input 
                    type="password" 
                    name="password" 
                    id="password-input"
                    value={loginFormValues.password}
                    onChange={updateFormState}/>
            <div>
                <button className="btn btn-secondary mt-3" type="submit">Submit</button>
            </div>
        </form>
    )
}
