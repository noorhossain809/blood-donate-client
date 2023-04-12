import React from "react";
import img from "../../assets/images/separator.png";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

const Campaign = () => {
  return (
    <div className="container mx-auto px-12 py-10 pb-16">
      <div className="items-center text-center">
        <h1 className="mb-5 text-4xl font-medium tracking-wide mt-16">
          DONATION PROCESS
        </h1>
        <img className="mx-auto" src={img} alt="" />
        <h4 className="mb-5 text-xl font-normal tracking-wide ">
          The donation process from the time you arrive center until the time
          you leave
        </h4>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-16">
        <div className="card lg:card-side bg-gray-200 shadow-xl rounded-none">
          <figure>
            <img
              src="https://placeimg.com/200/280/arch"
              className="h-full w-[550px]"
              alt="Album"
            />
          </figure>
          <div className="pt-4 mx-4 space-y-6">
            <h4 className=" bg-black text-white px-4 w-36">14 JUNE, 2017</h4>
            <h2 className="text-2xl text-[#FE3C47]">WORLD BLOOD DONORS DAY</h2>
            <h4>
              Every year, on 14 June, countries around the world celebrate World
              Blood Donor Day. The event serves to thank voluntary.
            </h4>
            <div className="card-actions flex pt-8">
              <div className="flex gap-1">
                <AiOutlineClockCircle className="w-4 h-4 mt-1" />
                <p>10.00am - 3.00pm</p>
              </div>

              <div className="flex border-l-2 border-gray-500 px-3">
                <MdLocationOn className="w-4 h-4 mt-1" />
                <p className="">California, USA</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-gray-200 shadow-xl rounded-none">
          <figure>
            <img
              src="https://placeimg.com/200/280/arch"
              className="h-full w-[550px]"
              alt="Album"
            />
          </figure>
          <div className="pt-4 mx-4 space-y-6">
            <h4 className=" bg-black text-white px-4 w-36">14 JUNE, 2017</h4>
            <h2 className="text-2xl text-[#FE3C47]">O- BLOOD DONORS NEEDED</h2>
            <h4>
              O Negative blood cells are called “universal” meaning they can be
              transfused to almost any patient in need and blood cells are
              safest.
            </h4>
            <div className="card-actions flex pt-8">
              <div className="flex gap-1">
                <AiOutlineClockCircle className="w-4 h-4 mt-1" />
                <p>10.00am - 3.00pm</p>
              </div>

              <div className="flex border-l-2 border-gray-500 px-3">
                <MdLocationOn className="w-4 h-4 mt-1" />
                <p className="">California, USA</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-gray-200 shadow-xl rounded-none">
          <figure>
            <img
              src="https://placeimg.com/200/280/arch"
              className="h-full w-[550px]"
              alt="Album"
            />
          </figure>
          <div className="pt-4 mx-4 space-y-6">
            <h4 className=" bg-black text-white px-4 w-36">14 JUNE, 2017</h4>
            <h2 className="text-2xl text-[#FE3C47]">YOU ARE SOMEBODY’S TYPE</h2>
            <h4>
              Many people has same blood group like you. so donate now and bring
              smiles in their face and encourage others for donate blood.
            </h4>
            <div className="card-actions flex pt-8">
              <div className="flex gap-1">
                <AiOutlineClockCircle className="w-4 h-4 mt-1" />
                <p>10.00am - 3.00pm</p>
              </div>

              <div className="flex border-l-2 border-gray-500 px-3">
                <MdLocationOn className="w-4 h-4 mt-1" />
                <p className="">California, USA</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-gray-200 shadow-xl rounded-none">
          <figure>
            <img
              src="https://placeimg.com/200/280/arch"
              className="h-full w-[550px]"
              alt="Album"
            />
          </figure>
          <div className="pt-4 mx-4 space-y-6">
            <h4 className=" bg-black text-white px-4 w-36">14 JUNE, 2017</h4>
            <h2 className="text-2xl text-[#FE3C47]">
              DONATION - FEEL REAL PEACE
            </h2>
            <h4>
              You're the real hero because you can gift a new life for
              patient.So donate your blood and enjoy a precious life. Don't
              fear, it's really easy.
            </h4>
            <div className="card-actions flex pt-8">
              <div className="flex gap-1">
                <AiOutlineClockCircle className="w-4 h-4 mt-1" />
                <p>10.00am - 3.00pm</p>
              </div>

              <div className="flex border-l-2 border-gray-500 px-3">
                <MdLocationOn className="w-4 h-4 mt-1" />
                <p className="">California, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
