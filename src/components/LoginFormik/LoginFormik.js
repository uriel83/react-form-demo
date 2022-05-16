import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';



export default function LoginFormik() {
     const handleSumbmit = (values) =>{
          console.log(`${values.email} ${values.password}`);
     }
     const LoginSchema = Yup.object().shape({
          email: Yup.string().email('Invalid email').required('Required'),
          password: Yup.string().min(5, 'Too Short!').max(12, 'Too Long!').required('Required')
        });
     return(
     
     <Formik
          initialValues = {
               {
               enail: '',
               password: ''
               }
          }
          validationSchema={LoginSchema} 
          onSubmit = {handleSumbmit}
          render={()=>{
               return(
                    <Form>
                         <div className="form-group">
                         <label htmlFor="email-input">
                              Email
                         </label>
                              <Field  name="email" className="form-control" />
                              <ErrorMessage name="email" component="div" />
                         </div>
                         <div className="form-group">
                         <label htmlFor="password-input">
                              Password
                         </label>
                              <Field type="password" name="password" className="form-control"/>
                              <ErrorMessage name="password" component="div" className="invalid-feedback"/>
                         </div>
                         <div className="form-group">
                              <button type="submit" className="btn btn-primary mt-3">Submit</button>
                         </div>
                    </Form>
               )

          }}
     />
    
)
   
    
}