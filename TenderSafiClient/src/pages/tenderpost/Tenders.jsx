import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import "./tenders_module.css";
import DisplayTenders from "./DisplayAvailableTenders";
import Web3Modal from "web3modal";
import { providers, Contract } from "ethers";
//import {ABI} from "../tenderpost_abi";
import { BiderAbi } from "../../abi/bidercontract_abi";
//import Web3 from 'web3';
import { BigNumber } from "ethers";
import { SiBitcoincash } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import NavbarHome from "../../components/NavbarHome";
//from display

//Getting the values of local storage
// const getDatafromLS=()=>{
//     const data = localStorage.getItem('tenders');
//     if(data){
//         return JSON.parse(data);
//     }
//     else{
//         return[]
//     }
// }

const Tenders = () => {
  let ref = useRef(null);
  let getformdiv = useRef(null);
  let btnapprove = useRef(null);
  //let Tenders =[];
  const [Tenders, setTenders] = useState([]);
  const TenderOwnerAddress = "0x13A44fFe2a9166Ac6dA349837d30B3f47D79b3E8";
  const [tenderslength, setLength] = useState(0);
  const web3ModalRef = useRef();
  const [walletconnect, setWalletConnect] = useState(false);
  const [address, setaddress] = useState(null);
  const [userAccount, setUserAccount] = useState(null);
  //const [accountBalance,setAccountBalance] = useState(null);
  //postTender to the contract

  //  document.querySelector(".btnPost")
  //  .addEventListener("click", async (e) =>
  const btnPosts = async () => {
    const params = [companyName, description, deadline, email, amount];

    try {
      const signer = await getProviderOrSigner(true);
      const tenderContract = new Contract(TenderOwnerAddress, BiderAbi, signer);
      const results = await tenderContract.writeTenderDetails(...params);
      // .send({from: address})
      alert("add results successful");
    } catch (error) {
      alert("the error is", error);
    }
    alert(`🎉 You successfully added "${params[0]}".`);
    // getAllTenders()
  };
  //getAllTenders
  //             const getAllTenders =  useCallback(async ()=>{
  //                 let _tenders =[];
  //                 const provider = await getProviderOrSigner();
  //                 const TenderContracts = new Contract(
  //                     TenderOwnerAddress,
  //                     BiderAbi,
  //                     provider,
  //                 ) ;

  //                 const tenderLength = await TenderContracts.tenderTotals();

  // for(let i =0;i < tenderLength;i++){
  //     let _tender = new Promise(async(resolve,reject)=>{
  //         let t = await  TenderContracts.readTenderDetails(i);
  //         resolve({
  //              owners:t[0],
  //             companyNames:t[1],
  //           tenderDescriptions:t[2],
  //              deadlineDates:t[3],
  //              contactEmails:t[4],
  //              tenderAmounts:t[5],
  //              tenderindexs:t[6],

  //         });
  //         reject(new Error('Will this be ignored?')); // ignored

  //     })
  //     _tenders.push(_tender);

  // }
  // const tenderss = await Promise.all(_tenders);
  // setTenders(tenderss);
  // //renderProducts();

  // //add function to render tenders
  //             },[])

  // function renderProducts() {
  //     ref.current.innerHTML = ""

  //     Tenders.forEach((_product) => {
  //         const newDiv = document.createElement("div")
  //         newDiv.className = "tenderTemplates"
  //         newDiv.innerHTML = DisplayTenders(_product)
  //         ref.current.appendChild(newDiv);
  //     })
  //   }

  //getTotalTendersLength from the cntract
  // const getTotalTendersLength = async ()=>{
  //    // try{
  //         const provider = await getProviderOrSigner();

  //         const TenderPosterContract = new Contract(
  //             TenderOwnerAddress,
  //             ABI,
  //             provider,
  //         );
  //         const tenderLength = await TenderPosterContract.tenderTotals();
  //         setLength(tenderLength);
  //     // }
  //     // catch(error){
  //     //     console.error(error);
  //     // }

  // }
  const getUserAddress = async () => {
    const signer = await getProviderOrSigner(true);
    const accounts = await signer.getAddress();
    setaddress(accounts);
  };
  const navigate = useNavigate();

  const getProviderOrSigner = async (needSigner = false) => {
    //connect metamask
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);
    //check if user is connected to goerli network
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 5) {
      window.alert("Change network to Goerli");
      throw new Error("Change network To Goerli");
    }
    // alert("network is goerli")
    //if need signer for transactions
    if (needSigner) {
      const signer = web3Provider.getSigner();
      const accounts = await signer.getAddress();
      setaddress(accounts);
      return signer;
    }
    return web3Provider;
  };
  const DectectWindow = async () => {
    try {
      await getProviderOrSigner();
      await getUserAddress();
      alert("set account");
      setWalletConnect(true);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  //main array of tender details objects state
  //const[tenders, setTenders] = useState(getDatafromLS());

  //input field states
  const [companyName, setCompanyName] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  // //Form submit event
  const handleAddTender = (e) => {
    //prevent page refresh
    e.preventDefault();

    // //creating an object
    // let tender={
    //     companyName,
    //     description,
    //     deadline,
    //     contact,
    //     email,
    //     amount
    // }
    // setTenders([...tenders, tender]);
    setCompanyName("");
    setDescription("");
    setDeadline("");
    setContact("");
    setEmail("");
    setAmount("");
  };
  //btnapprove.current

  //display
  //  const DisplayTenders =(tenders) =>{
  //     console.log(tenders.companyNames);
  //    // const items = JSON.stringify(tenders);

  //     return `
  //         <div className='tenderCard' key= ${tenders.contactEmails}>
  //             <div className='tenderCardHeader' id='tenderCardHeader'>

  //                         <p><RiBuilding2Fill/><b>Company : ${tenders.companyNames}</b></p>
  //                         <p><b>TenderDescription:</b> ${tenders.tenderDescriptions}</p>
  //                         <h4>Amount: ${tenders.tenderAmounts}</h4>

  //             </div>
  //             <div className='tenderCard-middle' id='tendercard-middle'>
  //                 <h5><GiRotaryPhone/>contact:${tenders.contactEmails}&emsp;&emsp;&emsp;&emsp;<MdDateRange/>&nbsp;deadline:${tenders.deadlineDates} &emsp;&emsp;&emsp;&emsp;<HiOutlineMail/>&nbsp;${tenders.contactEmails}</h5>
  //             </div>
  //             <div className='bid-btn-approve-btn' id='bid-btn-approve-btn'>
  //                 <button className='btn-bid' id='btn-bid'>BID</button>
  //                 <button  onClick="{Approve()}" className='btn-aprove' id='btn-aprove'>Approve</button>
  //                 <button className="deletebtn" ><BsTrash/></button>

  //             </div>

  //         </div>

  //      )
  //      `

  //   }
  //button.addEventListener("click", approve);

  const openForm = () => {
    getformdiv.current.style.display = "block";
  };
  const closeForm = () => {
    getformdiv.current.style.display = "none";
  };

  //delete tender from local storage
  // const deleteTender=(contact)=>{
  //     const filteredTenders=tenders.filter((element, index)=>{
  //         return element.contact !== contact
  //     })
  //     setTenders(filteredTenders);
  // }
  //saving data to local storage

  // useEffect(()=>{
  //     localStorage.setItem('tenders', JSON.stringify(tenders));
  // }, [tenders])
  //load content on reload
  useEffect(() => {
    web3ModalRef.current = new Web3Modal({
      network: "goerli",
      providerOptions: {},
      disableInjectedProvider: false,
      cacheProvider: false,
    });
    //getTotalTendersLength();
    // getAllTenders();
    getProviderOrSigner();
    //renderProducts();
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [walletconnect, tenderslength]);

  return (
    <>
      <NavbarHome />
      <div className="mx-auto w-10/12 my-10">
        <div ref={getformdiv} className="">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h1 className="font-jakarta text-3xl font-extrabold">
                Advertise Tender
              </h1>
              <p className="py-4 pr-4 font-josefin">
                Connect wallet to fill the form below.
              </p>
            </div>

            <div>
              <button
                onClick={DectectWindow}
                className="px-4 py-2 font-josefin text-white bg-primary-color rounded-full shadow-md hover:shadow-lg"
              >
                Connect Wallet
              </button>
            </div>
          </div>

          <div className="bg-gray/30 my-4 p-10 rounded-md">
            <div className="my-6 w-full">
              <form
                onSubmit={handleAddTender}
                className="flex justify-between w-11/12 mx-auto"
              >
                <div>
                  <div className="w-full">
                    <label className="font-josefin">Company Name</label>
                    <br />
                    <input
                      className="py-3 pr-24 pl-4 border-2 rounded-lg"
                      type="text"
                      id="company"
                      name="company"
                      placeHolder="Company Name..."
                      required
                      onChange={(e) => setCompanyName(e.target.value)}
                      value={companyName}
                    />
                  </div>

                  <div>
                    <label className="font-josefin pt-2">
                      Tender Description
                    </label>
                    <br />
                    <input
                      className="py-3 pr-24 pl-4 border-2 rounded-lg"
                      type="text"
                      id="description"
                      name="description"
                      placeHolder="Tender description..."
                      required
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                    />
                  </div>

                  <div>
                    <label className="font-josefin">DeadLine</label>
                    <br />
                    <input
                      className="py-3 px-4 border-2 rounded-lg"
                      type="date"
                      id="deadline"
                      name="deadline"
                      required
                      onChange={(e) => setDeadline(e.target.value)}
                      value={deadline}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label className="font-josefin">Contact</label>
                    <br />
                    <input
                      className="py-3 pr-24 pl-4 border-2 rounded-lg"
                      type="text"
                      id="contact"
                      name="contact"
                      placeHolder="0792271915"
                      required
                      onChange={(e) => setContact(e.target.value)}
                      value={contact}
                    />
                  </div>

                  <div>
                    <label className="font-josefin">Email</label>
                    <br />
                    <input
                      className="py-3 pr-24 pl-4 border-2 rounded-lg"
                      type="email"
                      id="email"
                      name="email"
                      placeHolder="stansmith@gmail.com"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>

                  <div>
                    <label className="font-josefin">Amount</label>
                    <br />
                    <input
                      className="py-3 pr-24 pl-4 border-2 rounded-lg"
                      type="text"
                      id="amount"
                      name="amount"
                      required
                      onChange={(e) => setAmount(e.target.value)}
                      value={amount}
                    />
                  </div>

                  <div className="flex gap-4 my-4">
                    <button
                      className="px-10 py-2 border-2 border-secondary-color text-secondary-color rounded-full mb-2 font-josefin"
                      onClick={() => navigate("/Tenders")}
                    >
                      Close
                    </button>
                    <button
                      className="px-10 py-2 bg-secondary-color text-[#fff] rounded-full shadow-md mb-2 font-josefin"
                      onClick={() => {
                        btnPosts();
                      }}
                      type="submit"
                      value="Submit"
                    >
                      Post Tender
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tenders;
