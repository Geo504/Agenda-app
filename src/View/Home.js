import React from 'react'

import { useAppContext } from '../Context/AppContext'
import { ContactList } from '../Components/ContactList/ContactList';
import MoonLoader from "react-spinners/MoonLoader";

export const Home = () => {
  const value = useAppContext();

  return (
    <>
    {
      value.store.contactList.length===0
        ?<div className='loading-Div'>
          <MoonLoader
            color={"#b8b0a9"}
            size={100}
          />
          </div>
        
        :<div className='container'>
          <ContactList />
        </div>
    }
    </>
  )
}
