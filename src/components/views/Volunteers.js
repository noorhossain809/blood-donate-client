import React from "react";
import img from "../../assets/images/separator.png";
import img1 from "../../assets/images/team_9.jpg";
import img2 from "../../assets/images/team_6.jpg";
import img3 from "../../assets/images/team_7.jpg";
import { AiOutlineTwitter } from "react-icons/ai";
import { TfiGoogle } from "react-icons/tfi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Volunteers = () => {
  return (
    <div className="container mx-auto px-12 bg-gray-200 py-12">
      <div className="py-6">
        <div className="items-center text-center">
          <h1 className="mb-5 text-4xl font-medium tracking-wide mt-16">
            OUR VOLUNTEERS
          </h1>
          <img className="mx-auto" src={img} alt="" />
          <h4 className="mb-5 text-xl font-normal tracking-wide ">
            The volunteers who give their time and talents help to fulfill our
            mission.
          </h4>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="card card-compact bg-gray-200 shadow-xl border border-gray-300 rounded-none">
            <figure>
              <img
                src={img1}
                className="h-72 bg-gray-200"
                style={{ color: "red" }}
                alt="Shoes"
              />
            </figure>
            <div className="space-y-4">
              <div className="card-body py-6 text-center ">
                <h2 className="text-2xl font-semibold">Alex Cary</h2>
                <h3 className="text-sm font-bold text-gray-500">CO-FOUNDER</h3>
              </div>
              <div className="border-t-2 border-gray-300 space-y-4">
                <div className="flex justify-center gap-4 py-6">
                  <FaFacebookF className="bg-base-100 p-2 w-8 h-8 text-2xl text-[#FE3C47]" />
                  <AiOutlineTwitter className="bg-base-100 p-2 w-8 h-8 text-2xl text-[#FE3C47]" />
                  <TfiGoogle className="bg-base-100 p-2 w-8 h-8 text-2xl text-[#FE3C47]" />
                  <FaLinkedinIn className="bg-base-100 p-2 w-8 h-8 text-2xl text-[#FE3C47]" />
                </div>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-gray-200 shadow-xl border border-gray-300 rounded-none">
            <figure>
              <img
                src={img2}
                className="h-72 bg-gray-200"
                style={{ color: "red" }}
                alt="Shoes"
              />
            </figure>
            <div className="space-y-4">
              <div className="card-body py-6 text-center ">
                <h2 className="text-2xl font-semibold">Anjum Belley</h2>
                <h3 className="text-sm font-bold text-gray-500">FOUNDER</h3>
              </div>
              <div className="border-t-2 border-gray-300 space-y-4">
                <div className="flex justify-center gap-4 py-6">
                  <FaFacebookF className="bg-base-100 p-2 w-8 h-8 text-2xl text-[#FE3C47]" />
                  <AiOutlineTwitter className="bg-base-100 p-2 w-8 h-8 text-2xl text-[#FE3C47]" />
                  <TfiGoogle className="bg-base-100 p-2 w-8 h-8 text-2xl text-[#FE3C47]" />
                  <FaLinkedinIn className="bg-base-100 p-2 w-8 h-8 text-2xl text-[#FE3C47]" />
                </div>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-gray-200 shadow-xl border border-gray-300 rounded-none">
            <figure>
              <img
                src={img3}
                className="h-72 bg-gray-200"
                style={{ color: "red" }}
                alt="Shoes"
              />
            </figure>
            <div className="space-y-4">
              <div className="card-body py-6 text-center ">
                <h2 className="text-2xl font-semibold">Divid Jhon</h2>
                <h3 className="text-sm font-bold text-gray-500">Manager</h3>
              </div>
              <div className="border-t-2 border-gray-300 space-y-4">
                <div className="flex justify-center gap-4 py-6">
                  <FaFacebookF className="bg-base-100 p-2 w-8 h-8 text-2xl text-[#FE3C47]" />
                  <AiOutlineTwitter className="bg-base-100 p-2 w-8 h-8 text-2xl text-[#FE3C47]" />
                  <TfiGoogle className="bg-base-100 p-2 w-8 h-8 text-2xl text-[#FE3C47]" />
                  <FaLinkedinIn className="bg-base-100 p-2 w-8 h-8 text-2xl text-[#FE3C47]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteers;
