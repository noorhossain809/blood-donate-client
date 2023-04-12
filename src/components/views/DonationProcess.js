import React from "react";
import img from "../../assets/images/separator.png";
import img1 from "../../assets/images/istockphoto-1307735411-612x612.jpg";
import img2 from "../../assets/images/yunus-tug-fypgaGyv6Bs-unsplash.jpg";
import img3 from "../../assets/images/nguy-n-hi-p-maYeMl3xCrY-unsplash.jpg";

const DonationProcess = () => {
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
      <div className="grid md:grid-cols-3 gap-6 mt-16">
        <div className="card card-compact bg-gray-200 shadow-xl rounded-none">
          <figure>
            <img src={img1} className="h-72" alt="Shoes" />
          </figure>
          <div className="card-body py-6">
            <h2 className="card-title">REGISTRATION</h2>
            <p>
              You need to complete a very simple registration form. Which
              contains all required contact information to enter in the donation
              process.
            </p>
          </div>
        </div>
        <div className="card card-compact bg-gray-200 shadow-xl rounded-none">
          <figure>
            <img src={img2} className="h-72 w-full" alt="Shoes" />
          </figure>
          <div className="card-body py-6">
            <h2 className="card-title">SCREENING</h2>
            <p>
              A drop of blood from your finger will take for simple test to
              ensure that your blood iron levels are proper enough for donation
              process.
            </p>
          </div>
        </div>
        <div className="card card-compact bg-gray-200 shadow-xl rounded-none">
          <figure>
            <img src={img3} className="h-72" alt="Shoes" />
          </figure>
          <div className="card-body py-6">
            <h2 className="card-title">DONATION</h2>
            <p>
              After ensuring and passed screening test successfully you will be
              directed to a donor bed for donation. It will take only 6-10
              minutes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationProcess;
