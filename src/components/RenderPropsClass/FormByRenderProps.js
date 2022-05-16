import React from "react";
import RenderProps from "./RenderProps";

export default class FormByRenderProps extends React.Component {
    handleLoginSubmit = (values) => {
        console.log(values.email, values.password);
    }
    render(){
        return(
            <RenderProps
            callBack = {this.handleLoginSubmit}
            initialState={{
                email:'',
                password: ''
            }     
            } 
            render={
                (updateFormState, handleSubmit, values)=>{
                    return(
                       <form onSubmit={handleSubmit}>
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
                                    value={values.email}
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
                                    value={values.password}
                                    onChange={updateFormState}/>
                            
                            <div>
                                <button className="btn btn-secondary mt-3" type="submit">Submit</button>
                            </div>
                        </form> 
                    )
                }
            }/>
            
        )
    }
}
// export default FormWithState({
//     email:'',
//     password: ''
// })(NewControlledClass)