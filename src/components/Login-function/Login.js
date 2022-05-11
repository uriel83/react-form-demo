import React from "react";

export default function Login(){
    return(
        <form>
            <div className="form-group mt-2">
                <label htmlFor="email-input">
                    Email
                </label>
                <input type="email" name="email" id="email-input"/>
            </div>
            <div>
                <label htmlFor="password-input">
                    Password
                </label>
                <input type="password" name="password" id="password-input"/>
            </div>
            <div>
                <button className="btn btn-secondary mt-3" type="submit">Submit</button>
            </div>
        </form>
    )
}
