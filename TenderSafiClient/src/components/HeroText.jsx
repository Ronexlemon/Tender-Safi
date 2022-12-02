import { Link } from "react-router-dom";
import HeroImage from '../assets/images/HeroImage2.png'

const HeroText = () => {
  return (
    <>
      <div className=" w-full">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:space-y-10 space-x-10 items-center justify-items-center align-items-center w-4/5 mx-auto mt-20">
          <div className="flex flex-col space-y-4">
            <h1 className="font-jakarta text-indigo-900 text-4xl font-bold">
              Bringing trust and transparency to procurement of services
            </h1>
            <h3 className="max-w-[500px] w-[100%] font-josefin text-indigo-900 text-base">
              TenderSafi is a blockchain based application that makes it easy to
              advertise and apply for tenders with the highest level of
              transparency.
            </h3>
            <Link to="/AvailableTenders">
              <button className="bg-primary-color text-white py-2 px-3 rounded-full max-w-[120px] w-[100%] text-base font-josefin">
                Get Started
              </button>
            </Link>
          </div>
          <div>
            <img src={HeroImage} className="scale-125 sm:scale-100" alt="" />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default HeroText;
