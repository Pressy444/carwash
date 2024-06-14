import React from 'react';



const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 ">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Urban Wash. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
