import React from 'react'
// import PNG from "./Group 1.png";
// import MOMO from "./shiv-singh-Vj-J5xNjnxA-unsplash 1.png";
import { FaArrowRightLong } from "react-icons/fa6";
import {  FaPlay } from 'react-icons/fa';
import Button from "../Button/button";
// import PERSON from "./pngwing 1.png";
// import { FaPhoneAlt } from "react-icons/fa";
import {FaPhone} from 'react-icons/fa';
import { FaClock } from 'react-icons/fa6';

// import { FaRegCirclePlay } from "react-icons/fa6";


import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { FaClock } from "react-icons/fa";
// import food from "./Quality.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
// import catering from "./Chef.png";
// import RPerson from "./Rectangle 8.png";
// import party from "./party.png";


import { BsArrowRight } from 'react-icons/bs';
import Do from"./Do.png";
import chick from "./chick.png";
import meat from "./meat.png";
import pork from "./pork.png";
import momo from "./momo.png";
import customer from "./customer.png";
import quality from "./quality.png";
import cate from "./cate.png";
import pri from "./pri.png";
import ai from "./ai.png"


const HomePage = () => {
  return (
    <>
      <div className="w-[1440px] h-full flex flex-col gap-10">
        <section className="relative w-full overflow-hidden h-[726px] px-28 flex items-center justify-between gap-5">
        <div className="h-[880px] w-[88px] absolute bg-orange-600 left-[1300px]"></div>
          <div className="flex flex-col gap-4">
            <h5 className="uppercase font-light text-light text-slate-700">
              Restaurant
            </h5>
            <div className="flex flex-col gap-4">
              <h1 className="flex gap-6 relative">
                <span className="text-slate-900 text-6xl font-bold">The </span>
                {/* <img
                  src={PNG}
                  alt="PNG"
                  className="absolute -z-10 w-[200px] h-[80px] left-[110px] -top-2 rotate-2"
                /> */}
                <span className="text-6xl leading-15 font-semibold text-white">
                  #One
                </span>
              </h1>
              <h1 className="flex items-center gap-7">
                <span className="text-slate-900 text-6xl font-bold">Momo</span>
                <span className="text-orange-600 text-6xl font-bold">
                  Resturant
                </span>
              </h1>
            </div>
            <div>
            <h1 className="text-xl text-semibold">
                More Than
            <span className="text-2xl text-bold text-orange-600" style={{ padding: '0 10px' }}>
                  20+ Varieties
            </span>
             of Momos Available For You
        </h1>

            </div>
            <div className="flex items-center">
              <Button
                text="Explore Food Menu"
                className="bg-[#0C6967] py-5 px-10 rounded-full text-white flex items-center gap-2 text-xl my-4 transition-transform transform hover:scale-105"
                icon={<FaArrowRightLong />}
              />
            </div>
          </div>
   
          <div className="relative w-[622px] h-[434px] ">
          <div class="relative cursor-pointer hover:scale-105 transform transition-transform duration-500">
            <img
              src={momo}
              alt=""
              class="outline-none border-none text-center"
            />
</div>


          </div>
        </section>
        <section className="w-[1440px] h-full flex items-center px-14 justify-between">
          <div className="relative w-[490px] h-[598px]">
            <div className="w-[465px] bg-[#0C6967] rounded-full h-[465px] absolute top-16"></div>
            <div className="w-[465px] bg-[#0C6967] h-[278px] absolute top-[300px]"></div>
            <div>
              <img
                src={customer}
                alt="img"
                className="absolute z-10 -top-[-100px] left-[30px] h-[400px] w-[400px]"
              />
            </div>
            <div></div>
          </div>
          <div className="flex flex-col gap-10 w-[522px]">
            <div>
              <h1 className="text-4xl font-bold text-slate-900">
                Why Customer <span className="text-orange-600">Love Us</span>
              </h1>
            </div>
            <div>
              <p className="text-slate-500 text-lg leading-8">
                Lorem ipsum dolor sit amet consectetur. Sed diam dolor vivamus
                nibh fermentum vulputate tortor. Egestas facilisi luctus turpis
                arcu dignissim. Amet neque enim etiam purus id. Tortor sit orci
                blandit cursus turpis.
              </p>
            </div>
            <div>
              <Button
                text="Explore Our Story"
                className="bg-[#0C6967] py-4 px-8 rounded-full text-white flex items-center gap-2 text-xl "
                icon={<FaArrowRightLong />}
              />
            </div>
          </div>
        </section>

            
        
        
        <section className="w-[1440px] h-full flex items-center justify-center flex-col gap-16 px-28">
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-4xl text-slate-900 font-bold">
              Our <span className="text-orange-600">Most Popular</span> Recipes
            </h1>
            <p className="text-slate-500 text-lg leading-8">
              Browse through a varieties of recipes with fresh ingredients
              selected only from the best places
            </p>
          </div>
          {/* <div className="flex gap-6">
            <Button
              className="border-2 py-3 px-12 duration-300 border-slate-900 rounded-full hover:bg-slate-900 hover:text-white"
              text="Pork"
            />
            <Button
              className="border-2 py-3 px-12 border-slate-200 duration-300 rounded-full hover:border-2 hover:border-slate-900 hover:bg-slate-200"
              text="Meat"
            />
            <Button
              className="border-2 py-3 px-12 border-slate-200 rounded-full duration-300 hover:border-2 hover:border-slate-900 hover:bg-slate-200"
              text="Chicken"
            />
          </div>
          <div className="relative h-[323px] w-[1128px] flex items-center justify-center">
          <div className="flex gap-11 static w-[952px] h-[323px]">
                <div className="h-[323px] w-[288px] flex flex-col items-center justify-center rounded-sm ">
                  <img
                    src={pork}
                    alt="buff momo"
                    className="w-[999px] h-[10x]"
                  />
                </div>
                <div className="flex gap-11 static w-[952px] h-[323px]">
                  </div>
                <div className="h-[323px] w-[288px] flex flex-col items-center justify-center rounded-sm ">
                  <img
                    src={meat}
                    alt="buff momo"
                    className="w-[999px] h-[10x] "
                  />
                </div>
              <div className="relative h-[323px] w-[1128px] flex items-center justify-center">
                <div className="flex gap-11 static w-[952px]
                h-[323px]">
                  <div className="h-[323px] w-[288px] flex flex-col items-center justify-center rounded-sm">
                    <img
                    src={chick}
                    alt=""
                    className="w-[999px] h-[10px]"
                    />
                  </div>
                </div>
              </div>
                
               
                
        
            
            <Button
              icon={<FaChevronRight />}
              className="absolute top-[50%] -right-10 border-2 h-9 border-slate-900 text-slate-900 w-9 flex items-center justify-center rounded-full duration-300 hover:bg-slate-900 hover:text-white "
              />
              <Button
              icon={<FaChevronLeft />}
              className="absolute top-[50%] -left-10 border-2 h-9 border-slate-900 text-slate-900 duration-300 hover:bg-slate-900 hover:text-white w-9 flex items-center justify-center rounded-full"
            />
            </div>
            <div className="relative h-[323px] w-[1128px] flex items-center justify-center">
 
              
              </div>
            </div> */}
           <div className="flex gap-6">
            <Button
              className="border-2 py-3 px-12 duration-300 border-slate-900 rounded-full hover:bg-orange-700 hover:text-white"
              text="Meat"
            />
            <Button
              className="border-2 py-3 px-12 border-slate-200 duration-300 rounded-full hover:border-2 hover:border-slate-900 hover:bg-orange-700 hover:text-white"
              text="Pork"
            />
            <Button
              className="border-2 py-3 px-12 border-slate-200 rounded-full duration-300 hover:border-2 hover:border-slate-900 hover:bg-orange-700 hover:text-white"
              text="Chick"
            />
          </div>

          <div className="relative h-[full] w-[1440px] flex items-center justify-center">
  <Button
    icon={<FaChevronLeft />}
    className="absolute top-[50%] left-14 border-2 h-9 border-slate-900 text-slate-900 duration-300 hover:bg-slate-900 hover:text-white w-9 flex items-center justify-center rounded-full"
  />
  <div className="flex gap-11 static w-[952px] h-[323px]">
    <div className="h-[323px] w-[288px] flex flex-col items-center justify-center rounded-sm">
      <img src={meat} alt="" className="w-[200px] h-[256px]" />
      <div className="text-center font-bold text-slate-900">
        <h1 className="text-2xl">Meat</h1>
        <p className="flex items-center justify-center h-9 text-2xl">
          <img src={Do} alt="" className="h-4 w-4 mt-1" />{" "}
          <span className="text-orange-600">15</span>
        </p>
      </div>
    </div>
    <div className="h-[323px] w-[288px] flex flex-col items-center justify-center rounded-sm">
      <img src={pork} alt="" className="w-[200px] h-[256px]" />
      <div className="text-center font-bold text-slate-900">
        <h1 className="text-2xl">Pork</h1>
        <p className="flex items-center justify-center h-9 text-2xl">
          <img src={Do} alt="" className="h-4 w-4 mt-1" />{" "}
          <span className="text-orange-600">16</span>
        </p>
      </div>
    </div>
    <div className="h-[323px] w-[288px] flex flex-col items-center justify-center rounded-sm">
      <img src={chick} alt="" className="w-[250px] h-[256px]" />
      <div className="text-center font-bold text-slate-900">
        <h1 className="text-2xl">Chick</h1>
        <p className="flex items-center justify-center h-9 text-2xl">
          <img src={Do} alt="" className="h-4 w-4 mt-1" />{" "}
          <span className="text-orange-600">17</span>
        </p>
      </div>
    </div>
  </div>
  <Button
    icon={<FaChevronRight />}
    className="absolute top-[50%] right-14 border-2 h-9 border-slate-900 text-slate-900 duration-300 hover:bg-slate-900 hover:text-white w-9 flex items-center justify-center rounded-full"
  />
</div>

            <button className="relative bg-slate-400 text-white py-3 px-12 rounded-full mt-6 hover:bg-orange-700 focus:outline-none focus:shadow-outline flex items-center">
    Explore our Menu
    <span className="ml-2 inline-block">
      <BsArrowRight size={20} />
    </span>
  </button>
</section>

<section className="w-[1440px] h-full bg-slate-20">
  <div className="flex flex-col items-center justify-center px-28 h-full">
    <h1 className="text-4xl font-bold py-20 mx-[6] text-center ">
      <span className="text-orange-600">We Offer People </span>The Service They Want
    </h1>
    <div
      className="bg-cover bg-fit relative h-[940px] w-[900px] flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'url(/img/se.png)', // Relative path from the public directory
      }}
    >
      <div className="text-black text-center mb-8">
        <p className="text-2xl font-bold mb-4">Process behind the making</p>
        <span>We believe that every meal should be a celebration of life and love.</span>
      </div>
      <button className="bg-orange-600 text-white flex items-center px-6 py-3 rounded-full mt-8">
  <FaPlay className="mr-2" /> Watch The Video

      </button>
      </div>
  </div>
  <div className="px-22 py-16 flex flex-col items-center justify-center gap-10">
            <div className="flex items-center gap-2 justify-center">
              <div className="flex items-center flex-col w-[360px] gap-6 h-[289px] p-10">
                <img src={quality} alt="" />
                <h1 className="text-center text-[1.8rem] font-bold">
                  Quality Food
                </h1>
                <p className="text-center">
                  Only the best food with top quality products and ingredients
                </p>
              </div>
              <div className="flex items-center flex-col w-[360px] gap-6 h-[289px] p-10">
                <img src={pri} alt="" />
                <h1 className="text-center text-[1.8rem] font-bold">
                  Private Party
                </h1>
                <p className="text-center">
                  Get the best food for all your private parties and gatherings
                </p>
              </div>
              <div className="flex items-center flex-col w-[360px] gap-6 h-[289px] p-10">
                <img src={cate} alt="" />
                <h1 className="text-center text-[1.8rem] font-bold">
                  Catering
                </h1>
                <p className="text-center">
                  Get the best food for any occasions and gatherings
                </p>
              </div>
            </div>
          </div>

          
          <div className="px-22 py-16 flex flex-col items-center justify-center mt-14">

  <Button
    text="Explore Our Service"
    className="bg-[#0C6967] py-5 px-10 rounded-full text-white flex items-center gap-2 text-xl"
    icon={<FaArrowRightLong />}
  />
