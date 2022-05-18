import React, {useState} from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import userService from "../../sevices/user.service";



export default function RegisterFormik({tokenCB}) {
    const [errorText, setErrorText] = useState(null);
    const register = async (valuse) => {
        console.log("valuse: ",valuse);
        try {
            const token = await userService.register(valuse);
            console.log("token: ",token);
            tokenCB(token); 
        } catch (err) {
            const {error} = await err.response.json() ;
            setErrorText(error);
        }
        
   }
    //  const handleSumbmit = (values) =>{
    //       console.log(`${values.firstName} ${values.lastName} ${values.email} ${values.password} `);
    //  }
     const LoginSchema = Yup.object().shape({
        firstName: Yup.string().min(2, 'Too Short!').max(20, 'Too Long!'),
        lastName: Yup.string().min(2, 'Too Short!').max(20, 'Too Long!'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(5, 'Too Short!').max(12, 'Too Long!').required('Required')
        });
     return(
     <Formik
          initialValues = {{firstName: '', lastName: '',email: '', password: ''}}
          validationSchema={LoginSchema} 
          onSubmit = {register}>
       {
          <Form>
               <div className="form-group">
                    <label htmlFor="firstName-input">firstName</label>
                    <Field  name="firstName" className="form-control" />
                    <ErrorMessage name="firstName" component="div" style={{color:'red'}}/>
               </div>
               <div className="form-group">
                    <label htmlFor="lastName-input">lastName</label>
                    <Field type="lastName" name="lastName" className="form-control"/>
                    <ErrorMessage name="lastName" component="div" style={{color:'red'}}/>
               </div>
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
               {
                   errorText && (
                       <div>
                           errorText
                       </div>
                   )
               }
          </Form>
       }
     </Formik>
     )
    }