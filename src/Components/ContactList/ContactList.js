import React from 'react'

import './ContactList.css'

import { ContactCard } from '../ContactCard/ContactCard';
import { ModalEdit } from "../ModalEdit/ModalEdit";
import { ModalDelete } from "../ModalDelete/ModalDelete";
import { useAppContext } from '../../Context/AppContext';



export const ContactList = () => {
  const value = useAppContext();

  return (
    <div className='container_ContactList'>
      {
        value.store.contactList.map( contact =>{
          return (
            <ContactCard
              key={contact.id}
              contact={contact}
            />
          )
        })
      }
      <ModalEdit />
      <ModalDelete />
    </div>
  )
}
