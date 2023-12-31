import React from 'react'

import { useAppContext } from '../../Context/AppContext';


export const ModalEdit = () => {
  const value = useAppContext();

  const handleInput = value.action.handlerInputData;
  const input = value.store.inputData;


  const editContact = (e) =>{
    value.action.handleEditContact(e, input.id);
  }

  return (
    <>
    <div className="modal fade" id={`modalEdit`} data-bs-backdrop="static">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          
          <div className="modal-header">
            <h4 className="modal-title">Edit Contact</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          
          <form onSubmit={editContact}>

            <div className="modal-body">
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">New Name:</label>
                <input
                  type="text"
                  className="form-control"
                  name='full_name'
                  value={input.full_name}
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