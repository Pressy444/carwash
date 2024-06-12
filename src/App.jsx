import Accueil from "./components/accueil/Accueil";
import Apropos from "./components/apropos/Apropos";
import Services from "./components/services/Services";
import Tarifs from "./components/tarifs/Tarifs";
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../../my-app/src/App.css";


function App() {


  return (
    <Router>
      <div>

        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/apropos" element={<Apropos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;







// import { useState } from 'react';
// import './App.css';
// import logo from './images/Design sans titre.png';
// import Navbar from './components/navbar/Navbar';
// import MyIcon from './images/check-mark (1).png';


// function App() {
//   return (

//     <div>
//       <Navbar />
//       <div className="absolute inset-0 bg-cover bg-center shadow-2xl custom-font" style={{ backgroundImage: `url(https://previews.123rf.com/images/sorax/sorax1701/sorax170100604/70995446-laver-une-voiture-de-luxe-dans-la-mousse-gros-plan.jpg)` }}>

//         <div className="absolute inset-0">
//           <div className="flex flex-col items-center justify-center h-full">
//             <p className="text-center text-4xl mt-48 pt-20 pb-20 px-10 text-shadow-xl shadow-black text-white rounded-xl bg-gray-900 bg-opacity-60 custom-font shadow-2xl w-3/4">
//               BIENVENUE CHEZ URBAN WASH, VOTRE DESTINATION ULTIME POUR UN ENTRETIEN DE VÉHICULE IMPECCABLE. <br /><br />
//               NOUS SOMMES FIERS DE VOUS OFFRIR UNE GAMME COMPLÈTE DE SERVICES DE LAVAGE DE VOITURE, CONÇUS POUR RÉPONDRE À TOUS VOS BESOINS ET SURPASSER VOS ATTENTES. <br /><br />
//               QUE VOUS SOUHAITIEZ UN NETTOYAGE RAPIDE OU UNE RÉNOVATION COMPLÈTE DE VOTRE VÉHICULE, NOUS AVONS LA FORMULE PARFAITE POUR VOUS.
//             </p>
//             <div className="flex space-x-4 mt-10 w-3/4">
//               <p className="text-center text-2xl p-10 text-shadow-xl text-white rounded-xl bg-blue-800 bg-opacity-60 shadow-2xl flex-1">
//                 DÉCOUVREZ NOS SERVICES DE CAR WASH DE QUALITÉ SUPÉRIEURE
//               </p>
//               <p className="text-center text-2xl p-10 text-shadow-xl text-white rounded-xl bg-yellow-600 bg-opacity-60 shadow-2xl flex-1">
//                 UN SERVICE PERSONNALISÉ POUR CHAQUE CLIENT
//               </p>
//               <p className="text-center text-2xl p-10 text-shadow-xl text-white rounded-xl bg-red-800 bg-opacity-60 shadow-2xl flex-1">
//                 UNE EXPÉRIENCE INOUBLIABLE POUR VOTRE VÉHICULE
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

{/* <section className="h-screen bg-gray-800 flex items-center justify-center custom-font">
          <p className="text-white ">Section 1</p>
        </section>
        <section className="h-screen bg-gradient-to-r from-blue-950 via-blue-500 to-blue-950 flex items-center justify-center custom-font">
          <div className="text-white text-lg px-40">
            <h1 className="text-center text-5xl font-bold  mt-10 text-yellow-500 text-shadow-xl">Nos Services Exclusifs</h1>
            <div className="grid grid-cols-2 gap-12 ">
              <div>
                <h3 className="text-4xl font-bold mb-20 mt-24 text-yellow-500 text-shadow-xl">Services de lavage intérieur :</h3>
                <div>
                  <p className="font-semibold mb-2  text-2xl underline leading-10">1. Formule VIP Intérieur et Extérieur</p>
                  <p className="text-xl text-shadow-xl">Offrez à votre véhicule le traitement royal avec notre Formule VIP. Nos experts nettoient minutieusement l'intérieur et l'extérieur de votre voiture, en utilisant des produits de haute qualité pour assurer une brillance et une propreté exceptionnelles. Profitez d'un véhicule qui semble neuf à chaque visite.</p>
                </div>
                <div>
                  <p className="font-semibold mb-2 mt-12 text-2xl underline leading-10">2. Formule Shampooing et Rénovation d'Intérieurs</p>
                  <p className="text-xl text-shadow-xl">Redonnez vie à l'intérieur de votre véhicule avec notre formule shampooing et rénovation. Nos professionnels nettoient en profondeur les sièges, les tapis et toutes les surfaces intérieures pour éliminer les taches, la saleté et les odeurs. Votre voiture retrouvera son éclat d'origine et un intérieur frais et accueillant.</p>
                </div>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2 mt-24 text-yellow-500 text-shadow-xl">Services de lavage extérieur :</h3>
                <div>
                  <p className="font-semibold text-2xl mb-2 mt-6 underline text-shadow-md">3. Lavage Extérieur avec Plusieurs Formules</p>
                  <p className="text-xl text-shadow-xl ">Nous comprenons que chaque voiture et chaque client a des besoins uniques. C'est pourquoi nous proposons trois formules de lavage extérieur pour répondre à toutes les exigences :</p>
                </div>
                <div className="ml-4 ">
                  <p className="shadow-2xl mt-2 mb-2 font-semibold text-shadow-md bg-orange-400 p-1 w-80 rounded-lg pl-4">Formule Numéro 1 : Lavage Normal</p>
                  <p className="text-xl text-shadow-xl ">Un lavage complet et efficace qui assure la propreté de base de votre véhicule. Idéal pour un entretien régulier, cette formule élimine la saleté, la poussière et les résidus de la route.</p>
                </div>
                <div className="ml-4">
                  <p className="shadow-3xl mt-2 mb-2 font-semibold text-shadow-md bg-red-500 p-1 w-80 rounded-lg pl-4 ">Formule Numéro 2 : Lavage Super Polish</p>
                  <p className="text-xl text-shadow-xl">Pour un éclat supplémentaire, choisissez notre Formule Super Polish. En plus du lavage standard, nous appliquons un polish qui fait briller votre voiture comme neuve et offre une protection supplémentaire contre les éléments.</p>
                </div>
                <div className="ml-4">
                  <p className="shadow-3xl mt-2 mb-2 font-semibold text-shadow-md bg-blue-300 p-1 w-80 rounded-lg pl-4">Formule Numéro 3 : Formule Kenolon</p>
                  <p className="text-xl text-shadow-xl">La Formule Kenolon est notre service de lavage premium. Utilisant des produits de pointe, cette formule offre une protection durable et une brillance éclatante. Parfaite pour les amateurs de voitures qui veulent le meilleur pour leur véhicule.</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

{/* <section className="h-screen bg-gradient-to-r from-blue-950 via-blue-500 to-blue-950 p-8 flex flex-col items-center">
  <div className="bg-blue- bg-opacity-20 p-2 rounded-lg  mb-8 ">
    <h2 className="text-3xl font-bold mb-5 text-white text-shadow-xl text-center">À PROPOS DE NOUS</h2>
    <p className=" text-white text-shadow-xl text-lg text-center font-bold">
    Depuis plus de 20 ans, Urban Wash est votre destination de confiance pour le nettoyage automobile. Situé entre la Place des Mayeurs et la Maison Communale de Woluwe-Saint-Pierre, < br/>notre centre de lavage se distingue par un service exceptionnel et une attention méticuleuse aux détails.

    < br/>Chez Urban Wash, nous nous engageons à offrir à nos clients le meilleur pour leurs véhicules.< br/> Nous utilisons des produits de haute qualité qui assurent un lavage en profondeur tout en respectant l'environnement. < br/>Notre équipe de professionnels dévoués prend soin de votre voiture comme si c'était la nôtre, garantissant une propreté éclatante à l'extérieur comme à l'intérieur.

En plus de nos services de lavage complet, nous mettons à votre disposition des machines performantes pour passer l'aspirateur vous-même, afin que chaque recoin de votre véhicule soit impeccable. < br/>Que vous ayez besoin d'un nettoyage rapide ou d'un soin approfondi, nous sommes là pour répondre à vos besoins avec le sourire.

< br/>Venez découvrir pourquoi nos clients nous font confiance depuis deux décennies. Nous avons hâte de prendre soin de votre véhicule et de vous offrir une expérience de lavage incomparable.
    </p>
  </div>

  <div className="flex w-full">
    <div className="bg-white bg-opacity-20 p-4 rounded-lg shadow-lg text-white mr-10 text-shadow-xl">
    <p className="font-bold mb-5 mt-10 text-center underline text-xl">Ouvert :</p>
      <p className="mb-1 text-center ">Tous les jours de 8h30-18h30</p>
      <p className="text-center">Vendredi et samedi de 9h00-19h00</p>
    <div className="flex items-center ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 mr-2 mt-5">
          <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
        </svg>
        <p className="font-bold mt-20">Avenue Charles Thielemans, 25<br />1150 Woluwe-Saint-Pierre</p>
      </div>
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 mt-10">
          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
        </svg>
        <p className="font-bold mt-10">02/776.76.70</p>
      </div>
      <div className="flex items-center mt-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
          <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
          <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
        </svg>
        <p className="font-bold">blablabli@hotmail.com</p>
      </div>
    
     
    </div>

    <div className="w-full relative shadow-2xl ">
      <iframe
        width="100%"
        height="500"
        style={{ border: 0, borderRadius: '0.5rem' }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.6757340114386!2d4.428024977152657!3d50.837169971668665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3db5da02a62b9%3A0xfdabf358fe4c20c6!2sAv.%20Charles%20Thielemans%2025%2C%201150%20Woluwe-Saint-Pierre!5e0!3m2!1sfr!2sbe!4v1717675189083!5m2!1sfr!2sbe"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>
 */}




//       <section className="bg-gray-300 py-12">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
//           {/* Your contact form component goes here */}
//           <p>Placeholder for contact form</p>
//         </div>
//       </section>

//     </div>
//   );
// }

// export default App;
