import React from 'react';

const About = () => {
    return (
        <div className='bg-[#FE3C47] py-24 mb-12'>
            <div className='text-center text-white'>
                <div className='space-y-4'>
                <h1 className='text-4xl sm:2xl'>WE ARE HELPING PEOPLE FROM 40 YEARS</h1>
                <h4 className='text-xl sm:text-base'>You can give blood at any of our blood donation venues all over the world. We have total sixty <br /> thousands donor centers and visit thousands of other venues on various occasions.</h4>
                </div>
                <div className='mt-16'>
                <button className=" btn btn-outline bg-base-100 hover:bg-[#d3010d] rounded-none border-gray-200 hover:border-gray-300 px-12 transition delay-150 duration-300 ease-in-out">Become Volunteer</button>
                </div>
            </div>
        </div>
    );
};

export default About;