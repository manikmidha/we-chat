import React, { useContext } from 'react';
import { signOut } from "firebase/auth";
import {auth} from '../firebase';
import { AuthContext } from '../context/AuthContext';
import Placeholder from '../img/add.png'

const Navbar = () => {
  const {currentUser}=useContext(AuthContext)
  return (
    <div className='Navbar'>
      <span className='logo'>We Chat</span>
      <div className="user">
        <img src={currentUser.photoURL? currentUser.photoURL: Placeholder} alt="" />
        <span>{currentUser.displayname}</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
