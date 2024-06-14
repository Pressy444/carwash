import React, { useState } from 'react';
import logo from '../../images/Design sans titre.png';
import "../../App.css";
import 'animate.css/animate.min.css';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full h-28 bg-black bg-opacity-90 flex items-center justify-between px-4 z-20">
      
         <img src={logo} alt="Logo" className="h-16 w-16 sm:h-20 sm:w-20 rounded-full border-black border-4 ml-0 sm:ml-4 mr-4 text-appear animate__animated animate__slideInLeft animate__slow " onClick={handleClick} style={{ cursor: 'pointer' }}  /> 
        <h1 className="text-4xl px-12 sm:text-5xl mr-8 sm:mr-80 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-100 to-yellow-500 custom-font custom-underline text-appear animate__animated animate__slideInLeft animate__slow ">Urban Wash</h1>
        <div className="hidden md:flex space-x-8 sm:space-x-24 mr-4 sm:mr-20 text-white text-xl sm:text-2xl">
          <Link to="/" className={`${location.pathname === '/' ? 'text-yellow-500' : 'text-white'} hover:text-yellow-600 bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-50 to-yellow-500 custom-font slide-in-left transform-scale-110`}>Accueil</Link>
          <Link to="/services" className={`${location.pathname === '/services' ? 'text-yellow-500' : 'text-white'} hover:text-yellow-600 custom-font transform transition-transform slide-in-left transform-scale-110`}>Services</Link>
          <Link to="/tarifs" className={`${location.pathname === '/tarifs' ? 'text-yellow-500' : 'text-white'} hover:text-yellow-600 custom-font transform transition-transform slide-in-left transform-scale-110`}>Tarifs</Link>
          <Link to="/apropos" className={`${location.pathname === '/apropos' ? 'text-yellow-500' : 'text-white'} hover:text-yellow-600 custom-font transform transition-transform slide-in-left transform-scale-110`}>À propos</Link>
        </div>
        <div className="md:hidden flex items-center w-full ">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </nav>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-black bg-opacity-90 text-white text-xl pt-1 pb-6 mt-28 text-center`}>
        <Link to="/" className={`${location.pathname === '/' ? 'text-yellow-500' : 'text-white'} block px-4 py-2 hover:text-yellow-500`}>Accueil</Link>
        <Link to="/services" className={`${location.pathname === '/services' ? 'text-yellow-500' : 'text-white'} block px-4 py-2 hover:text-yellow-500`}>Services</Link>
        <Link to="/tarifs" className={`${location.pathname === '/tarifs' ? 'text-yellow-500' : 'text-white'} block px-4 py-2 hover:text-yellow-500`}>Tarifs</Link>
        <Link to="/apropos" className={`${location.pathname === '/apropos' ? 'text-yellow-500' : 'text-white'} block px-4 py-2 hover:text-yellow-500`}>À propos</Link>
      </div>
    </div>
  );
};

export default Navbar;
