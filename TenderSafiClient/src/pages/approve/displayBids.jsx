import React, { useState, useEffect } from "react";
import "./approve.css";
import { GiRotaryPhone } from "react-icons/gi";
import { RiBuilding2Fill } from "react-icons/ri";
import { BsTrash } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { useNavigate } from "react-router-dom";



const DisplayBids = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const [color, setColor] = useState(true);

  return (
    <div className="w-10/12 mx-auto my-10">
      
      <div className="w-full">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-primary-color/60 text-white font-jakarta uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left font-josefin">Company Name</th>
              <th className="py-3 px-6 text-left">Goods or Services</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-center">Tenderer</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>

          <tbody className="text-[#130026]  text-sm font-light">
            {props.bids.map((tender, index) => (
              <>
                {tender.choice === 0 ? (
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
                          <b className="font-josefin font-semibold">
                            Documents:{" "}
                          </b>
                          <a
                            className="font-josefin font-normal pl-2 hover:underline"
                            href={tender.goodDealsWith}
                            target="_blank"
                          >
                            Link
                          </a>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-left">
                        <div className="flex items-center">
                          <div className="mr-2"></div>
                          {tender.choice === 1 && (
                            <p
                              className="py-2 px-5 bg-orange/20 rounded-full font-josefin font-normal"
                              style={{ color: color ? "orange" : "green" }}
                            >
                              Pending
                            </p>
                          )}
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

                      <td className="py-3 px-2 text-center">
                        <div className="flex item-center justify-center">
                          <button
                            className="px-6 py-2 font-josefin font-normal text-white bg-primary-color rounded-full"
                            onClick={() => props.approve(index)}
                          >
                            Approve
                          </button>
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
export default DisplayBids;
