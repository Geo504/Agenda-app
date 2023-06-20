import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import './ContactForm.css';
import { useAppContext } from '../../Context/AppContext';
import { validate } from 'uuid';

export const ContactForm = () => {
  const value = useAppContext();

  const [form, setForm]=useState({});
  const [errors, setErrors]=useState({});

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })
    if(!!errors[field])
    setErrors({
      ...errors,
      [field]: null
    })
  }

  const validateForm =()=>{
    const {name, address, phone, email } = form;
    const newErrors = {};

    if(!name || name ==='') newErrors.name = 'Please enter a name.';
    if (!email || email==='') newErrors.email = 'Please enter a email.';

    return newErrors;
  }

  const handleSubmit = (e) => {
    const formErrors = validateForm();

    if(Object.keys(formErrors).length>0){
      setErrors(formErrors);
    }
    else {
      setForm({
        name: '',
        address: '',
        phone: '',
        email: '',
      })
    }
  }

  return (
    <div className='container-Form' method='get'>
      <h2>Add New Contact</h2>

      <form onSubmit={value.action.handleAddContact} className='needs-validation'>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Contact Full Name:</label>
          <input
            type="text"
            className={`form-control ${!!errors.name && 'redInput'}`}
            name='name'
            placeholder="Martha Jones"
            value={form.name}
            onChange={(e)=> setField('name' ,e.target.value)}
            isinvalid={!!errors.name}
            required />
            <div className={!!errors.name ? 'invalid' : 'hide'}>
              {errors.name}
            </div>
        </div>

        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Address:</label>
          <input
            type="text"
            className="form-control"
            name='address'
            placeholder="1234 Main St"
            value={form.address}
            onChange={(e)=> setField('address' ,e.target.value)}
            isinvalid={!!errors.address} />
            <div className={!!errors.address ? 'invalid' : 'hide'}>
              {errors.address}
            </div>
        </div>

        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Phone:</label>
          <input
            type="text"
            className="form-control"
            name='phone'
            placeholder="(+34) 2999-4454"
            value={form.phone}
            onChange={(e)=> setField('phone' ,e.target.value)}
            isinvalid={!!errors.phone} />
            <div className={!!errors.phone ? 'invalid' : 'hide'}>
              {errors.phone}
            </div>
        </div>

        <div className="col-12">
          <label htmlFor="inputEmail" className="form-label">Email:</label>
          <input
            type="email"
            className={`form-control ${!!errors.email && 'redInput'}`}
            name='email'
            value={form.email}
            onChange={(e)=> setField('email' ,e.target.value)}
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