</div>
        </section>
        <section className="w-[1440px] h-[736px] py-20 px-28 flex items-center justify-between gap-24">
          <div className="w-[576px] flex flex-col gap-14">
            <div className="flex flex-col gap-2">
              <h1 className="text-[2.7rem] font-bold">
                200+ <span className="text-orange-600">Happy Customers</span>
              </h1>
              <h3 className="text-2xl font-bold text-[#0C6967]">
                What our customers say about us
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              <p className="Sans text-[1.77rem] font-light">
                “Only the best momo you can find in the market. Different
                Varieties of momo to choose from. Will be visiting again soon”
              </p>
              <h1 className="text-[2rem] font-bold">Alianaa Lopda</h1>
            </div>
            <div className="flex gap-4">
              <Button
                icon={<FaChevronLeft />}
                className="p-4 rounded-full border-2"
              />
              <Button
                icon={<FaChevronRight />}
                className="p-4 rounded-full border-2"
              />
            </div>
          </div>
          <div>
            <img src={ai} alt="" />
          </div>
        </section>
        <section className="w-[1440px] h-[1116px] px-28 py-16 flex flex-col gap-14">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[2.5rem] font-bold">
              Get <span className="text-orange-600">In Touch</span>
            </h1>
            <h4 className="text-[1.9rem] text-[#0C6967] font-bold">
              Our Friendly team would love to hear from you
            </h4>
          </div>
          <div className="p-5 flex items-center justify-center shadow-sm gap-10 shadow-slate-400 rounded-3xl w-[1128px] h-[847px]">
            <div className="w-[461px] bg-[#0C6967] h-[807px] rounded-3xl text-white px-8 py-16 gap-16 flex flex-col">
              <div className="flex flex-col gap-6">
                <h1 className="flex gap-2 font-bold text-2xl relative">
                  <FaLocationDot />
                  <span className="absolute -top-1 left-8"> Our Address</span>
                </h1>
                <h4 className="text-2xl sans">
                  Jhamshikhel, Lalitpur, Nepal
                </h4>
              </div>
              <div className="gap-6 flex flex-col">
                <h1 className="flex gap-2 font-bold text-2xl relative">
                  <FaPhone />
                  <span className="absolute -top-1 left-8">Our Contact</span>
                </h1>
                <div className="flex items-start gap-14">
                  <div className="flex flex-col gap-3 text-2xl sans">
                    <h1>Mobile</h1>
                    <h1>984 4280168</h1>
                    <h1>984 1521704</h1>
                  </div>
                  <div className=" flex flex-col gap-3 text-2xl sans">
                    <h1>Landline</h1>
                    <h1>01-523896</h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <h1 className="flex gap-2 font-bold relative text-2xl">
                  <FaClock className="" />{" "}
                  <span className="absolute -top-1 left-8">
                    Our Service Time
                  </span>
                </h1>
                <div className="flex gap-14">
                  <div className="flex flex-col text-2xl">
                    <h1 className="font-bold">MON - FRI</h1>
                    <h3 className="sans">10 am - 8 pm</h3>
                  </div>
                  <div className="flex flex-col text-2xl">
                    <h1 className="font-bold">SAT - SUN</h1>
                    <h3 className="sans">Closed</h3>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <h1 className="text-2xl sans">
                  Get in touch in social networks
                </h1>
                <div className="flex gap-4 text-3xl">
                  <FaFacebook />
                  <FaInstagram />
                  <FaTiktok />
                </div>
              </div>
            </div>
            <div className="w-[587px] h-[807px] px-8 py-6">
              <form className="flex flex-col h-full w-full gap-4">
                <div className="flex gap-2 ">
                  <div className="flex flex-col gap-2 w-[260px]">
                    <label htmlFor="" className="text-xl">
                      FirstName
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      className="border-2 py-4 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-[260px]">
                    <label htmlFor="" className="text-xl">
                      LastName
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      className="border-2 py-4 rounded-md"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-xl">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="border-2 rounded-md py-4"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-xl">
                    What Can We Do For You
                  </label>
                  <select
                    name=""
                    id=""
                    className="w-full py-4 px-2 bg-white border-2 rounded-md text-xl"
                  >
                    <option value="" className="bg-white text-xl">
                      Choose
                    </option>
                    <option value="" className="bg-white text-xl">
                      Choose1
                    </option>
                    <option value="" className="bg-white text-xl">
                      Choose2
                    </option>
                    <option value="" className="bg-white text-xl">
                      Choose3
                    </option>
                    <option value="" className="bg-white text-xl">
                      Choose4
                    </option>
                    <option value="" className="bg-white text-xl">
                      Choose5
                    </option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-xl">
                    Phone Number
                  </label>
                  <div className="border-2 rounded-md flex items-center gap-1">
                    <select
                      name="country"
                      id="country"
                      className="py-4 px-2 bg-white rounded-md text-xl"
                    >
                      <option value="" className="bg-white text-xl">
                        +977
                      </option>
                    </select>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="h-full w-full py-5 border-l-2"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-xl">
                    Message
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols="60"
                    rows="7"
                    className="border-2"
                  ></textarea>
                </div>
                <div>
                  <Button
                    text="Send Message"
                    type="submit"
                    className=" py-5 px-10 bg-orange-600 text-white rounded-md"
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* <section className="w-[1440px] h-[640px] ">
  <iframe
  src="https://www.google.com/maps/place/Jhamsikhel,+Lalitpur+44600/@27.6850735,85.2979735,16z/data=!3m1!4b1!4m6!3m5!1s0x39eb184628029137:0x1dae687495f17539!8m2!3d27.6828555!4d85.3019883!16s%2Fg%2F1vh_6t0l?entry=ttu"    width="100%"
    height="100%"
    loading="lazy"
    title="Embedded Map"
  ></iframe>
</section>
 */}






      </div>

    </>
  );
};

export default HomePage;