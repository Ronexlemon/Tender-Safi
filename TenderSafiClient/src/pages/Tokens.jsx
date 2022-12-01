import React,{useState} from "react";
import NavbarHome from '../components/NavbarHome';

const Tokens = (props) => {
  const [address, setAddress] = useState(null);
  const [amount, setAmount] = useState(null);
  return (
    <>
      <div className=" w-full">
        <NavbarHome />
        <div className="w-4/5 mx-auto flex justify-evenly py-10">
          <h2 className=" font-bold font-jakarta text-lg ">
            ETH Balance:{" "}
            <span className="text-green-400 font-bold font-jost text-4xl">
              {/* {parseFloat((props.cUSD / 10 ** 18).toFixed(4))} */}
            </span>
          </h2>
          <br />
          <h2 className=" font-bold font-josefin text-lg">
            Tendasafi Balance:{" "}
            <span className="font-bold text-orange-400  font-jost text-4xl">
              {props.balance}{" "}
            </span>
          </h2>
        </div>
      </div>
      <div className="w-4/5 mx-auto flex justify-evenly py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-1">
          <div className=" bg-white h-60 rounded-md m-1">
            
            <div className=" bg-white h-60 rounded-md mt-4 p-5 flex flex-col gap-6 ">
              <div>
                <h1 className="font-jakarta font-bold xl:text-3xl lg:text-2xl md:text-xl sm:text-lg">
                  Buy TenderSafi Token
                </h1>
              </div>

              <div className="">
                <div className="">
                  <h3 className="font-jakarta">
                    Buy <span className="font-bold">10</span> TenderSafi Tokens for{" "}
                    <span className="font-bold">1.58</span> cUSD{" "}
                  </h3>

                  {/* <input
                    className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-bold leading-none text-white focus:outline-none bg-blue-500 border rounded hover:bg-blue-600 py-4 w-2/5 font-open my-3"
                    type="submit"
                    name="Send Transcation"
                    value="BUY"
                    onClick={() => {
                      // props.buyrehema();
                    }}
                  /> */}
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Tokens;