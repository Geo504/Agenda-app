import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import './ContactForm.css';

import { useAppContext } from '../../Context/AppContext';


export const ContactForm = () => {
  const value = useAppContext();
  const handleInput = value.action.handlerInputData;
  const input = value.store.inputData;
  const [errors, setErrors]=useState({});

  useEffect(()=>{
    value.action.updateInput({full_name: '', address: '', phone: '', email: ''});
  },[])




  const checkErrors = () =>{
    if(!!errors.full_name) {setErrors({...errors, full_name: null})};
    if(!!errors.email) {setErrors({...errors, email: null})};
  }
  useEffect(()=>checkErrors(), [input])

  const validateForm =()=>{
    const {full_name, email } = input;
    const newErrors = {};

    if ( full_name ==='') newErrors.full_name = 'Please enter a name.';
    if ( email==='') newErrors.email = 'Please enter an email.';

    return newErrors;
  }

  const handleSubmit = () => {
    const formErrors = validateForm();

    if(Object.keys(formErrors).length>0){
      setErrors(formErrors);
    }
  }
  

  return (
    <div className='container-Form' method='get'>
      <h2>Add New Contact</h2>

      <form onSubmit={value.action.handleAddContact} className='needs-validation'>
        <div className="col-12">
          <label className="form-label">Contact Full Name:</label>
          <input
            type="text"
            className={`form-control ${!!errors.full_name && 'redInput'}`}
            name='full_name'
            placeholder="Martha Jones"
            value={input.full_name}
            onChange={handleInput}
            isinvalid={!!errors.full_name}
            required />
            <div className={!!errors.full_name ? 'invalid' : 'hide'}>
              {errors.full_name}
            </div>
        </div>

        <div className="col-12">
          <label className="form-label">Address:</label>
          <input
            type="text"
            className="form-control"
            name='address'
            placeholder="1234 Main St"
            value={input.address}
            onChange={handleInput}
            isinvalid={!!errors.address} />
            <div className={!!errors.address ? 'invalid' : 'hide'}>
              {errors.address}
            </div>
        </div>

        <div className="col-12">
          <label className="form-label">Phone:</label>
          <input
            type="text"
            className="form-control"
            name='phone'
            placeholder="(+34) 2999-4454"
            value={input.phone}
            onChange={handleInput}
            isinvalid={!!errors.phone} />
            <div className={!!errors.phone ? 'invalid' : 'hide'}>
              {errors.phone}
            </div>
        </div>

        <div className="col-12">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className={`form-control ${!!errors.email && 'redInput'}`}
            name='email'
            value={input.email}
            onChange={handleInput}
            isinvalid={!!errors.email}
            required />
            <div className={!!errors.email ? 'invalid' : 'hide'}>
              {errors.email}
            </div>
        </div>

        <div className="col-12 container-Button">
          <Link type="button" to="/" className="mt-3 btn btn-outline-danger">Cancel</Link>
          <button type="submit" onClick={handleSubmit} className="mt-3 btn btn-outline-dark">Add Contact</button>
        </div>
      </form>

    </div>
  )
}
