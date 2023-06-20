import React, { useEffect, useState } from 'react'

import { useAppContext } from '../../Context/AppContext';
// import {useInputData} from "../../Hooks/useInputData"


export const ModalEdit = ({children, contact}) => {
  const {full_name, address, phone, email, id} = contact;
  const value = useAppContext();
  const [input, setInput]=useState({name: full_name, address: address, phone: phone, email: email});

  const handleInput=(e)=>{
    setInput(prev => {
      const newInputData = {...prev};
      newInputData[e.target.name] = e.target.value;
      console.log(newInputData);
      return(newInputData);
    });
  }

  // useEffect(()=>{
  //   value.action.setInput({name: full_name, address: address, phone: phone, email: email});
  // },[])
  // value.action.setInput({name: full_name, address: address, phone: phone, email: email});

  const editContact = (e) =>{
    value.action.handleEditContact(e, id);
  }

  return (
    <>
    {children}

    <div className="modal fade" id={`modalEdit-${id}`} data-bs-backdrop="static">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          
          <div className="modal-header">
            <h4 className="modal-title">Edit <b>{full_name}</b> Contact</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          
          <form onSubmit={editContact}>

            <div className="modal-body">
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">New Name:</label>
                <input
                  type="text"
                  className="form-control"
                  name='name'
                  value={input.name}
                  onChange={handleInput}
                  placeholder="Martha Jones"
                  required />
              </div>

              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">New Address:</label>
                <input
                  type="text"
                  className="form-control"
                  name='address'
                  value={input.address}
                  onChange={handleInput}
                  placeholder="1234 Main St" />
              </div>

              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">New Phone:</label>
                <input
                  type="text"
                  className="form-control"
                  name='phone'
                  value={input.phone}
                  onChange={handleInput}
                  placeholder="+34 2999-4454" />
              </div>

              <div className="col-12">
                <label htmlFor="inputEmail" className="form-label">New Email:</label>
                <input
                  type="email"
                  className="form-control"
                  name='email'
                  value={input.email}
                  onChange={handleInput}
                  required />
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">
                Cancel
              </button>
              <button type='submit' className="btn btn-outline-dark" data-bs-dismiss="modal" >
                Edit
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
    </>
  )
}