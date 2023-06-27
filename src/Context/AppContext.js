import { createContext, useContext, useEffect, useMemo, useState } from "react";

import {createUser, getUserData, updateUserData, deleteUserData} from "../Utils/apiCall"
import {useInputData} from "../Hooks/useInputData"

const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [contactList, setContactList]=useState([]);
  const [inputData, handlerInputData, updateInput]=useInputData({full_name: '', address: '', phone: '', email: ''});

  
  useEffect(()=>{
    getUserData(setContactList);
  }, [])

  const handleAddContact = (inputData) =>{
    const newContact = {
      agenda_slug: "geovanny_valladares",
      full_name: inputData.full_name.trim(),
      address: inputData.address.trim().length>0 ? inputData.address.trim() : 'Empty...',
      phone: inputData.phone.trim().length>0 ? inputData.phone.trim() : 'Empty...',
      email: inputData.email.trim()
    }
    setContactList(prev=> [...prev, newContact]);
    createUser(newContact, setContactList);
  }


  const handleModalData = (id) =>{
    const contactActive = contactList.find((contact)=> contact.id === id)
    updateInput(contactActive);
  }

  const handleEditContact = (e, id) =>{
    e.preventDefault();
    const updatedContactList = contactList.map(item =>{
      if (item.id===id){
        item.full_name = inputData.full_name.trim().length>0
          ? inputData.full_name.trim()
          :'Empty...';
        item.address = inputData.address.trim().length>0
          ? inputData.address.trim()
          : 'Empty...';
        item.phone = inputData.phone.trim().length>0
          ? inputData.phone.trim() 
          : 'Empty...';
        item.email = inputData.email.trim().length>0 
          ? inputData.email.trim()
          : 'Empty...';
        
        updateUserData("geovanny_valladares", item);
        return item;
      }
      return item;
    })
    setContactList(updatedContactList);
  }

  const deleteContact = (id) =>{
    const updatedContactList = contactList.filter((contact)=> contact.id !== id);
    setContactList(updatedContactList);
    deleteUserData(id);
  }


  const store = useMemo(()=>{
    return {contactList, inputData}
  },[contactList, inputData])

  const action = {
    handleAddContact,
    handleEditContact,
    deleteContact,
    updateInput,
    handlerInputData,
    handleModalData
  }

  return(
    <AppContext.Provider value={{ store, action }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);