import React, { useState, useEffect } from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { RiBuilding2Fill } from "react-icons/ri";
import { BsTrash } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import NavbarHome from "../../components/NavbarHome";

const DisplayTenders = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="h-full  " >
      <NavbarHome/>
      <div className="mx-auto w-10/12 my-10">
        <div>
          <h1 className="font-jakarta text-3xl font-extrabold">Listed Tenders</h1>
          
          <table className="min-w-max w-full table-auto my-10">
            <thead>
              <tr className="bg-primary-color/60 text-white font-jakarta uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left font-josefin">
                  Company Name
                </th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-center">Phone Number</th>
                <th className="py-3 px-6 text-left">Tender Description</th>
                <th className="py-3 px-6 text-center">Deadline Date</th>
                <th className="py-3 px-6 text-center">Tender Amount</th>
                <th className="py-3 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-[#130026]  text-sm font-light">
              {props.tenders.map((tender, index) => (
                <>
                  <tr
                    key={tender.tenderindexs}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-2 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="mr-2"></div>
                        <span className="font-medium font-josefin">
                          {tender.companyNames}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-left ">
                      <div className="flex items-center">
                        <div className="mr-2"></div>
                        <span className="font-josefin font-normal">
                          {tender.contactEmails}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-left">
                      <div className="flex items-center">
                        <div className="mr-2"></div>
                        <span className="font-josefin font-normal">
                          0712345678
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-left">
                      <div className="flex items-center">
                        <div className="mr-2"></div>
                        <span className="font-josefin font-normal">
                          {tender.tenderDescriptions}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-left">
                      <div className="flex items-center">
                        <div className="mr-2"></div>
                        <span className="font-josefin font-normal">
                          {tender.deadlineDates}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2"></div>
                        <span className="font-josefin font-normal">
                          {tender.tenderAmounts / 1}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-center">
                      <div className="flex item-center justify-center">
                        <button
                          className="px-6 py-2 font-josefin font-normal text-white bg-primary-color rounded-full "
                          onClick={() =>
                            navigate("/BiderForm", { state: { id: index } })
                          }
                          id="btn-bid"
                        >
                          BID
                        </button>
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

//     const navigate = useNavigate();

//     return tenders.map(tender => (

//         <div className='tenderCard' key ={tender.contact}>
//             <div className='tenderCardHeader' id='tenderCardHeader'>

//                         <p><RiBuilding2Fill/><b> {tender.companyName}</b></p>
//                         <p>{tender.description}</p>
//                         <h4>{tender.amount}</h4>

//             </div>
//             <div className='tenderCard-middle' id='tendercard-middle'>
//                 <h5><GiRotaryPhone/>&nbsp;{tender.contact}&emsp;&emsp;&emsp;&emsp;<MdDateRange/>&nbsp;{tender.deadline} &emsp;&emsp;&emsp;&emsp;<HiOutlineMail/>&nbsp;{tender.email}</h5>
//             </div>
//             <div className='bid-btn-approve-btn' id='bid-btn-approve-btn'>
//                 <button className='btn-bid' id='btn-bid' onClick={ () =>navigate("/BiderForm")}>BID</button>
//                 <button className='btn-aprove'>Approve</button>
//                 <button className="deletebtn" onClick={()=> deleteTender(tender.contact)}><BsTrash/></button>
//             </div>

//         </div>

//      ))

//   }
export default DisplayTenders;
