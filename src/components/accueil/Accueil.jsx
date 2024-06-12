import React from 'react';
import "../../App.css";
import Navbar from '../navbar/Navbar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import myImage1 from '../../images/myImage.jpg';
import myImage2 from '../../images/myImage2.jpg';
import myImage3 from '../../images/myImage3.jpg';
import myImage4 from '../../images/myImage4.jpg';
import myImage5 from '../../images/myImage5.jpg';
import myImage6 from '../../images/myImage6.jpg';

function Accueil() {
  return (
    <div>
     <Navbar />
      <div className="relative w-full ">
        {/* Section pour grands écrans */}
        <div className="hidden lg:flex absolute inset-0 w-full items-center justify-center bg-black">
          <Carousel autoPlay showThumbs={false} infiniteLoop={true} interval={4000} transitionTime={2000} className="w-full h-full">
            <div className="w-full h-full">
              <img src={myImage2} alt="My Image 2" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-full">
              <img src={myImage4} alt="My Image 4" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-full">
              <img src={myImage5} alt="My Image 5" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-full">
              <img src={myImage6} alt="My Image 6" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-full">
              <img src={myImage1} alt="My Image 1" className="w-full h-full object-cover" />
            </div>
          </Carousel>
          <div className="absolute inset-0 mt-40">
            <div className="flex flex-col items-center justify-center h-full mt-80 ">
              <p className="text-center text-4xl pt-10 pb-10 text-shadow-xl shadow-black text-white rounded-xl custom-font text-shadow-xl bg-black bg-opacity-60 shadow-2xl w-3/4">
                BIENVENUE CHEZ URBAN WASH, VOTRE DESTINATION ULTIME POUR UN ENTRETIEN DE VÉHICULE IMPECCABLE.
                NOUS SOMMES FIERS DE VOUS OFFRIR UNE GAMME COMPLÈTE DE SERVICES DE LAVAGE DE VOITURE, CONÇUS POUR RÉPONDRE À TOUS VOS BESOINS ET SURPASSER VOS ATTENTES.
                QUE VOUS SOUHAITIEZ UN NETTOYAGE RAPIDE OU UNE RÉNOVATION COMPLÈTE DE VOTRE VÉHICULE, NOUS AVONS LA FORMULE PARFAITE POUR VOUS.
              </p>
              <div className="flex space-x-4 w-3/4 ">
                <p className="text-center text-2xl p-10 text-shadow-xl text-white rounded-xl bg-blue-800 bg-opacity-40 shadow-2xl flex-1">
                  DÉCOUVREZ NOS SERVICES DE CAR WASH DE QUALITÉ SUPÉRIEURE
                </p>
                <p className="text-center text-2xl p-10 text-shadow-xl text-white rounded-xl bg-yellow-600 bg-opacity-40 shadow-2xl flex-1">
                  UN SERVICE PERSONNALISÉ POUR CHAQUE CLIENT
                </p>
                <p className="text-center text-2xl p-10 text-shadow-xl text-white rounded-xl bg-red-800 bg-opacity-40 shadow-2xl flex-1">
                  UNE EXPÉRIENCE INOUBLIABLE POUR VOTRE VÉHICULE
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section pour petits écrans */}
        <div className="block lg:hidden">
          <div className="flex flex-col items-center p-1">
            {/* <div className="text-center mb-8">
              <p className="text-4xl mt-8 pt-20 pb-20 px-10 text-shadow-xl shadow-black text-white rounded-xl bg-gray-900 bg-opacity-90 custom-font shadow-2xl">
                BIENVENUE CHEZ URBAN WASH, VOTRE DESTINATION ULTIME POUR UN ENTRETIEN DE VÉHICULE IMPECCABLE. <br /><br />
                NOUS SOMMES FIERS DE VOUS OFFRIR UNE GAMME COMPLÈTE DE SERVICES DE LAVAGE DE VOITURE, CONÇUS POUR RÉPONDRE À TOUS VOS BESOINS ET SURPASSER VOS ATTENTES. <br /><br />
                QUE VOUS SOUHAITIEZ UN NETTOYAGE RAPIDE OU UNE RÉNOVATION COMPLÈTE DE VOTRE VÉHICULE, NOUS AVONS LA FORMULE PARFAITE POUR VOUS.
              </p>
              <div className="flex flex-col space-y-4 mt-10">
                <p className="text-center text-2xl p-10 text-shadow-xl text-white rounded-xl bg-blue-800 bg-opacity-60 shadow-2xl">
                  DÉCOUVREZ NOS SERVICES DE CAR WASH DE QUALITÉ SUPÉRIEURE
                </p>
                <p className="text-center text-2xl p-10 text-shadow-xl text-white rounded-xl bg-yellow-600 bg-opacity-60 shadow-2xl">
                  UN SERVICE PERSONNALISÉ POUR CHAQUE CLIENT
                </p>
                <p className="text-center text-2xl p-10 text-shadow-xl text-white rounded-xl bg-red-800 bg-opacity-60 shadow-2xl">
                  UNE EXPÉRIENCE INOUBLIABLE POUR VOTRE VÉHICULE
                </p>
              </div>
            </div> */}
            <Carousel
              autoPlay
              showThumbs={false}
              infiniteLoop={true}
              interval={3000}
              transitionTime={1500}
              className="shadow-2xl"
            >
              <div>
                <img src={myImage1} alt="My Image" className="object-cover w-full h-96" />
              </div>
              <div>
                <img src={myImage2} alt="My Image" className="object-cover w-full h-96" />
              </div>
              <div>
                <img src={myImage3} alt="My Image" className="object-cover w-full h-96" />
              </div>
              <div>
                <img src={myImage4} alt="My Image" className="object-cover w-full h-96" />
              </div>
              <div>
                <img src={myImage5} alt="My Image" className="object-cover w-full h-96" />
              </div>
              <div>
                <img src={myImage6} alt="My Image" className="object-cover w-full h-96" />
              </div>
            </Carousel>
            <div className="text-center ">
              <p className="  pt-14 pb-20 mt-1 text-shadow-xl shadow-black text-white bg-gray-900 bg-opacity-90 custom-font ">
                BIENVENUE CHEZ URBAN WASH, VOTRE DESTINATION ULTIME POUR UN ENTRETIEN DE VÉHICULE IMPECCABLE. <br /><br />
                NOUS SOMMES FIERS DE VOUS OFFRIR UNE GAMME COMPLÈTE DE SERVICES DE LAVAGE DE VOITURE, CONÇUS POUR RÉPONDRE À TOUS VOS BESOINS ET SURPASSER VOS ATTENTES. <br /><br />
                QUE VOUS SOUHAITIEZ UN NETTOYAGE RAPIDE OU UNE RÉNOVATION COMPLÈTE DE VOTRE VÉHICULE, NOUS AVONS LA FORMULE PARFAITE POUR VOUS.<br /><br /> DÉCOUVREZ NOS SERVICES DE CAR WASH DE QUALITÉ SUPÉRIEURE
                UN SERVICE PERSONNALISÉ POUR CHAQUE CLIENT  UNE EXPÉRIENCE INOUBLIABLE POUR VOTRE VÉHICULE.</p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
