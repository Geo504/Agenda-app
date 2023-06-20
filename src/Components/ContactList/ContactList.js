import React from 'react'
import { Link } from 'react-router-dom';

import './ContactList.css'

import { ContactCard } from '../ContactCard/ContactCard';
import { useAppContext } from '../../Context/AppContext'


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
              // editContact={}
              deleteContact={value.action.deleteContact}
            />
          )
        })
      }
    </div>
  )
}
