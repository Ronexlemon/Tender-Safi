import "./tender_allocation.css";
import React, { useState, useEffect } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { RiBuilding2Fill } from "react-icons/ri";
import { BsTrash } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineDescription } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import NavbarHome from "../../components/NavbarHome";

const DisplayTenderAllocation = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const [color, setColor] = useState(true);

  return (
    <div className="w-10/12 mx-auto my-10">
      <h1 className="font-jakarta text-3xl font-extrabold">
        Tender Allocation
      </h1>

      <div className="w-full">
        <table className="min-w-max w-full table-auto my-10">
          <thead>
            <tr className="bg-primary-color/60 text-white font-jakarta uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left font-josefin">Company Name</th>
              <th className="py-3 px-6 text-left">Contacts</th>
              <th className="py-3 px-6 text-left">Tender Description</th>
              <th className="py-3 px-6 text-center">Tenderee</th>
            </tr>
          </thead>

          <tbody className="text-[#130026]  text-sm font-light">
            {props.bids.map((tender, index) => (
              <>
                {tender.choice === 1 ? (
                  <>
                    <tr
                      key={tender.bidIndex}
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
                            {tender.contactAddress}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-left">
                        <div className="flex items-center">
                          <div className="mr-2"></div>
                          <span className="font-josefin font-normal">
                            {tender.tenderDescription}
                          </span>
                        </div>
                      </td>

                      <td className="py-3 px-2 text-left">
                        <div className="flex items-center">
                          <div className="mr-2"></div>
                          <span className="font-josefin font-normal">
                            {tender.companyOfferTender}
                          </span>
                        </div>
                      </td>
                    </tr>
                  </>
                ) : (
                  ``
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default DisplayTenderAllocation;
