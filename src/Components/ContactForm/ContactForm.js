import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './ContactForm.css';

import { useAppContext } from '../../Context/AppContext';


export const ContactForm = () => {
  const value = useAppContext();
  const[formSend, setFormSend] = useState(false)
  

  return (
    <div className='container-Form' method='get'>
      <h2>Add New Contact</h2>

      <Formik
        initialValues={{
          full_name: '',
          address:'',
          phone: '',
          email: ''
        }}
        validate={(values) => {
          let errors = {}

          if(!values.full_name){
            errors.full_name = "Please, write a name."
          }
          else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.full_name)){
            errors.full_name = "Invalid name! Just letters."
          }

          if(!values.email){
            errors.email = "Please, write an email."
          }
          else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
            errors.email = "Invalid email!"
          }

          return errors;
        }}
        onSubmit={(values, {resetForm})=>{
          value.action.handleAddContact(values);
          resetForm();
          setFormSend(true);
          setTimeout(()=> setFormSend(false),5000)
        }}
      >

        {( {errors} ) => (
          <Form className='needs-validation'>
            <div className="col-12">
              <label className="form-label">Contact Full Name:</label>
              <Field
                type="text"
                className={`form-control`}
                name='full_name'
                placeholder="Martha Jones"
                required 
              />
              <ErrorMessage name='full_name' component={()=>(
                <div className='invalid'>{errors.full_name}</div>
              )} />
            </div>
    
            <div className="col-12">
              <label className="form-label">Address:</label>
              <Field
                type="text"
                className="form-control"
                name='address'
                placeholder="1234 Main St"
              />
            </div>
    
            <div className="col-12">
              <label className="form-label">Phone:</label>
              <Field
                type="text"
                className="form-control"
                name='phone'
                placeholder="(+34) 2999-4454"
              />
            </div>
    
            <div className="col-12">
              <label className="form-label">Email:</label>
              <Field
                type="email"
                className={`form-control`}
                name='email'
                required 
              />
              <ErrorMessage name='email' component={()=>(
                <div className='invalid'>{errors.email}</div>
              )} />
            </div>
    
            <div className="col-12 container-Button">
              <Link type="button" to="/" className="mt-3 btn btn-outline-danger">Cancel</Link>
              <button type="submit" className="mt-3 btn btn-outline-dark">Add Contact</button>
            </div>
            {formSend && <div className='valid'>Contact successfully added!</div>}
          </Form>
        )}
      </Formik>

    </div>
  )
}
