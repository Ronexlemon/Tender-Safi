import React from "react";
import Features from "../components/Features";
import HeroText from "../components/HeroText";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/images/HeroBackgroundImage.svg";
// import explore from "../components/ExploreBackground.svg";
import Volunteer from "../components/Volunteer";
import Subscription from "../components/Subscription";
import Footer from "../components/Footer";
import Explore from "../components/Explore";

const LandingPage = () => {
  return (
    <div>
      <header
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        className="min-h-screen h-[100%] bg-no-repeat bg-cover bg-top bg-slate-100 flex flex-col"
      >
        <Navbar />
        <HeroText />
      </header>
      <section>
        <Features />
      </section>
      <section className="h-screen mb-10" >
        <Explore />
        
      </section>
      <section className="h-screen pt-10 bg-light-purple">
      <h1 className="text-center font-jakarta text-indigo-900 text-3xl font-bold w-[100%] py-12">
        Users Around The World
      </h1>
      <Volunteer />

      </section>
     
      <footer  >
      
      <Subscription />
        <Footer />
      </footer>
    </div>
  );
};

export default LandingPage;
