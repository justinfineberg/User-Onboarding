import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import axios from 'axios';
import * as yup from 'yup';
import schema from './formSchema'


//these are the inital inputs for the slices of state. 
const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false
}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: '',
}
const initalUsers = [{
  name: 'Jim',
  email: 'sdjf@ls.com',
  password: 'dsfsdf',
  terms: false
}]
const initialDisabled = true




function App() {
const [users, setUsers] = useState(initalUsers);
const [formValues, setFormValues] = useState(initialFormValues);
const [formErrors, setFormErrors] = useState(initialFormErrors);
const [disabled, setDisabled] = useState(initialDisabled);


//this is the function to validate the information being entererd. 
const validate = (name, value) => {
  yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: '' }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
}

//this is function for changing the form and validating it at the same time.  
const changeForm = (name, value) =>{
  validate(name, value)
  setFormValues({
    ...formValues, [name]: value
  })
}

//this is the form submission function
const submitForm = () =>{
  const newUser = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    terms: formValues.terms
  }
  axios.post('https://reqres.in/api/users', newUser)
  .then(res=>{
    setUsers([...users, res.data])
  })
  .catch(err=>{
    console.log(err)
  })
  setFormValues(initialFormValues)
}


//this changes the status of the submit button if all condition are met via yup
useEffect(() => {
  //  ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
  schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])


  return (
    <div className="App">
      <h1 className="mainTitle"> Form to Create New Users</h1>
      <Form changeForm={changeForm} values={formValues} submit={submitForm} disabled={disabled} />
      <div className="errors">
        <div>{formErrors.name}</div>
        <div>{formErrors.email}</div>
        <div>{formErrors.password}</div>
        <div>{formErrors.terms}</div>
      </div>
      <div>
        <h3>Current Users</h3>
      </div>
      {users.map((user, index)=>{
        return (<div key={index}>
          <h2>User {index+1} </h2>
          <h5>Name: {user.name}</h5>
          <h5>Email: {user.email}</h5>
          <h5>Password: {user.password}</h5>
        </div>
        )
      })}
    </div>
  );
}

export default App;
