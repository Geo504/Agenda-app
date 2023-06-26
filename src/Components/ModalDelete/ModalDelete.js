import React from 'react'

import './ModalDelete.css'
import { BsTrash2 } from 'react-icons/bs';

import { useAppContext } from '../../Context/AppContext';

export const ModalDelete = () => {
  const value = useAppContext();

  const input = value.store.inputData;

  return (
    <>
      <div className="modal fade" id='modalDelete' data-bs-backdrop="static">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            
            <div className="modal-header">
              <h4 className="modal-title">Delete Contact</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            
            <div className="modal-body">
              Are you sure you want to delete <b>{input.full_name}</b> from contacts?
            </div>

            <div className="modal-footer">
              <button className="btn btn-outline-dark" data-bs-dismiss="modal">
                No
              </button>
              <button className="btn btn-outline-danger" data-bs-dismiss="modal" onClick={()=>value.action.deleteContact(input.id)}>
                  Delete <BsTrash2/>
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
