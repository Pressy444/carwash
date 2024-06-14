import React from 'react';
import "../../App.css";
import Navbar from '../navbar/Navbar';

function Apropos() {
  return (
    <div>
      <Navbar />
      <section className="bg-gradient-to-r from-blue-950 via-blue-500 to-blue-950 p-5 md:p-5 lg:p-24 flex flex-col items-center">
        {/* <div className="hidden lg:flex  items-center"> */}
        <div class="hidden lg:flex lg:flex-col md:flex-col md:flex  items-center justify-center h-screen">
        <div className="bg-blue- bg-opacity-20 rounded-lg p-20 w-full md:w-auto">
          <h2 className="text-3xl font-bold text-white text-shadow-xl mb-10 text-center animate__animated animate__fadeIn animate__slower ">À PROPOS DE NOUS</h2>
          <p className="text-white text-shadow-xl text-lg text-center font-bold animate__animated animate__fadeIn animate__slower">
            Depuis plus de 20 ans, Urban Wash est votre destination de confiance pour le nettoyage automobile. Situé entre la Place des Mayeurs et la Maison Communale de Woluwe-Saint-Pierre,<br />
            notre centre de lavage se distingue par un service exceptionnel et une attention méticuleuse aux détails.</p>

            <p className="text-white text-shadow-xl text-lg text-center font-bold animate__animated animate__fadeIn animate__slower"> <br />Chez Urban Wash, nous nous engageons à offrir à nos clients le meilleur pour leurs véhicules.<br />
            Nous utilisons des produits de haute qualité qui assurent un lavage en profondeur tout en respectant l'environnement. <br />
            <br />En plus de nos services de lavage complet, nous mettons à votre disposition des machines performantes pour passer l'aspirateur vous-même, afin que chaque recoin de votre véhicule soit impeccable. <br /></p>
            <p className="text-white text-shadow-xl text-lg text-center font-bold animate__animated animate__fadeIn animate__slower"> Que vous ayez besoin d'un nettoyage rapide ou d'un soin approfondi, nous sommes là pour répondre à vos besoins avec le sourire.
            <br />Venez découvrir pourquoi nos clients nous font confiance depuis deux décennies. Nous avons hâte de prendre soin de votre véhicule et de vous offrir une expérience de lavage incomparable.</p>
          
        </div>

        <div className="flex w-full flex-grow">
          <div className=" bg-white bg-opacity-20 p-4 rounded-lg shadow-lg text-white mr-10 text-shadow-xl">
            <p className="font-bold mb-3 mt-9 text-center underline text-xl">Ouvert :</p>
            <p className="mb-1 text-center">Tous les jours de 8h30-18h30</p>
            <p className="text-center mb-5">Vendredi et samedi de 9h00-19h00</p>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 mr-2">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
              <p className=" mt-8 text-lg">Avenue Charles Thielemans, 25<br />1150 Woluwe-Saint-Pierre</p>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 mt-5 ">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              <p className=" text-lg mt-5">02/772.43.53</p>
            </div>
            <div className="flex items-center mt-5 ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              <a href="mailto:dp@cwbiz.biz" className="text-white hover:underline hover:text-blue-950 hover:text-xl transform transition-transform hover:scale-110 hover:translate-x-3 underline">dp@cwbiz.biz</a>
            </div>
          </div>

          <div className="w-full relative  shadow-2xl ">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '0.5rem' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.6757340114386!2d4.428024977152657!3d50.837169971668665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3db5da02a62b9%3A0xfdabf358fe4c20c6!2sAv.%20Charles%20Thielemans%2025%2C%201150%20Woluwe-Saint-Pierre!5e0!3m2!1sfr!2sbe!4v1717675189083!5m2!1sfr!2sbe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        </div>
        {/* Section pour petits écrans */}
        <div className="block lg:hidden">
          <div className="flex flex-col items-center p-4">

            <div className="bg-blue- bg-opacity-20 rounded-lg flex-grow w-full md:w-auto">
              <h2 className="text-3xl font-bold mb-5 mt-24 text-white text-shadow-xl text-center">À PROPOS DE NOUS</h2>
              <p className="text-white text-shadow-xl text-lg text-center font-bold bg-">
                Depuis plus de 20 ans, Urban Wash est votre destination de confiance pour le nettoyage automobile. Situé entre la Place des Mayeurs et la Maison Communale de Woluwe-Saint-Pierre,<br />
                notre centre de lavage se distingue par un service exceptionnel et une attention méticuleuse aux détails.
                <br />Chez Urban Wash, nous nous engageons à offrir à nos clients le meilleur pour leurs véhicules.<br />
                Nous utilisons des produits de haute qualité qui assurent un lavage en profondeur tout en respectant l'environnement. <br />
                <br />En plus de nos services de lavage complet, nous mettons à votre disposition des machines performantes pour passer l'aspirateur vous-même, afin que chaque recoin de votre véhicule soit impeccable. <br />
                Que vous ayez besoin d'un nettoyage rapide ou d'un soin approfondi, nous sommes là pour répondre à vos besoins avec le sourire.
                <br />Venez découvrir pourquoi nos clients nous font confiance depuis deux décennies. Nous avons hâte de prendre soin de votre véhicule et de vous offrir une expérience de lavage incomparable.
              </p>
            </div>

            <div className="flex flex-col md:flex-row w-full mt-10 flex-grow">
              <div className="bg-white bg-opacity-20 p-4 rounded-lg shadow-lg text-white mr-0 md:mr-10 md:text-shadow-xl w-full md:w-auto">
                <p className="font-bold mb-3 mt-4 text-center underline text-xl">Ouvert :</p>
                <p className="mb-1 text-center">Tous les jours de 8h30-18h30</p>
                <p className="text-center mb-5">Vendredi et samedi de 9h00-19h00</p>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 mr-2 mt-5">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                  </svg>
                  <p className="font-bold mt-2">Avenue Charles Thielemans, 25<br />1150 Woluwe-Saint-Pierre</p>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 mt-10">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                  </svg>
                  <p className="font-bold mt-10">02/772.43.53</p>
                </div>
                <div className="flex items-center mt-5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5.5 6.908Z" />
                  </svg>
                  <a href="mailto:dp@cwbiz.biz" class="font-bold text-white hover:underline transform transition-transform hover:scale-110 hover:translate-x-2 underline">dp@cwbiz.biz</a>

                </div>
              </div>

              <div className="w-full md:w-auto relative shadow-2xl mt-5 md:mt-0">
                <iframe
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '0.5rem' }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.6757340114386!2d4.428024977152657!3d50.837169971668665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3db5da02a62b9%3A0xfdabf358fe4c20c6!2sAv.%20Charles%20Thielemans%2025%2C%201150%20Woluwe-Saint-Pierre!5e0!3m2!1sfr!2sbe!4v1717675189083!5m2!1sfr!2sbe"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>


          </div>
        </div>
      </section>
    </div>
  );
}

export default Apropos;
