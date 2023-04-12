import React, { useReducer } from "react";
import "./Banner.css";

const Banner = () => {
  const initialState = 0;

  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + 1;
    } else if (action.type === "DECREMENT") {
      return state - 1;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="hero min-h-screen hero_section">
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">রক্ত দিন জীবন বাঁচান</h1>
          <p className="mb-5 text-xl">
            Blood is the most precious gift that anyone can give to another
            person.
            <br />
            Donating blood not only saves the life also save donor's lives.
          </p>
          <button className="btn bg-[#FE3C47] border-none hover:bg-[#d3010d] rounded-none">
            Get Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
