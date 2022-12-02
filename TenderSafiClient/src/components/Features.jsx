import image from "../assets/images/FeatureImage.svg";

const Features = () => {
  return (
    <div className="m-8 flex flex-col md:flex-row justify-around items-center">
      <div>
        <img src={image} alt="" className="max-w-[400px] w-[100%]" />
      </div>
      <div>
        <div className="flex m-6">
          <h1 className="font-jakarta text-indigo-900 text-3xl font-bold max-w-[550px] w-[100%]">
            Our amazing Features Helpful for your Business
          </h1>
        </div>
        <div className="max-w-[700px] w-[100%] min-h-[200px] h-[100%] m-2 grid grid-cols-1 sm:grid-cols-2 justify-around ">
          <div className="m-4">
            <h2 className="font-jakarta text-[#263959]/90 text-xl font-semibold mb-4 max-w-[450px] w-[100%]">
              Browse the list of tenders
            </h2>
            <h4 className="font-josefin text-[#000]/80 max-w-[450px] w-[100%]">
              Best way to view available tenders on the blockchain.
            </h4>
          </div>
          <div className="m-4">
            <h2 className="font-jakarta text-[#263959]/90 text-xl font-semibold mb-4 max-w-[450px] w-[100%]">
              Advertise Tenders
            </h2>
            <h4 className="font-josefin text-[#000]/80 max-w-[450px] w-[100%]">
              Every business is need of the best service providers.
            </h4>
          </div>
          <div className="m-4">
            <h2 className="font-jakarta text-[#263959]/90 text-xl font-semibold mb-4 max-w-[450px] w-[100%]">
              Track Tender applications
            </h2>
            <h4 className="font-josefin text-[#000]/80 max-w-[450px] w-[100%]">
              View all tender applicants interested in proiding a service under one platform.
            </h4>
          </div>
          <div className="m-4">
            <h2 className="font-jakarta text-[#263959]/90 text-xl font-semibold mb-4 max-w-[450px] w-[100%]">
              View tender allocations
            </h2>
            <h4 className="font-josefin text-[#000]/80 max-w-[450px] w-[100%]">
              Service providers can view the tender results in a transparent manner.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
