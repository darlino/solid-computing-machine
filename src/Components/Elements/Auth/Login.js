import './formik-demo.css';
import React from 'react';
import { render } from 'react-dom';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import logo from '../../assets/logo.png'
import classnames from 'classnames';
import {Redirect} from 'react-router-dom'


const dummyData = [
    {
        email : "darnoul20@gmail.com",
        password : "qwerty12345"
    },
    {
        email : "seigneur@darlino.com",
        password: "supalonely12345"
    }
]
const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    password : Yup.string()
      .required("the password is required")
  }),

  mapPropsToValues: ({ user }) => ({
    ...user,
  }),
  handleSubmit: (payload, { setSubmitting }) => {
    dummyData.map(e =>{
        if(JSON.stringify(e) === JSON.stringify(payload) ){
            return (
                <Redirect to='/'></Redirect>
            )
            
        }else{
            
        }
    })
    setSubmitting(false);
  },
  displayName: 'MyForm',
});

const InputFeedback = ({ error }) =>
  error ? <div className="input-feedback">{error}</div> : null;

const Label = ({ error, className, children, ...props }) => {
  return (
    <label className="label" {...props}>
      {children}
    </label>
  );
};

const TextInput = ({ type, id, label, error, value, onChange, className, ...props }) => {
  const classes = classnames(
    'input-group',
    {
      'animated shake error': !!error,
    },
    className
  );
  return (
    <div className={classes}>
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <input
        id={id}
        className="text-input"
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <InputFeedback error={error} />
    </div>
  );
};
const MyForm = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    isSubmitting,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        id="email"
        type="email"
        label="Email"
        placeholder="Enter your email"
        error={touched.email && errors.email}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
        <TextInput
        id="password"
        type="password"
        label="Password"
        placeholder="Enter your password"
        error={touched.password && errors.password}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <div classnames="d-grid col-6 mx-auto">
        <button type="submit" disabled={isSubmitting} className="btn w-500" style={{
            width:"100%",
            background : "#063E7E",
            color:"#fff"

        }}>
            Submit
        </button>
      </div>
    </form>
  );
};

const MyEnhancedForm = formikEnhancer(MyForm);



export const Login = () => (
  <div className="app">
   <div className="container">
       
       <div className="logo-container">
            <img src={logo} style = {{
                width:"600px",
                height:"170px",
                background:"cover",
                marginLeft:"30px"
            }}/>
            
       </div>
       <MyEnhancedForm user={{ email: '',password: '' }} />
   </div>

    
   
  </div>
);

