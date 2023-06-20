import { createContext, useContext, useEffect, useMemo, useState } from "react";

import {createUser, getUserData, updateUserData, deleteUserData} from "../Utils/apiCall"
// import {useInputData} from "../Hooks/useInputData"

const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [contactList, setContactList]=useState([]);
  // const [inputData, handlerInputData]=useInputData();

  
  useEffect(()=>{
    getUserData(setContactList);
  }, [])

  const handleAddContact = (e) =>{
    e.preventDefault();
    
    const newContact = {
      agenda_slug: "geovanny_valladares",
      full_name: e.target.name.value.trim(),
      address: e.target.address.value.trim().length>0 ? e.target.address.value.trim() : 'Empty...',
      phone: e.target.phone.value.trim().length>0 ? e.target.phone.value.trim() : 'Empty...',
      email: e.target.email.value.trim()
    }
    setContactList(prev=> [...prev, newContact]);
    createUser(newContact, setContactList);
  }

  const handleEditContact = (e, id) =>{
    e.preventDefault();
    const updatedContactList = contactList.map(item =>{
      if (item.id===id){
        item.full_name = e.target.name.value.trim().length>0
          ? e.target.name.value.trim()
          :'Empty...';
        item.address = e.target.address.value.trim().length>0
          ? e.target.address.value.trim()
          : 'Empty...';
        item.phone = e.target.phone.value.trim().length>0
          ? e.target.phone.value.trim() 
          : 'Empty...';
        item.email = e.target.email.value.trim().length>0 
          ? e.target.email.value.trim()
          : 'Empty...';
        
        updateUserData("geovanny_valladares", item);
        return item;
      }
      return item;
    })
    setContactList(updatedContactList);
  }

  // const [input, setInput]=useState({});

  // const handleInput=(e)=>{
  //   setInput(prev => {
  //     const newInputData = {...prev};
  //     newInputData[e.target.name] = e.target.value;
  //     console.log(newInputData);
  //     return(newInputData);
  //   });
  // }


  const deleteContact = (id) =>{
    const updatedContactList = contactList.filter((contact)=> contact.id !== id);
    setContactList(updatedContactList);
    deleteUserData(id);
  }


  const store = useMemo(()=>{
    return {contactList}
  },[contactList])

  const action = {
    handleAddContact,
    handleEditContact,
    // handleInput,
    // setInput,
    deleteContact,
    // handlerInputData,
  }

  return(
    <AppContext.Provider value={{ store, action }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);