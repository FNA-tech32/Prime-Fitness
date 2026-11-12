'use client';
import { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <div>

      <footer className="bg-yellow-500 py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       
            <div className="space-y-4 animate__animated animate__fadeIn animate__delay-0.5s">
              <h3 className="text-2xl font-bold text-black">À propos</h3>
              <p className="text-lg text-black">
                Prime Fitness accompagne chaque membre avec des programmes adaptés,
                des coachs présents et une salle pensée pour progresser.
              </p>
            </div>

        
            <div className="space-y-4 animate__animated animate__fadeIn animate__delay-1s">
              <h3 className="text-2xl font-bold text-black">Contact</h3>
              <ul className="space-y-2 text-black">
                <li>Adresse : 48 Lake View Road, Anna Nagar, Chennai 600040, India</li>
                <li>
                  Téléphone :{' '}
                  <a href="tel:+914442809100" className="hover:text-yellow-700">
                    +91 44 4280 9100
                  </a>
                </li>
                <li>
                  Téléphone alternatif :{' '}
                  <a href="tel:+914442809101" className="hover:text-yellow-700">
                    +91 44 4280 9101
                  </a>
                </li>
                <li>
                  Email :{' '}
                  <a href="mailto:hello@primefitness.in" className="hover:text-yellow-700">
                    hello@primefitness.in
                  </a>
                </li>
                <li>
                  Email alternatif :{' '}
                  <a href="mailto:support@primefitness.in" className="hover:text-yellow-700">
                    support@primefitness.in
                  </a>
                </li>
              </ul>
            </div>

         
            <div className="space-y-4 animate__animated animate__fadeIn animate__delay-1.5s">
              <h3 className="text-2xl font-bold text-black">Suivez-nous</h3>
              <div className="flex space-x-6">
                <a href="#" className="text-black hover:text-yellow-700 transition duration-300">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#" className="text-black hover:text-yellow-700 transition duration-300">
                  <FaTwitter className="text-3xl" />
                </a>
                <a href="#" className="text-black hover:text-yellow-700 transition duration-300">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#" className="text-black hover:text-yellow-700 transition duration-300">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      
      <div className="bg-black py-4">
        <div className="container mx-auto text-center">
          <p className="text-white text-sm">&copy; {currentYear} Prime Fitness. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
