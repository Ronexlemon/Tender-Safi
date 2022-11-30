import React from 'react';
import HeroText from '../components/HeroText';
import Navbar from '../components/Navbar';
import backgroundImage from "./HeroBackgroundImage.svg";


const LandingPage = () => {
  return (
    <div>
        <header  style={{ 
            backgroundImage: `url(${backgroundImage})`}} className="min-h-screen h-[100%] bg-no-repeat bg-cover bg-top bg-slate-100 flex flex-col">
            <Navbar />
            <HeroText />
        </header>
        <section>
            {/* App Features */}
        </section>
        <section>
            {/* Explore */}
        </section>
        <section>
            {/* World Users */}
        </section>
        <section>
            {/* Email */}
        </section>
        <footer>
            {/* Footer */}
        </footer>
    </div>
  )
}

export default LandingPage