import React from "react";
import { Formik, Form, Field } from 'formik';

export default function SendMessage({}) {
     const send =  (valuse) => {
          console.log("valuse: ",valuse);
         
     }

     return(
     <Formik
          initialValues = {{message: ''}}
         
          onSubmit = {send}>
       {
          <Form>
               <div className="form-group">
                    <label htmlFor="message-input">message to GetMessage</label>
                    <Field  name="message" className="form-control" />
               </div>
               
               <div className="form-group">
                    <button type="submit" className="btn btn-secondary mt-3">Submit</button>
               </div>
          </Form>
       }
     </Formik>
)  
}