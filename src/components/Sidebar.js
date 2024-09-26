import React, { useContext } from 'react';
// import link
import { Link } from 'react-router-dom';
//import icons
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
//components
import CartItem from '../components/CartItem';
//sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  return <div>Sidebar</div>;
};

export default Sidebar;
