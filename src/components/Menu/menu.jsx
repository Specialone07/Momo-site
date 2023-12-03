import React from "react";
import QR from "./qr.png";
import bm from "./bm.png";
import bc from "./bc.png";
import bf from "./bf.png";
import cmomo from "./cmomo.png";
import Do from "./Do.png";

const Menu = () => {
  return (
    <div>
        
      <div className="text-center text-white p-8 font-sans">
        <h1 className="text-3xl mb-4 text-orange-500">Our Menu</h1>
        <p className="text-center text-orange-400"> Our Menu is more than just Momos </p> <br />
        <p className="text-center text-blue-900">with a variety of dishes to cater to all tastes and preferences</p>
        <p className="text-lg leading-6">
          Explore our delicious menu with a variety of dishes crafted just for you.
        </p>
      </div>

      <div className="text-center p-8">
        <h1 className="text-3xl mb-4">Scan the QR Code</h1>
        <p className="text-lg leading-6">
          Discover more about us by scanning the QR code below.
        </p>
        <img src={QR} alt="" className="max-w-full h-auto mx-auto" />
      </div>

      <section className="w-[1440px] h-[1172px] flex flex-col items-center justify-center gap-10 px-36">
        <div className="flex items-center justify-center gap-10 p-10 w-full">
          {/* <img src={B1} alt="Brushes" /> */}
          <h1 className="text-4xl font-bold font-[chela-one]"><span className="text-orange-600">BUFF</span> MOMO's</h1>
          {/* <img src={B2} alt="Brushes 2" /> */}
        </div>
        <div className="flex flex-col gap-20">
          <div className="flex items-center justify-center gap-32">
            <div className="w-[436px] h-[398px] flex flex-col gap-4">
              <div className="flex items-center justify-center relative">
                <div className="absolute -bottom-2 left-[44%] py-2 px-4 bg-orange-600 rounded-tl-2xl rounded-br-2xl text-white">
                  New
                </div>
                <img src={bm} alt="" />
              </div>
              <div className="flex items-center flex-col justify-center gap-4">
                <div className="flex flex-col items-center justify-center px-10">
                  <div>
                    <h1 className="text-2xl font-bold">Buff Steam Momo</h1>
                  </div>
                  <div className="flex items-center justify-items-end">
                    <img src={Do} alt="" className="w-8 h-8"/>
                    <h1 className="text-2xl font-bold text-orange-600">20</h1>
                  </div>
                </div>
                <div className="flex items-center justify-center px-8">
                  <p className="text-center leading-8 text-lg text-slate-600">
                    (Freshly Steamed Buff Momos made from whole wheat and
                    kneaded with beta Carotene Rich Vegetable Juice)
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[436px] h-[398px] flex flex-col gap-4">
              <div className="flex items-center justify-center relative">
                <div className="absolute -bottom-2 left-[41%] py-2 px-4 bg-red-600 rounded-tl-2xl rounded-br-2xl text-white">
                  Popular
                </div>
                <img src={bf} alt="" />
              </div>
              <div className="flex items-center flex-col justify-center gap-4">
                <div className="flex flex-col items-center justify-center px-10">
                  <div>
                    <h1 className="text-2xl font-bold">Buff F. Momo</h1>
                  </div>
                  <div className="flex items-center justify-items-end">
                    <img src={Do} alt="" className="w-8 h-8" />
                    <h1 className="text-2xl font-bold text-orange-600">20</h1>
                  </div>
                </div>
                <div className="flex items-center justify-center px-8">
                  <p className="text-center leading-8 text-lg text-slate-600">
                    (Freshly Steamed Buff Momos made from whole wheat and
                    kneaded with beta Carotene Rich Vegetable Juice)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-32">
            <div className="w-[436px] h-[398px] flex flex-col gap-4">
              <div className="flex items-center justify-center relative">
              <div className="absolute -bottom-2 left-[35%] py-2 px-4 bg-sky-600 rounded-tl-2xl rounded-br-2xl text-white">
                  Recommended
                </div>
                <img src={cmomo} alt="" />
              </div>
              <div className="flex items-center flex-col justify-center gap-4">
                <div className="flex flex-col items-center justify-center px-10">
                  <div>
                    <h1 className="text-2xl font-bold">Buff C. Momo</h1>
                  </div>
                  <div className="flex items-center justify-items-end">
                    <img src={Do} alt="" className="w-8 h-8" />
                    <h1 className="text-2xl font-bold text-orange-600">20</h1>
                  </div>
                </div>
                <div className="flex items-center justify-center px-8">
                  <p className="text-center leading-8 text-lg text-slate-600">
                    (Freshly Steamed Buff Momos made from whole wheat and
                    kneaded with beta Carotene Rich Vegetable Juice)
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[436px] h-[398px] flex flex-col gap-4">
              <div className="flex items-center justify-center relative">
               
                <img src={bc} alt="" />
              </div>
              <div className="flex items-center flex-col justify-center gap-4">
                <div className="flex flex-col items-center justify-center px-10">
                  <div>
                    <h1 className="text-2xl font-bold">Buff J. Momo</h1>
                  </div>
                  <div className="flex items-center justify-items-end">
                    <img src={Do} alt="" className="w-8 h-8" />
                    <h1 className="text-2xl font-bold text-orange-600">20</h1>
                  </div>
                </div>
                <div className="flex items-center justify-center px-8">
                  <p className="text-center leading-8 text-lg text-slate-600">
                    (Freshly Steamed Buff Momos made from whole wheat and
                    kneaded with beta Carotene Rich Vegetable Juice)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1440px] h-[1172px] flex flex-col items-center justify-center gap-10 px-36">
        <div className="flex items-center justify-center gap-10 p-10 w-full">
          {/* <img src={B1} alt="Brushes" /> */}
          <h1 className="text-4xl font-bold font-[chela-one]"><span className="text-orange-600">CHICKEN</span> MOMO's</h1>
          {/* <img src={B2} alt="Brushes 2" /> */}
        </div>
        <div className="flex flex-col gap-20">
          <div className="flex items-center justify-center gap-32">
            <div className="w-[436px] h-[398px] flex flex-col gap-4">
              <div className="flex items-center justify-center relative">
                <div className="absolute -bottom-2 left-[44%] py-2 px-4 bg-orange-600 rounded-tl-2xl rounded-br-2xl text-white">
                  New
                </div>
                <img src={bf} alt="" />
              </div>
              <div className="flex items-center flex-col justify-center gap-4">
                <div className="flex flex-col items-center justify-center px-10">
                  <div>
                    <h1 className="text-2xl font-bold">Chicken F. Momo</h1>
                  </div>
                  <div className="flex items-center justify-items-end">
                    <img src={Do} alt="" className="w-8 h-8" />
                    <h1 className="text-2xl font-bold text-orange-600">20</h1>
                  </div>
                </div>
                <div className="flex items-center justify-center px-8">
                  <p className="text-center leading-8 text-lg text-slate-600">
                    (Freshly Steamed Buff Momos made from whole wheat and
                    kneaded with beta Carotene Rich Vegetable Juice)
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[436px] h-[398px] flex flex-col gap-4">
              <div className="flex items-center justify-center relative">
                <div className="absolute -bottom-2 left-[40%] py-2 px-4 bg-red-600 rounded-tl-2xl rounded-br-2xl text-white">
                  Popular
                </div>
                <img src={bm} alt="" />
              </div>
              <div className="flex items-center flex-col justify-center gap-4">
                <div className="flex flex-col items-center justify-center px-10">
                  <div>
                    <h1 className="text-2xl font-bold">Chicken Momo</h1>
                  </div>
                  <div className="flex items-center justify-items-end">
                    <img src={Do} alt="" className="w-8 h-8"/>
                    <h1 className="text-2xl font-bold text-orange-600">20</h1>
                  </div>
                </div>
                <div className="flex items-center justify-center px-8">
                  <p className="text-center leading-8 text-lg text-slate-600">
                    (Freshly Steamed Buff Momos made from whole wheat and
                    kneaded with beta Carotene Rich Vegetable Juice)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-32">
            <div className="w-[436px] h-[398px] flex flex-col gap-4">
              <div className="flex items-center justify-center relative">
              <div className="absolute -bottom-2 left-[35%] py-2 px-4 bg-sky-600 rounded-tl-2xl rounded-br-2xl text-white">
                  Recommended
                </div>
                <img src={bc} alt="" />
              </div>
              <div className="flex items-center flex-col justify-center gap-4">
                <div className="flex flex-col items-center justify-center px-10">
                  <div>
                    <h1 className="text-2xl font-bold">Chicken J. Momo</h1>
                  </div>
                  <div className="flex items-center justify-items-end">
                    <img src={Do} alt="" className="w-8 h-8"/>
                    <h1 className="text-2xl font-bold text-orange-600">20</h1>
                  </div>
                </div>
                <div className="flex items-center justify-center px-8">
                  <p className="text-center leading-8 text-lg text-slate-600">
                    (Freshly Steamed Buff Momos made from whole wheat and
                    kneaded with beta Carotene Rich Vegetable Juice)
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[436px] h-[398px] flex flex-col gap-4">
              <div className="flex items-center justify-center relative">
                
                <img src={cmomo} alt="" />
              </div>
              <div className="flex items-center flex-col justify-center gap-4">
                <div className="flex flex-col items-center justify-center px-10">
                  <div>
                    <h1 className="text-2xl font-bold">Chicken C. Momo</h1>
                  </div>
                  <div className="flex items-center justify-items-end">
                    <img src={Do} alt="" className="w-8 h-8" />
                    <h1 className="text-2xl font-bold text-orange-600">20</h1>
                  </div>
                </div>
                <div className="flex items-center justify-center px-8">
                  <p className="text-center leading-8 text-lg text-slate-600">
                    (Freshly Steamed Buff Momos made from whole wheat and
                    kneaded with beta Carotene Rich Vegetable Juice)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
};

export default Menu;
