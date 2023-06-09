import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const Login = () => {
    const initialValues={
        email:'',
        password:''
    };
    const validationSchema=Yup.object().shape({
        email:Yup.string().email('Email Is Invalid').required('Email Is Required'),
        password:Yup.string().min(8,'Password Must Be Atleast 8 Characters').max(16,'Password must be between 16 characters').required('Password Is Required '),
    });
    const handleSubmit=(values)=>{
        console.log(values);
    }
  return (
    <div>
    <h1>Login Form</h1>
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
            <div>
                <label>Email</label>
                <Field type='text' name='email'/>
                <ErrorMessage name='email' component='div'/>
            </div>
            <div>
                <label>Password</label>
                <Field type='password' name='password'/>
                <ErrorMessage name='password' component='div'/>
            </div>
            <button type='submit'>LogIn</button>
        </Form>
    </Formik>
      
    </div>
  )
}

export default Login
