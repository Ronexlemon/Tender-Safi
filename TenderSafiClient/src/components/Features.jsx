import image from "../assets/images/FeatureImage.svg";

const Features = () => {
  return (
    <div className="m-8 flex flex-col md:flex-row justify-around items-center">
      <div>
        <img src={image} alt="" className="max-w-[400px] w-[100%]" />
      </div>
      <div>
        <div className="flex m-6">
          <h1 className="font-jakarta text-indigo-900 text-4xl font-bold max-w-[550px] w-[100%]">
            Our amazing Features Helpful for your Business
          </h1>
        </div>
        <div className="max-w-[700px] w-[100%] min-h-[200px] h-[100%] m-2 grid grid-cols-1 sm:grid-cols-2 justify-around ">
          <div className="m-4">
            <h2 className="font-jakarta text-indigo-900 text-xl font-semibold mb-4 max-w-[450px] w-[100%]">
              Browse the list of tenders
            </h2>
            <h4 className="font-josefin text-gray-400 max-w-[450px] w-[100%]">
              Best way to collect review. Invite your client and get review from
              client.
            </h4>
          </div>
          <div className="m-4">
            <h2 className="font-jakarta text-indigo-900 text-xl font-semibold mb-4 max-w-[450px] w-[100%]">
              Advertise Tenders
            </h2>
            <h4 className="font-josefin text-gray-400 max-w-[450px] w-[100%]">
              Find the right freelancer to begin working on your project within
              minutes.
            </h4>
          </div>
          <div className="m-4">
            <h2 className="font-jakarta text-indigo-900 text-xl font-semibold mb-4 max-w-[450px] w-[100%]">
              Track Tender applications
            </h2>
            <h4 className="font-josefin text-gray-400 max-w-[450px] w-[100%]">
              Find out project which match your skill and grab the opprtunity to
              work with popular companies.
            </h4>
          </div>
          <div className="m-4">
            <h2 className="font-jakarta text-indigo-900 text-xl font-semibold mb-4 max-w-[450px] w-[100%]">
              View tender allocations
            </h2>
            <h4 className="font-josefin text-gray-400 max-w-[450px] w-[100%]">
              Best way to show your outstanding skill by creating portflio and
              get more clients.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
