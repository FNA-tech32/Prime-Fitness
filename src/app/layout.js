import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
export const metadata = {
  title: 'Prime Fitness',
  description: 'Prime Fitness, une salle de sport moderne pour transformer votre corps, votre esprit et votre vie.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-black text-white">
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
