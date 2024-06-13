import React from 'react';
import "../../App.css";
import Navbar from '../navbar/Navbar';
import 'animate.css/animate.min.css';

function Services() {

    return (
        <div>
          <div >
             <Navbar />
             </div>
            <section className=" bg-gradient-to-r from-blue-950 via-blue-500 to-blue-950 flex items-center justify-center custom-font">
                <div className="text-white text-lg px-10 sm:px-20 lg:px-40 relative">
                    <h1 className="text-center text-4xl sm:text-5xl font-bold mt-40  sm:mt-48   text-yellow-500 text-shadow-xl animate__animated animate__fadeIn animate__slow">Nos Services Exclusifs</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 ">
                        <div>
                            <h3 className="text-2xl sm:text-4xl font-bold mb-10 sm:mt-44 text-yellow-500 text-shadow-xl animate__animated animate__slideInLeft animate__fadeIn animate__duration-1000">Services de lavage intérieur :</h3>
                            <div>
                                <p className="font-semibold mb-4 sm:mb-2 text-lg sm:text-2xl underline leading-8 text-appear animate__animated animate__slideInLeft animate__slow">1. Formule VIP Intérieur et Extérieur</p>
                                <p className="text-base sm:text-xl text-shadow-xl text-appear animate__animated animate__slideInLeft animate__slow">Offrez à votre véhicule le traitement royal avec notre Formule VIP. Nos experts nettoient minutieusement l'intérieur et l'extérieur de votre voiture, en utilisant des produits de haute qualité pour assurer une brillance et une propreté exceptionnelles. Profitez d'un véhicule qui semble neuf à chaque visite.</p>
                            </div>
                            <div>
                                <p className="font-semibold mb-4 mt-8 sm:mt-12 text-lg sm:text-2xl underline leading-8 text-appear animate__animated animate__slideInLeft animate__slow">2. Formule Shampooing et Rénovation d'Intérieurs</p>
                                <p className="text-base sm:text-xl text-shadow-xl text-appear animate__animated animate__slideInLeft animate__slow">Redonnez vie à l'intérieur de votre véhicule avec notre formule shampooing et rénovation. Nos professionnels nettoient en profondeur les sièges, les tapis et toutes les surfaces intérieures pour éliminer les taches, la saleté et les odeurs. Votre voiture retrouvera son éclat d'origine et un intérieur frais et accueillant.</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl sm:text-4xl font-bold mb-10 mt-14 sm:mt-24 text-yellow-500 text-shadow-xl text-appear animate__animated animate__slideInRight animate__duration-1000">Services de lavage extérieur :</h3>
                            <div>
                                <p className="font-semibold text-lg sm:text-2xl mb-4 mt-2 sm:mt-6 underline text-shadow-md text-appear animate__animated animate__slideInRight animate__slow">3. Lavage Extérieur avec Plusieurs Formules</p>
                                <p className="text-base sm:text-xl text-shadow-xl text-appear animate__animated animate__slideInRight animate__slow">Nous comprenons que chaque voiture et chaque client a des besoins uniques. C'est pourquoi nous proposons trois formules de lavage extérieur pour répondre à toutes les exigences :</p>
                            </div>
                            <div >
                                <p className="shadow-2xl mt-2 mb-4 font-semibold text-shadow-md bg-orange-400 p-1 w-72 sm:w-80 rounded-lg pl-2 sm:pl-4 text-appear animate__animated animate__slideInRight animate__slow">Formule Numéro 1 : Lavage Normal</p>
                                <p className="text-base sm:text-xl text-shadow-xl text-appear animate__animated animate__slideInRight animate__slow">Un lavage complet et efficace qui assure la propreté de base de votre véhicule. Idéal pour un entretien régulier, cette formule élimine la saleté, la poussière et les résidus de la route.</p>
                            </div>
                            <div >
                                <p className="shadow-3xl mt-2 mb-4 font-semibold text-shadow-md bg-red-500 p-1 w-72 sm:w-80 rounded-lg pl-2 sm:pl-4 text-appear animate__animated animate__slideInRight animate__slow">Formule Numéro 2 : Lavage Super Polish</p>
                                <p className="text-base sm:text-xl text-shadow-xl text-appear animate__animated animate__slideInRight animate__slow">Pour un éclat supplémentaire, choisissez notre Formule Super Polish. En plus du lavage standard, nous appliquons un polish qui fait briller votre voiture comme neuve et offre une protection supplémentaire contre les éléments.</p>
                            </div>
                            <div >
                                <p className="shadow-3xl mt-2 mb-4 font-semibold text-shadow-md bg-blue-300 p-1 w-72 sm:w-80 rounded-lg pl-2 sm:pl-4 text-appear animate__animated animate__slideInRight animate__slow">Formule Numéro 3 : Formule Kenolon</p>
                                <p className="sm:mb-20 mb-10 text-base sm:text-xl text-shadow-xl text-appear animate__animated animate__slideInRight animate__slow">La Formule Kenolon est notre service de lavage premium. Utilisant des produits de pointe, cette formule offre une protection durable et une brillance éclatante. Parfaite pour les amateurs de voitures qui veulent le meilleur pour leur véhicule.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;
