import React from "react";

import { ModalDelete } from "../ModalDelete/ModalDelete";
import { useAppContext } from '../../Context/AppContext';


import './ContactCard.css'
import { ImLocation } from 'react-icons/im';
import { AiFillPhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FiEdit2 } from 'react-icons/fi';
import { BsTrash2 } from 'react-icons/bs';


export const ContactCard = ({contact, deleteContact}) => {
  const {full_name, address, phone, email, id} = contact;
  const value = useAppContext();

  return (
    <div className="card my-3">

      <div className="col-sm-4 p-2">
        <img src={`../assets/Default-Image.jpg`} className="contactIMG" />
      </div>

      <div className="col-sm-7 bodyCard">
          <h5 className="card-title">{full_name}</h5>
          <div className="container_Card-text">
            <p><ImLocation/> {address}</p>
            <p><AiFillPhone/> {phone}</p>
            <p><MdEmail/> {email}</p>
          </div>
      </div>

      <div className="col-sm-1 modifing-Icons">
          <FiEdit2 className="edit-Icon" data-bs-toggle="modal" data-bs-target={`#modalEdit`} onClick={()=>value.action.handleEditModal(id)}/>

        <ModalDelete deleteFunction={()=>deleteContact(id)} name={full_name} id={id}>
          <BsTrash2 className="delete-Icon" data-bs-toggle="modal" data-bs-target={`#modalDelete-${id}`}/>
        </ModalDelete>
        
      </div>

    </div>
  );
};
