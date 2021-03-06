import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import userService from "../../sevices/user.service";



export default function LoginFormik({tokenCB}) {
     const login = async (valuse) => {
          console.log("valuse: ",valuse);
          const token = await userService.login(valuse);
          console.log("token: ",token);
          tokenCB(token);
     }

     // const handleSumbmit = (values) =>{
     //      console.log(`${values.email} ${values.password}`);
     // }
     const LoginSchema = Yup.object().shape({
          email: Yup.string().email('Invalid email').required('Required'),
          password: Yup.string().min(5, 'Too Short!').max(12, 'Too Long!').required('Required')
        });
     return(
     <Formik
          initialValues = {{email: '', password: ''}}
          validationSchema={LoginSchema} 
          onSubmit = {login}>
       {
          <Form>
               <div className="form-group">
                    <label htmlFor="email-input">Email</label>
                    <Field  name="email" className="form-control" />
                    <ErrorMessage name="email" component="div" style={{color:'red'}}/>
               </div>
               <div className="form-group">
                    <label htmlFor="password-input">Password</label>
                    <Field type="password" name="password" className="form-control"/>
                    <ErrorMessage name="password" component="div" style={{color:'red'}}/>
               </div>
               <div className="form-group">
                    <button type="submit" className="btn btn-secondary mt-3">Submit</button>
               </div>
          </Form>
       }
     </Formik>
)  
}