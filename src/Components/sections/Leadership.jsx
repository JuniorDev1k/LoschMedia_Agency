import React from "react";
import imageLeadership from "../../assets/imgs/Leadership.jpg";

const Leadership = () => {
  return (
    <div className="mt-28 ">
      <h1 className="highlighted-title font-bold text-center mb-[15vh] text-[48px] text-secondary ">
        Leadership
      </h1>
      <section className="grid   desktop:grid-cols-2 grid-cols-1  items-center gap-10   ">
        <aside>
          <h1 className="text-[31px] text-center desktop:text-start mb-2 ">
            About the CEO
          </h1>
          <p className="tablet:text-[24px] text-[20px] text-center desktop:text-start">
            <span className="text-highlight">Chahid Kari</span>, founder of
            LoschMedia, is a customer acquisition expert dedicated to improving
            marketing and sales strategies. Over the past year, he’s studied top
            business leaders like Alex Hormozi and Grant Cardone to build his
            agency, which helps B2B businesses by focusing on service delivery
            while handling marketing and sales. Chahid’s unique approach ensures
            he only gets paid for results, reflecting his commitment to client
            success.His flagship offering, the Ultimate Client Growth Engine,
            aims to revolutionize advertising and marketing outsourcing. Chahid
            also shares his business insights on
            <span className="text-highlight"> YouTub</span> and{" "}
            <span className="text-highlight">Instagram</span>, driven by a
            passion for impactful teaching and creating products that sell
            themselves. With his results-based guarantee, Chahid is set to
            transform businesses and demonstrate the power of exceptional
            service
          </p>
        </aside>
        <div className="flex desktop:flex-row-reverse justify-center ">
          <div className="relative  ">
            <div className="z-40">
              <img
                className="h-[385px] w-[295px] tablet:w-[467px] tablet:h-[612px] z-10  "
                src={imageLeadership}
                alt="CEO_IMAGE"
              />
            </div>
            <div className="   absolute -top-4 -left-2 w-full h-full after:content-[''] after:absolute after:top-0 after:-left-0 after:h-4 after:w-[calc(100%)] after:bg-secondary before:content-[''] before:absolute before:top-0 before:-left-2   before:h-[calc(100%)] before:w-[16px] before:bg-secondary  "></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;
