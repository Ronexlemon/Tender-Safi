
import briefcase from "./briefcase.svg"
import construction from "./construction.svg"
import education from "./education.svg"
import govt from "./govt.svg"
import marketing from "./marketing.svg"
import software from "./software.svg"
import explore from "../assets/images/ExploreBackground.svg";

const Explore = () => {
  return (
    <div
    
    style={{
      backgroundImage: `url(${explore})`,
    }}
     
      className="max-w-[screen] w-[100%] object-top h-screen bg-no-repeat bg-cover bg-slate-100 grid content-center justify-items-center"
    >
      <div className=" grid content-center justify-items-center grid-cols-1 xsm:grid-cols-2 md:grid-cols-4 gap-2 max-w-[900px]">
        <div>
          <h1 className="font-jakarta text-indigo-900 text-3xl font-bold">
            Explore the Businesses
          </h1>
          <h3 className="max-w-[500px] w-[100%] font-josefin text-indigo-900 text-base">
            We make it easy to work with professional, creative experts from
            around the world
          </h3>
        </div>
        <div className="flex flex-col items-center text-blue-900 justify-center bg-white min-w-[200px] min-h-[200px] rounded-lg">
            <img src={education} alt="" className="max-w-[40px]" />
            <h3 className="font-jakarta font-bold">Education</h3>
        </div>
        <div className="flex flex-col items-center text-blue-900 justify-center bg-white min-w-[200px] min-h-[200px] rounded-lg">
            <img src={govt} alt="" className="max-w-[40px]" />
            <h3 className="font-jakarta font-bold">Governtment Agencies</h3>
        </div>
        <div className="flex flex-col items-center text-blue-900 justify-center bg-white min-w-[200px] min-h-[200px] rounded-lg">
            <img src={construction} alt="" className="max-w-[40px]" />
            <h3 className="font-jakarta font-bold">Construction</h3>
        </div>
        <div className="flex flex-col items-center text-blue-900 justify-center bg-white min-w-[200px] min-h-[200px] rounded-lg">
            <img src={software} alt="" className="max-w-[40px]" />
            <h3 className="font-jakarta font-bold">Software Development</h3>
        </div>
        <div className="flex flex-col items-center text-blue-900 justify-center bg-white min-w-[200px] min-h-[200px] rounded-lg">
            <img src={briefcase} alt="" className="max-w-[40px]" />
            <h3 className="font-jakarta font-bold">Consultancy Services</h3>
        </div>
        <div className="flex flex-col items-center text-blue-900 justify-center bg-white min-w-[200px] min-h-[200px] rounded-lg">
            <img src={marketing} alt="" className="max-w-[40px]" />
            <h3 className="font-jakarta font-bold">Marketing Services</h3>
        </div>
        <div className="flex flex-col items-center text-blue-900 justify-center bg-white min-w-[200px] min-h-[200px] rounded-lg">
            <img src={education} alt="" className="max-w-[40px]" />
            <h3 className="font-jakarta font-bold">Education</h3>
        </div>
      </div>
    </div>
  );
};

export default Explore;
