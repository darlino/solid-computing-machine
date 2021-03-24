import './formik-demo.css';
import React,{useState} from 'react';
import { render } from 'react-dom';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import logo from '../../assets/logo.png'
import classnames from 'classnames';

// fausse données

const dummyData =[
    {
    },
] 

//fonction pour hasher le mot de passe
const generateHash = (str ,algo = "SHA-256") =>{
    let strBuf = new TextEncoder('utf-8').encode(str);
    return crypto.subtle.digest(algo, strBuf)
    .then(hash => {
      window.hash = hash;
      let result = '';
      const view = new DataView(hash);
      for (let i = 0; i < hash.byteLength; i += 4) {
        result += ('00000000' + view.getUint32(i).toString(16)).slice(-8);
      }
      return result;
    });
  }

  
const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .min(2, "C'mon, your name is longer than that")
      .required('First name is required.'),
    lastName: Yup.string()
      .min(2, "C'mon, your name is longer than that")
      .required('Last name is required.'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    password : Yup.string()
      .min(8, "Your password is too short")
      .required("the password is required")
  }),

  mapPropsToValues: ({ user }) => ({
    ...user,
  }),
  
  // lorsque l'on soumet le formulaire 
  handleSubmit: (payload, { setSubmitting }) => {
    dummyData.push(
        {
            firstName : payload.firstName,
            lastName : payload.lastName,
            email : payload.email,
            password : generateHash(payload.password)
        }
    )
    alert(dummyData)
    console.log(dummyData);
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
        id="firstName"
        type="text"
        label="First Name"
        placeholder="John"
        error={touched.firstName && errors.firstName}
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="lastName"
        type="text"
        label="Last Name"
        placeholder="Doe"
        error={touched.lastName && errors.lastName}
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
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



export const Register = () => (
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
       <MyEnhancedForm user={{ email: '', firstName: '', lastName: '',password: '' }} />
   </div>

    
   
  </div>
);

