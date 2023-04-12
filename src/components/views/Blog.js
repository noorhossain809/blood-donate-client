import React from 'react';
import img from '../../assets/images/separator.png'
import img1 from '../../assets/images/gallery_1.jpg'
import img2 from '../../assets/images/blog_thumb_2.jpg'
import img3 from '../../assets/images/gallery_7.jpg'
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsChatDots } from 'react-icons/bs';

const Blog = () => {
    return (
        <div className='container mx-auto px-12 py-10 pb-16'>
        <div className='items-center text-center'>
           <h1 className="mb-5 text-4xl font-medium tracking-wide mt-16">RECENT BLOG</h1>
           <img className='mx-auto' src={img} alt='' />
           <h4 className="mb-5 text-xl font-normal tracking-wide ">Latest news and statements regarding giving blood, blood processing and supply.</h4>
       </div>
           <div className='grid md:grid-cols-3 gap-6 mt-16'>
               <div className="card card-compact bg-gray-200 shadow-xl rounded-none">
                       <figure><img src={img1} className='h-72' alt="Shoes" /></figure>
                   <div className="card-body space-y-4">
                       <h2 className="card-title text-lg text-[#FE3C47] subpixel-antialiased font-sans">BLOOD CONNECTS US ALL IN A SOUL</h2>
                       <div className="card-actions flex">
    <div className='flex gap-1'>
      <AiOutlineClockCircle className='w-4 h-4' />
      <p className='font-semibold'> April 4, 2017</p>
   </div>
    
     <div className='flex border-l-2 border-gray-500 px-3 gap-1'>
      <BsChatDots className='w-4 h-4' />
     <p className='font-semibold'>10 Comments</p>
     </div>
    </div>
        <p className='text-base tracking-wider leading-relaxed text-gray-700'>In many countries, demand exceeds supply, and blood services face the challenge of making blood available for patient.</p>
                   </div>
               </div>
               <div className="card card-compact bg-gray-200 shadow-xl rounded-none">
                       <figure><img src={img2} className='h-72 w-full' alt="Shoes" /></figure>
                       <div className="card-body space-y-4">
                       <h2 className="card-title text-lg text-[#FE3C47] subpixel-antialiased font-sans">GIVE BLOOD AND SAVE THREE LIVES</h2>
                       <div className="card-actions flex">
    <div className='flex gap-1'>
      <AiOutlineClockCircle className='w-4 h-4' />
      <p className='font-semibold'> April 4, 2017</p>
   </div>
    
     <div className='flex border-l-2 border-gray-500 px-3 gap-1'>
      <BsChatDots className='w-4 h-4' />
     <p className='font-semibold'>10 Comments</p>
     </div>
    </div>
        <p className='text-base tracking-wider leading-relaxed text-gray-700'>To save a life, you don’t need to use muscle. By donating just one unit of blood, you can save three lives or even several lives.</p>
                   </div>
               </div>
               <div className="card card-compact bg-gray-200 shadow-xl rounded-none">
                       <figure><img src={img3} className='h-72' alt="Shoes" /></figure>
                       <div className="card-body space-y-4">
                       <h2 className="card-title text-lg text-[#FE3C47] subpixel-antialiased font-sans">WHY SHOULD I DONATE BLOOD ?</h2>
                       <div className="card-actions flex">
    <div className='flex gap-1'>
      <AiOutlineClockCircle className='w-4 h-4' />
      <p className='font-semibold'> April 4, 2017</p>
   </div>
    
     <div className='flex border-l-2 border-gray-500 px-3 gap-1'>
      <BsChatDots className='w-4 h-4' />
     <p className='font-semibold'>10 Comments</p>
     </div>
    </div>
        <p className='text-base tracking-wider leading-relaxed text-gray-700'>Blood is the most precious gift that anyone can give to another person.Donating blood not only saves the life also donors.</p>
                   </div>
               </div>
           </div>
          <div className='flex justify-center mt-12'>
          <button className=" btn btn-outline bg-base-100 hover:bg-[#FE3C47] rounded-none border-[#FE3C47] text-[#FE3C47] hover:border-gray-300 px-6">- Load More Blog -</button>
          </div>
       </div>
    );
};

export default Blog;