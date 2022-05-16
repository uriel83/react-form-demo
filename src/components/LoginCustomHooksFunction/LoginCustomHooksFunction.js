import React from "react";
import useFormState from "./formHook"


export default function LoginCustomHooksFunction(){
    const handleLoginSubmit = () =>{ 
        console.log(formValues.email, formValues.password);
    }
   const [updateFormState, handleFormSubmit, formValues] = useFormState(
        {
         email:'',
         password: ''
        },
        handleLoginSubmit
        )

    

   
    return(
        <form onSubmit={handleFormSubmit}>
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
                    value={formValues.email}
                    onChange={updateFormState}/>
            <div>
                <label htmlFor="password-input">
                    Password
                </label>
            </div>  
                <input
                    className="form-control" 
                    type="password" 
                    name="password" 
                    id="password-input"
                    value={formValues.password}
                    onChange={updateFormState}/>
            <div>
                <button className="btn btn-secondary mt-3" type="submit">Submit</button>
            </div>
        </form>
    )
}