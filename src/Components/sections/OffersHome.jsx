import React, { useState } from "react";
import { Offers } from "../../data";

const OffersHome = () => {
  const [hover, setHover] = useState(false);
  let n = hover ? Offers[1].elemet.length : 5;
  return (
    <div className=" flex flex-col items-center justify-center  gap-10 ">
      <h1 className="highlighted-title  text-secondary tablet:text-[48px] text-[39px] ">
        Offers
      </h1>
      <div className="grid tablet:grid-cols-2 gap-20 grid-cols-1 ">
        {Offers.map((offer, index) => {
          const { titel, elemet, bonus } = offer;
          return (
            <div
              className={`flex flex-col gap-6  p-6 rounded-lg border-[1px] border-secondary  ${
                index == 0 ? `bg-secondary text-primary ` : ``
              } `}
            >
              <div className="flex justify-between   ">
                <h3>{titel}</h3>
                {index == 1 && (
                  <div className="bg-highlight py-[6px] px-[8px] rounded-2xl text-primary  text-[13px]  ">
                    Guaranteed
                  </div>
                )}
              </div>
              <div className=" relative    ">
                <h1 className="text-[54px] font-bold  ">Free</h1>
                {index == 1 && (
                  <p className="text-highlight absolute text-[15px] font-medium -bottom-1 left-24   ">
                    3 first clients only
                  </p>
                )}
              </div>

              <div
                className="flex flex-col gap-4  "
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                {elemet.slice(0, n).map((i) => {
                  return (
                    <div className="">
                      <img src="" alt="" />
                      <p>{i.subtitle}</p>
                    </div>
                  );
                })}
              </div>
              <div className="min-h-[230px] flex flex-col gap-4  ">
                <h2 className={`text-[25px] font-bold `}> Bonus </h2>
                <div className={`flex flex-col itmes-center gap-2   `}>
                  {bonus.map((b) => {
                    return (
                      <div>
                        <img src="" alt="" />
                        <p>{b.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className=" flex justify-between  justify-self-end	  ">
                <button className="p-4 bg-highlight  rounded-xl">
                  Get started
                </button>
                <button className="p-4 bg-highlight  rounded-xl">
                  {" "}
                  More Dettials{" "}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OffersHome;
