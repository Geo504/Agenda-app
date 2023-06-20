import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import { Home } from './View/Home';
import { AddContact } from './View/AddContact';
import { NavBar } from './Components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter basename='/'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/new-contact' element={<AddContact />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
