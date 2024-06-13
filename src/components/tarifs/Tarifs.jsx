import React, { Component } from 'react'
import MyIcon from '../../images/check-mark (1).png';
import "../../App.css";
import Navbar from '../navbar/Navbar';
import 'animate.css/animate.min.css';

function Tarifs() {

  return (
    <div>
      <div className="w-full sm:w-30">
        <Navbar />
      </div>
      <section className="bg-gradient-to-r from-gray-950 via-gray-400 to-gray-950 items-center justify-center">
        <div class="hidden lg:flex  md:hidden  items-center justify-center h-screen">
          <h2 className="text-5xl mr-40  -mt-40 mb-80 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-50 to-yellow-500 custom-font custom-underline ">Tarifs:</h2>
          <div className="bg-gradient-to-r from-gray-950 via-blue-400 to-gray-950 rounded-tr-3xl w-80 rounded-bl-3xl shadow-2xl p-2 mr-8 -ml-80 mt-60 animate__slideInRight animate__slow  ">
            <div className="bg-gradient-to-b from-gray-500 via-gray-100 to-gray-400 h-20 rounded-tr-3xl w-50 rounded-bl-3xl shadow-2xl ">
              <p className="pt-6 text-2xl items-center justify-content-center ml-14 p-4 font-bold ">Abonnements</p>
            </div>
            <div className="p-4 text-white py-12">
              <div className="flex flex-col items-start space-y-5 -mt-8">
                <div className="flex justify-between w-full">
                  <p className="text-xl text-shadow-xl underline">Normal</p>
                  <div className="flex flex-col text-right">
                    <p>Voitures: 115€</p>
                    <p>Mono: 129€</p>
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <p className="text-xl text-shadow-xl underline">Super Polish</p>
                  <div className="flex flex-col text-right">
                    <p>Voitures: 139€</p>
                    <p>Mono: 153€</p>
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <p className="text-xl text-shadow-xl underline">Kenolon</p>
                  <div className="flex flex-col text-right">
                    <p>Voitures: 163€</p>
                    <p>Mono: 177€</p>
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <p className="text-xl text-shadow-xl underline">V.I.P</p>
                  <div className="flex flex-col text-right">
                    <p>Voitures: 379€</p>
                    <p>Mono: 429€</p>
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <p className="text-xl text-shadow-xl underline">Shampooing</p>
                  <p>Sur devis</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 mt-32 gap-8">
            <div className="bg-gradient-to-r from-gray-950 via-blue-400 to-gray-950  rounded-tr-3xl w-60 rounded-bl-3xl shadow-2xl p-2 animate__slideInRight animate__slow ">
              <div className="bg-gradient-to-t from-yellow-600 via-yellow-100 to-yellow-600 h-20 rounded-tr-3xl w-50 rounded-bl-3xl shadow-2xl"><p className="pt-6 text-2xl items-center justify-content-center ml-12 p-4 font-bold">Normal </p>
              </div>
              <div className="p-4 text-white py-12 ">
                <div className="flex flex-col items-start space-y-5 -mt-8">
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Prélavage</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Haute pression</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Mousse active</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Jantes</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Lavage brosse</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Wax</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">2 X Séchage</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Super Polish</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5  text-green-500">
                      <path fillRule="evenodd" d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z" clipRule="evenodd" />
                    </svg>

                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Kenolon</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5  text-green-500">
                      <path fillRule="evenodd" d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z" clipRule="evenodd" />
                    </svg>

                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Lavage interieur</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5  text-green-500">
                      <path fillRule="evenodd" d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z" clipRule="evenodd" />
                    </svg>

                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Shampooing</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5  text-green-500">
                      <path fillRule="evenodd" d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="-mt-7 bg-gradient-to-t from-yellow-600 via-yellow-100 to-yellow-600 h-14 rounded-tr-3xl w-40 rounded-bl-3xl shadow-2xl ml-8 flex items-center justify-center">
                <p className="text-4xl font-bold">11,50€</p>
              </div>
              <h4 className=" text-lg ml-16 mb-2 mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-50 to-yellow-500 custom-font custom-underline">Monovolume</h4>


              <div className="mt-2 bg-gradient-to-t from-yellow-600 via-yellow-100 to-yellow-600 h-14 rounded-tr-3xl w-40 rounded-bl-3xl shadow-2xl ml-8 flex items-center justify-center">
                <p className="text-4xl font-bold">12,90€</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-950 via-blue-400 to-gray-950    rounded-tr-3xl w-60 rounded-bl-3xl shadow-2xl p-2 animate__slideInRight animate__slow ">
              <div className=" bg-gradient-to-t from-customRed via-red-100 to-customRed h-20  rounded-tr-3xl w-50 rounded-bl-3xl shadow-2xl ">
                <p className="text-2xl items-center justify-content-center p-4 font-bold ml-6 pt-6 ">Super Polish<br /></p>
              </div>

              <div className="p-4 text-white py-12">

                <div className="flex flex-col items-start space-y-5 -mt-8">
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Prélavage</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Haute pression</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Mousse active</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Jantes</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Lavage brosse</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Wax</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">2 X Séchage</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Super Polish</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />

                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Kenolon</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5  text-green-500">
                      <path fillRule="evenodd" d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z" clipRule="evenodd" />
                    </svg>

                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Lavage interieur</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5  text-green-500 ">
                      <path fillRule="evenodd" d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z" clipRule="evenodd" />
                    </svg>

                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Shampooing</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5  text-green-500">
                      <path fillRule="evenodd" d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z" clipRule="evenodd" />
                    </svg>

                  </div>
                </div>
              </div>

              <div className="-mt-7 bg-gradient-to-t from-customRed via-red-100 to-customRed h-14 rounded-tr-3xl w-40 rounded-bl-3xl shadow-2xl ml-8 flex items-center justify-center">
                <p className="text-4xl font-bold">13,90€</p>
              </div>
              <h4 className=" text-lg ml-16 mb-2 mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-50 to-yellow-500 custom-font custom-underline">Monovolume</h4>
              <div className="mt-2 mb-18 bg-gradient-to-t from-customRed via-red-100 to-customRed h-14 rounded-tr-3xl w-40 rounded-bl-3xl shadow-2xl ml-8 flex items-center justify-center">
                <p className="text-4xl font-bold">15,30€</p>
              </div>


            </div>

            <div className="bg-gradient-to-r from-gray-950 via-blue-400 to-gray-950  rounded-tr-3xl w-60 rounded-bl-3xl shadow-2xl p-2 animate__slideInLeft animate__slow  ">
              <div className=" bg-gradient-to-t from-blue-950 via-blue-100 to-blue-950 h-20 rounded-tr-3xl w-50 rounded-bl-3xl shadow-2xl p-2"><p className="text-2xl items-center justify-content-center ml-12 p-4 font-bold">Kenolon</p></div>

              <div className="p-4 text-white py-12">

                <div className="flex flex-col items-start space-y-5 -mt-8">
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Prélavage</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Haute pression</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Mousse active</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Jantes</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Lavage brosse</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Wax</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">2 X Séchage</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Super Polish</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />

                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Kenolon</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />

                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Lavage interieur</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5  text-green-500">
                      <path fillRule="evenodd" d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z" clipRule="evenodd" />
                    </svg>

                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Shampooing</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-green-500">
                      <path fillRule="evenodd" d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z" clipRule="evenodd" />
                    </svg>

                  </div>
                </div>
              </div>


              <div className="-mt-7 bg-gradient-to-t from-blue-950 via-blue-100 to-blue-950 h-14 rounded-tr-3xl w-40 rounded-bl-3xl shadow-2xl ml-8 flex items-center justify-center">
                <p className="text-4xl font-bold">16,30€</p>
              </div>

              <h4 className=" text-lg ml-16 mb-4 mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-50 to-yellow-500 custom-font custom-underline">Monovolume</h4>
              <div className="bg-gradient-to-t from-blue-950 via-blue-100 to-blue-950 h-14 rounded-tr-3xl w-40 rounded-bl-3xl shadow-2xl ml-8 flex items-center justify-center">
                <p className="text-4xl font-bold">17,70€</p>
              </div>


            </div>

            <div className="bg-gradient-to-r from-gray-950 via-blue-400 to-gray-950  rounded-tr-3xl w-60 rounded-bl-3xl shadow-2xl p-2 animate__slideInLeft animate__slow ">
              <div className=" bg-gradient-to-t from-gray-800 via-gray-100 to-gray-800 h-20 rounded-tr-3xl w-50 rounded-bl-3xl shadow-2xl p-2"><p className="text-2xl items-center justify-content-center ml-16 p-4 font-bold">V.I.P</p></div>

              <div className="p-4 text-white py-12">

                <div className="flex flex-col items-start space-y-5 -mt-8">
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Prélavage</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Haute pression</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Mousse active</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Jantes</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Lavage brosse</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Wax</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">2 X Séchage</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Super Polish</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />

                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Kenolon</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />

                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Lavage interieur</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />

                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Shampooing</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-green-500">
                      <path fillRule="evenodd" d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z" clipRule="evenodd" />
                    </svg>
                  </div>

                </div>
              </div>


              <div className="-mt-7 bg-gradient-to-t from-gray-800 via-gray-100 to-gray-800 h-14 rounded-tr-3xl w-40 rounded-bl-3xl shadow-2xl ml-8 flex items-center justify-center">
                <p className="text-4xl font-bold">37,90€</p>
              </div>
              <h4 className="text-lg ml-16 mb-4 mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-50 to-yellow-500 custom-font custom-underline">Monovolume</h4>
              <div className="bg-gradient-to-t from-gray-800 via-gray-100 to-gray-800 h-14 rounded-tr-3xl w-40 rounded-bl-3xl shadow-2xl ml-8 flex items-center justify-center">
                <p className="text-4xl font-bold">42,90€</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-950 via-blue-400 to-gray-950  rounded-tr-3xl w-60 rounded-bl-3xl shadow-2xl p-2 animate__slideInLeft animate__slow ">
              <div className="bg-gradient-to-t from-green-800 via-green-100 to-green-800 h-20 rounded-tr-3xl w-50 rounded-bl-3xl shadow-2xl p-2">
                <p className="text-2xl items-center justify-content-center ml-4 p-4 font-bold">Shampooing</p></div>
              <div className="p-4 text-white py-12">

                <div className="flex flex-col items-start space-y-5 -mt-8">
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Prélavage</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Haute pression</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Mousse active</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Jantes</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Lavage brosse</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Wax</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">2 X Séchage</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Super Polish</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />

                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Kenolon</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />

                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Lavage interieur</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />

                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Shampooing </p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Shampooing interieur</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-t from-green-800 via-green-100 to-green-800 h-14 rounded-tr-3xl w-40 rounded-bl-3xl shadow-2xl ml-8 flex items-center justify-center">
                <p className="text-4xl font-bold">Devis</p>
              </div>
            </div>
          </div>
        </div>





        {/* Section pour petits écrans */}

        <div className="block lg:hidden">
          <div className="flex flex-col  p-6">

            {/* normal */}

            <div className="text-center items-center justify-center mx-auto ">
              <h2 className="items-center justify-center text-center text-4xl mt-28 mb-5 font-bold  text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-50 to-yellow-500 custom-font custom-underline ">Tarifs:</h2>
            </div>

            <div className="bg-gradient-to-r from-gray-950 via-blue-400 to-gray-950 mb-5 w-80 rounded-3xl text-center items-center justify-center mx-auto   shadow-2xl p-2 ">
              <div className="bg-gradient-to-t from-yellow-600 via-yellow-100 to-yellow-600 h-20 w-50 shadow-2xl rounded-2xl">
                <p className="pt-6 text-2xl text-center p-4 font-bold">Normal </p>
              </div>
              <div className="p-4 text-white py-12 ">
                <div className="flex flex-col items-start space-y-5 -mt-8">
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Prélavage</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Haute pression</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Mousse active</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Jantes</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Lavage brosse</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Wax</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">2 X Séchage</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Super Polish</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5  text-green-500">
                      <path fillRule="evenodd" d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z" clipRule="evenodd" />
                    </svg>

                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Kenolon</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5  text-green-500">
                      <path fillRule="evenodd" d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z" clipRule="evenodd" />
                    </svg>

                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Lavage interieur</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5  text-green-500">
                      <path fillRule="evenodd" d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z" clipRule="evenodd" />
                    </svg>

                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Shampooing</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5  text-green-500">
                      <path fillRule="evenodd" d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="-mt-7 bg-gradient-to-t from-yellow-600 via-yellow-100 to-yellow-600 h-14  w-40 rounded-2xl shadow-2xl flex items-center justify-center mx-auto">
                <p className="text-4xl font-bold">11,50€</p>
              </div>
              <h4 className=" text-lg  mb-2 mt-2 mx-auto text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-50 to-yellow-500 custom-font custom-underline">Monovolume</h4>


              <div className="mt-2 bg-gradient-to-t from-yellow-600 via-yellow-100 to-yellow-600 h-14 rounded-2xl w-40  shadow-2xl mx-auto flex items-center justify-center">
                <p className="text-4xl font-bold">12,90€</p>
              </div>
            </div>



            {/* super polish */}

            <div className="bg-gradient-to-r from-gray-950 via-blue-400 to-gray-950 mb-5 w-80 rounded-2xl text-center items-center justify-center mx-auto   shadow-2xl p-2 ">
              <div className=" bg-gradient-to-t from-customRed via-red-100 to-customRed h-20  rounded-2xl w-50  shadow-2xl ">
                <p className="text-2xl text-center p-4 font-bold ml-6 pt-6 ">Super Polish<br /></p>
              </div>

              <div className="p-4 text-white py-12">

                <div className="flex flex-col items-start space-y-5 -mt-8">
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Prélavage</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Haute pression</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Mousse active</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Jantes</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Lavage brosse</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Wax</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">2 X Séchage</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Super Polish</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />

                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Kenolon</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5  text-green-500">
                      <path fillRule="evenodd" d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z" clipRule="evenodd" />
                    </svg>

                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Lavage interieur</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5  text-green-500 ">
                      <path fillRule="evenodd" d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z" clipRule="evenodd" />
                    </svg>

                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Shampooing</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5  text-green-500">
                      <path fillRule="evenodd" d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z" clipRule="evenodd" />
                    </svg>

                  </div>
                </div>
              </div>
              <div className="-mt-7 bg-gradient-to-t from-customRed via-red-100 to-customRed h-14 rounded-2xl w-40  shadow-2xl mx-auto flex items-center justify-center">
                <p className="text-4xl font-bold">13,90€</p>
              </div>

              <h4 className=" text-lg  mb-2 mt-2 mx-auto text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-50 to-yellow-500 custom-font custom-underline">Monovolume</h4>
              <div className="mt-2 mb-18 bg-gradient-to-t from-customRed via-red-100 to-customRed h-14 rounded-2xl w-40  shadow-2xl  flex items-center justify-center mx-auto">
                <p className="text-4xl font-bold">15,30€</p>
              </div>
            </div>

            {/* Section kenolon */}

            <div className="bg-gradient-to-r from-gray-950 via-blue-400 to-gray-950 mb-5 w-80 rounded-2xl text-center items-center justify-center mx-auto   shadow-2xl p-2 ">
              <div className=" bg-gradient-to-t from-blue-950 via-blue-100 to-blue-950 h-20 rounded-2xl w-50  shadow-2xl p-2">
                <p className="text-2xl  text-center p-4 font-bold">Kenolon</p></div>

              <div className="p-4 text-white py-12">

                <div className="flex flex-col items-start space-y-5 -mt-8">
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Prélavage</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Haute pression</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Mousse active</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Jantes</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Lavage brosse</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Wax</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">2 X Séchage</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Super Polish</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />

                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Kenolon</p>
                    <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />

                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline">Lavage interieur</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5  text-green-500">
                      <path fillRule="evenodd" d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z" clipRule="evenodd" />
                    </svg>

                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl text-shadow-xl underline ">Shampooing</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-green-500">
                      <path fillRule="evenodd" d="m6.72 5.66 11.62 11.62A8.25 8.25 0 0 0 6.72 5.66Zm10.56 12.68L5.66 6.72a8.25 8.25 0 0 0 11.62 11.62ZM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788Z" clipRule="evenodd" />
                    </svg>

                  </div>
                </div>
              </div>

           
              <div className="-mt-7 bg-gradient-to-t from-blue-950 via-blue-100 to-blue-950 h-14 rounded-2xl w-40 shadow-2xl mx-auto flex items-center justify-center">
                <p className="text-4xl font-bold">16,30€</p>
              </div>

              <h4 className=" text-lg mb-4 mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-50 to-yellow-500 custom-font custom-underline text-center items-center justify-center mx-auto">Monovolume</h4>
              <div className="bg-gradient-to-t from-blue-950 via-blue-100 to-blue-950 h-14 w-40 rounded-2xl shadow-2xl mx-auto flex items-center justify-center">
                <p className="text-4xl font-bold">17,70€</p>
              </div>
            </div>


            {/* VIP */}
            <div className="bg-gradient-to-r from-gray-950 via-blue-400 to-gray-950 mb-5 w-80 rounded-2xl text-center items-center justify-center mx-auto   shadow-2xl p-2">
              <div className="bg-gradient-to-t from-gray-800 via-gray-300 to-gray-800 h-20  w-50 rounded-2xl shadow-2xl p-2">
                <p className="text-2xl items-center justify-center text-center  p-4 font-bold">V.I.P</p>
              </div>
              <div className="p-4 text-white py-12">
                <div className="flex flex-col items-start space-y-5 -mt-8">
                  {['Prélavage', 'Haute pression', 'Mousse active', 'Jantes', 'Lavage brosse', 'Wax', '2 X Séchage', 'Super Polish', 'Kenolon', 'Lavage interieur', 'Shampooing'].map(service => (
                    <div className="flex justify-between items-center w-full" key={service}>
                      <p className="text-xl text-shadow-xl underline">{service}</p>
                      <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="-mt-7 bg-gradient-to-t from-gray-800 via-gray-100 to-gray-800 h-14  w-40 rounded-2xl shadow-2xl mx-auto flex items-center justify-center">
                <p className="text-4xl font-bold">37,90€</p>
              </div>
              <h4 className="text-lg  mb-4 mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-50 to-yellow-500 custom-font custom-underline mx-auto">Monovolume</h4>
              <div className="bg-gradient-to-t from-gray-800 via-gray-100 to-gray-800 h-14 w-40 shadow-2xl mx-auto rounded-2xl flex items-center justify-center">
                <p className="text-4xl font-bold">42,90€</p>
              </div>
            </div>

            {/* Shampooing */}
            <div className="bg-gradient-to-r from-gray-950 via-blue-400 to-gray-950  w-80 shadow-2xl p-2 rounded-2xl text-center items-center justify-center mx-auto ">
              <div className="bg-gradient-to-t from-green-800 via-green-100 to-green-800 h-20 rounded-2xl w-50  shadow-2xl p-2">
                <p className="text-2xl text-center ml-4 p-4 font-bold">Shampooing</p>
              </div>
              <div className="p-4 text-white py-12">
                <div className="flex flex-col items-start space-y-5 -mt-8">
                  {['Prélavage', 'Haute pression', 'Mousse active', 'Jantes', 'Lavage brosse', 'Wax', '2 X Séchage', 'Super Polish', 'Kenolon', 'Lavage interieur', 'Shampooing', 'Shampooing interieur'].map(service => (
                    <div className="flex justify-between items-center w-full" key={service}>
                      <p className="text-xl text-shadow-xl underline">{service}</p>
                      <img src={MyIcon} alt="My Icon" style={{ width: '20px', height: '20px' }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-t from-green-800 via-green-100 to-green-800 h-14  w-40 rounded-2xl shadow-2xl flex items-center justify-center mx-auto">
                <p className="text-4xl font-bold">Devis</p>
              </div>
            </div>

            {/* abonnements */}
            <div className="bg-gradient-to-r from-gray-950 via-blue-400 to-gray-950  w-80 rounded-2xl mt-10 shadow-2xl p-2 animate__slideInLeft animate__slow">
              <div className="bg-gradient-to-b from-gray-500 via-gray-100 to-gray-400 h-20  w-50 shadow-2xl rounded-2xl ">
                <p className=" text-2xl text-center p-4 font-bold ">Abonnements</p>
              </div>
              <div className="p-4 text-white py-12">
                <div className="flex flex-col items-start space-y-5 -mt-8">
                  <div className="flex justify-between w-full">
                    <p className="text-xl text-shadow-xl underline">Normal</p>
                    <div className="flex flex-col text-right">
                      <p>Voitures: 115€</p>
                      <p>Mono: 129€</p>
                    </div>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="text-xl text-shadow-xl underline">Super Polish</p>
                    <div className="flex flex-col text-right">
                      <p>Voitures: 139€</p>
                      <p>Mono: 153€</p>
                    </div>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="text-xl text-shadow-xl underline">Kenolon</p>
                    <div className="flex flex-col text-right">
                      <p>Voitures: 163€</p>
                      <p>Mono: 177€</p>
                    </div>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="text-xl text-shadow-xl underline">V.I.P</p>
                    <div className="flex flex-col text-right">
                      <p>Voitures: 379€</p>
                      <p>Mono: 429€</p>
                    </div>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="text-xl text-shadow-xl underline">Shampooing</p>
                    <p>Sur devis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


export default Tarifs;
