import React from "react";
import bg from "../assets/images/Bg.png";

export default function Subscription() {
  return (
    <section className="bg-secondary-color py-20 w-full">
      <div className="w-10/12 mx-auto">
        <div
          style={{
            backgroundImage: `url(${bg})`,
          }}
          className=" grid sm:grid-cols-1 md:grid-cols-2  justify-items-center align-items-center h-[100%] bg-no-repeat bg-cover bg-center rounded-3xl  "
        >
          <div></div>
          <div>
            <div className="sub_items py-2">
              <div className="sub_text space-y-4">
                <h3 className="font-jakarta text-3xl font-bold ">
                  Interested in Tendering? <br />
                  Join us now
                </h3>
              </div>

              <form>
                <input type="email" name="Email" placeholder="Email" />
                <button type="submit" className="btnsub font-josefin">
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
