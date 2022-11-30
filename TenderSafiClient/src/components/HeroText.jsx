const HeroText = () => {
  return (
    <div className="max-w-[700px] w-[100%] min-h-[300px] h-[100%] m-2  sm:m-16 flex flex-col justify-around ">
      <h1 className="font-jakarta text-indigo-900 text-4xl font-bold">Bringing trust and transparency to procurement of services</h1>
      <h3 className="max-w-[500px] w-[100%] font-josefin text-indigo-900 text-base">TenderSafi is a blockchain based application that makes it easy to advertise and apply for tenders with the highest level of transparency.</h3>
      <button className="bg-blue-700 text-white py-2 px-3 rounded-full max-w-[120px] w-[100%] text-base">Get Started</button>
    </div>
  );
};

export default HeroText;
