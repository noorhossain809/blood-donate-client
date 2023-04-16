import React from "react";
import { CgMail } from "react-icons/cg";
import { TiLocationArrow } from "react-icons/ti";
import { IoMdCall } from "react-icons/io";
import { AiFillCaretRight } from "react-icons/ai";
import logo from "../../assets/images/logo-footer.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer border-b border-gray-600 container mx-auto px-12 p-10 bg-[#1a1a1a]">
        <div className="md:flex gap-12 py-6">
          <img src={logo} alt="" />
          <p className="text-base text-white font-medium">
            We are world largest and trustful blood donation center. We have
            been working since 1973 with a prestigious vision to helping patient
            to provide blood. We are working all over the world, organizing
            blood donation campaign to grow awareness among the people to donate
            blood.
          </p>
        </div>
      </footer>
      <footer className="footer container mx-auto px-12 p-10 bg-[#1a1a1a] text-base-content">
        <div className="col-span-1">
          <span className="footer-title text-white text-xl font-medium">
            SUBSCRIBE US
          </span>
          <h3 className="text-lg text-white">
            Signup for regular newsletter and stay up to <br /> date with our
            latest news.
          </h3>
          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input border-none w-auto rounded-none bg-[#444444] focus:outline-none"
              required
            />
          </div>
          <button className="btn btn-active bg-[#FE3C47] hover:bg-[#FE3C47] font-mono tracking-widest subpixel-antialiased px-6 rounded-none">
            Subscribe Now
          </button>
        </div>
        <div className="text-white">
          <span className="footer-title text-xl font-medium">CONTACT US</span>
          <div className="flex gap-2">
            <CgMail className="w-6 h-6 mt-1 text-[#FE3C47] " />
            <div>
              <a
                href="/"
                className=" text-lg hover:text-[#FE3C47] tracking-wider font-mono"
              >
                support@donation.com
              </a>
              <br />
              <a
                href="/"
                className=" text-lg hover:text-[#FE3C47] tracking-wider font-mono"
              >
                helpme@donation.com
              </a>
            </div>
          </div>
          <div className="flex gap-1">
            <TiLocationArrow className="w-8 h-8 pt-1 text-[#FE3C47] " />
            <a href="/" className=" text-lg font-mono">
              Road-2,3/A East Shibgonj
              <br />
              Sylhet-3100, Bangladesh
            </a>
          </div>
          <div className="flex gap-2">
            <IoMdCall className="w-7 h-7 pt-1 text-[#FE3C47] " />
            <a href="/" className=" text-lg font-mono">
              Office: (+880) 0823 560 433
              <br />
              Cell: (+880) 0723 161 343
            </a>
          </div>
        </div>
        <div className="text-white">
          <span className="footer-title text-xl font-medium">
            SUPPORT LINKS
          </span>
          <div className="flex gap-3">
            <div>
              <ul className="text-lg space-y-4">
                <div className="flex">
                  <AiFillCaretRight className="w-6 h-6 text-[#FE3C47]" />
                  <li className="hover:text-[#FE3C47] cursor-pointer">
                    {" "}
                    Thalassemia
                  </li>
                </div>
                <div className="flex">
                  <AiFillCaretRight className="w-6 h-6 text-[#FE3C47]" />
                  <li className="hover:text-[#FE3C47] cursor-pointer">
                    {" "}
                    Thalassemia
                  </li>
                </div>
                <div className="flex">
                  <AiFillCaretRight className="w-6 h-6 text-[#FE3C47]" />
                  <li className="hover:text-[#FE3C47] cursor-pointer">
                    {" "}
                    Thalassemia
                  </li>
                </div>
                <div className="flex">
                  <AiFillCaretRight className="w-6 h-6 text-[#FE3C47]" />
                  <li className="hover:text-[#FE3C47] cursor-pointer">
                    {" "}
                    Thalassemia
                  </li>
                </div>
                <div className="flex">
                  <AiFillCaretRight className="w-6 h-6 text-[#FE3C47]" />
                  <li className="hover:text-[#FE3C47] cursor-pointer">
                    {" "}
                    Thalassemia
                  </li>
                </div>
                <div className="flex">
                  <AiFillCaretRight className="w-6 h-6 text-[#FE3C47]" />
                  <li className="hover:text-[#FE3C47] cursor-pointer">
                    {" "}
                    Thalassemia
                  </li>
                </div>
              </ul>
            </div>
            <div>
              <ul className="text-lg space-y-4">
                <div className="flex">
                  <AiFillCaretRight className="w-6 h-6 text-[#FE3C47]" />
                  <li className="hover:text-[#FE3C47] cursor-pointer">
                    {" "}
                    Thalassemia
                  </li>
                </div>
                <div className="flex">
                  <AiFillCaretRight className="w-6 h-6 text-[#FE3C47]" />
                  <li className="hover:text-[#FE3C47] cursor-pointer">
                    {" "}
                    Thalassemia
                  </li>
                </div>
                <div className="flex">
                  <AiFillCaretRight className="w-6 h-6 text-[#FE3C47]" />
                  <li className="hover:text-[#FE3C47] cursor-pointer">
                    {" "}
                    Thalassemia
                  </li>
                </div>
                <div className="flex">
                  <AiFillCaretRight className="w-6 h-6 text-[#FE3C47]" />
                  <li className="hover:text-[#FE3C47] cursor-pointer">
                    {" "}
                    Thalassemia
                  </li>
                </div>
                <div className="flex">
                  <AiFillCaretRight className="w-6 h-6 text-[#FE3C47]" />
                  <li className="hover:text-[#FE3C47] cursor-pointer">
                    {" "}
                    Thalassemia
                  </li>
                </div>
                <div className="flex">
                  <AiFillCaretRight className="w-6 h-6 text-[#FE3C47]" />
                  <li className="hover:text-[#FE3C47] cursor-pointer">
                    {" "}
                    Thalassemia
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-[#1a1a1a] text-base-content border-gray-600">
        <div className="items-center grid-flow-col text-white text-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p className="text-lg font-medium ">
            Copyright © 2022, All Right Reserved - by Teammates
          </p>
        </div>
        {/* <div className="md:place-self-center md:justify-self-end">
          <div className="grid md:grid-flow-col gap-4">
            <a
              href="/"
              className="hover:text-[#FE3C47] border-r-4 border-h-2 cursor-pointer text-white text-lg font-semibold px-2"
            >
              Home
            </a>
            <a
              href="/"
              className="hover:text-[#FE3C47] border-r-4 cursor-pointer text-white text-lg font-semibold px-2"
            >
              Causes
            </a>
            <a
              href="/"
              className="hover:text-[#FE3C47] border-r-4 cursor-pointer text-white text-lg font-semibold px-2"
            >
              Events
            </a>
            <a
              href="/"
              className="hover:text-[#FE3C47] border-r-4 cursor-pointer text-white text-lg font-semibold px-2"
            >
              Gallery
            </a>
            <a
              href="/"
              className="hover:text-[#FE3C47] border-r-4 cursor-pointer text-white text-lg font-semibold px-2"
            >
              Blog
            </a>
            <a
              href="/"
              className="hover:text-[#FE3C47] cursor-pointer text-white text-lg font-semibold"
            >
              Contacts
            </a>
          </div>
        </div> */}
      </footer>
    </div>
  );
};

export default Footer;
