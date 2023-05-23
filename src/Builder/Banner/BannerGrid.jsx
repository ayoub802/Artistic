import React from 'react'
import Banner from "../../assets/Paste_image.png"
import Button from '../../components/Buttons/button'
import { BsArrowRight } from "react-icons/bs"


const BannerGridStyle1 = () => {
  return (
    <section>
       <div className="container">
         <ul className="grid grid-cols-3 gap-8">
           <li className="col-span-3 relative overflow-hidden">
              <img src={Banner} alt="" className='w-full h-[494px] object-cover'/>
              <div className="absolute left-[54px] top-[170px] z-50">
                 <h3 className='text-heading4 font-space_gortesk font-medium leading-10 text-black_color_900'>Banner Title</h3>
                 <p className='text-text4 ju font-regular font-Inter leading-8 text-black_color_900 mt-3 mb-6 max-w-[450px]'>Phosfluor escently engage worldwide methodologies with web-enabled process-centric technology.</p>
                 <Button intent="linkblack" size="link_md" roundness="square" children="Get Started" icon={<BsArrowRight />}/>
              </div>
           </li>
           <li className='relative overflow-hidden'>
             <img src={Banner} alt="" className='w-full h-[379px] object-cover'/>
             <div className="absolute left-[32px] bottom-[32px] z-50">
                 <h3 className='text-heading5 font-space_gortesk font-medium leading-10 text-black_color_900 mb-3'>Banner Title</h3>
                 <Button intent="linkblack" size="link_md" roundness="square" children="Shop Now" icon={<BsArrowRight />}/>
              </div>
           </li>
           <li className='relative overflow-hidden'>
             <img src={Banner} alt="" className='w-full h-[379px] object-cover'/>
             <div className="absolute left-[32px] bottom-[32px] z-50">
                 <h3 className='text-heading5 font-space_gortesk font-medium leading-10 text-black_color_900 mb-3'>Banner Title</h3>
                 <Button intent="linkblack" size="link_md" roundness="square" children="Shop Now" icon={<BsArrowRight />}/>
              </div>
           </li>
           <li className='relative overflow-hidden'>
             <img src={Banner} alt="" className='w-full h-[379px] object-cover'/>
             <div className="absolute left-[32px] bottom-[32px] z-50">
                 <h3 className='text-heading5 font-space_gortesk font-medium leading-10 text-black_color_900 mb-3'>Banner Title</h3>
                 <Button intent="linkblack" size="link_md" roundness="square" children="Shop Now" icon={<BsArrowRight />}/>
              </div>
           </li>
          
         </ul>
       </div>
    </section>
  )
}

const BannerGridStyle2 = () => {
  return (
    <section>
       <div className="container">
         <ul className="grid grid-cols-2 gap-8">
           <li className="relative overflow-hidden">
              <img src={Banner} alt="" className='w-full h-[524px] object-cover'/>
              <div className="mt-8 text-center">
                 <h3 className='text-heading5 font-space_gortesk font-medium leading-10 text-black_color_900 mb-5'>Banner Title</h3>
                 <div className="max-w-max mx-auto">
                  <Button intent="linkblack" size="link_md" roundness="square" children="See Collection" icon={<BsArrowRight />}/>
                 </div>
              </div>
           </li>
           <li className='relative overflow-hidden'>
             <img src={Banner} alt="" className='w-full h-[524px] object-cover'/>
             <div className="mt-8 text-center">
                 <h3 className='text-heading5 font-space_gortesk font-medium leading-10 text-black_color_900 mb-5'>Banner Title</h3>
                 <div className="max-w-max mx-auto">
                  <Button intent="linkblack" size="link_md" roundness="square" children="See Collection" icon={<BsArrowRight />}/>
                 </div>
              </div>
           </li>
          
         </ul>
       </div>
    </section>
  )
}

const BannerGridStyle3 = () => {
  return (
    <section>
       <div className="container">
         <ul className="grid grid-cols-3 gap-8">
           <li className="relative overflow-hidden">
              <img src={Banner} alt="" className='w-full h-[524px] object-cover'/>
              <div className="mt-8 text-center">
                 <span className='font-Inter text-text5 leading-7 font-regular text-[#807E7E]'>Tagline</span>
                 <h3 className='text-text3 font-space_gortesk font-medium leading-6 text-black_color_900'>Banner Title</h3>
              </div>
           </li>
           <li className='relative overflow-hidden'>
             <img src={Banner} alt="" className='w-full h-[524px] object-cover'/>
             <div className="mt-8 text-center">
                 <span className='font-Inter text-text5 leading-7 font-regular text-[#807E7E]'>Tagline</span>
                 <h3 className='text-text3 font-space_gortesk font-medium leading-6 text-black_color_900'>Banner Title</h3>
              </div>
           </li>
           <li className='relative overflow-hidden'>
             <img src={Banner} alt="" className='w-full h-[524px] object-cover'/>
             <div className="mt-8 text-center">
                 <span className='font-Inter text-text5 leading-7 font-regular text-[#807E7E]'>Tagline</span>
                 <h3 className='text-text3 font-space_gortesk font-medium leading-6 text-black_color_900'>Banner Title</h3>
              </div>
           </li>
          
         </ul>
       </div>
    </section>
  )
}

const BannerGridStyle4 = () => {
  return (
    <section>
       <div className="container">
         <ul className="grid grid-cols-2 gap-8">
           <li className="row-span-2 relative overflow-hidden">
              <img src={Banner} alt="" className='w-full h-[790px] object-cover'/>
              <div className="absolute top-12 left-12 ">
                 <h3 className='text-heading5 font-space_gortesk font-medium leading-9 text-black_color_900'>Banner Title</h3>
                 <p className='text-text4 ju font-regular font-Inter leading-6 text-[#3E3E59] mt-3 mb-4 max-w-[450px]'>Phosfluor escently engage worldwide methodologies with web-enabled process-centric technology.</p>
                 <Button intent="linkblack" size="link_md" roundness="square" children="Shop Now" icon={<BsArrowRight />}/>
              </div>
           </li>
           <li className='relative overflow-hidden'>
             <img src={Banner} alt="" className='w-full h-[379px] object-cover'/>
             <div className="absolute bottom-8 left-8">
                 <h3 className='text-heading5 font-space_gortesk font-medium leading-8 text-black_color_900 mb-2'>Banner Title</h3>
                 <Button intent="linkblack" size="link_md" roundness="square" children="Shop Now" icon={<BsArrowRight />}/>
              </div>
           </li>
           <li className='relative overflow-hidden'>
             <img src={Banner} alt="" className='w-full h-[379px] object-cover'/>
             <div className="absolute bottom-8 left-8">
                 <h3 className='text-heading5 font-space_gortesk font-medium leading-8 text-black_color_900 mb-2'>Banner Title</h3>
                 <Button intent="linkblack" size="link_md" roundness="square" children="Shop Now" icon={<BsArrowRight />}/>
              </div>
           </li>
          
         </ul>
       </div>
    </section>
  )
}

const BannerGridStyle5 = () => {
   return (
     <section>
        <div className="container">
          <ul className="grid grid-cols-3 gap-8">
            <li className="relative overflow-hidden h-full">
               <img src={Banner} alt="" className='h-[434px] w-full object-cover'/>
               <div className="absolute h-full w-full top-1 flex flex-col justify-between py-8 px-8">
                  <div>
                   <h3 className='text-heading5 font-space_gortesk font-medium leading-9 text-black_color_900'>Banner Title</h3>
                   <p className='text-text5 ju font-regular font-Inter leading-5 text-[#3E3E59] mt-2 mb-4 max-w-[450px]'>For only $59.99</p>
                  </div>
                  <div className='max-w-fit'>

                  <Button intent="linkblack" size="link_md" roundness="square" children="Shop Now" icon={<BsArrowRight />}/>
                  </div>
               </div>
            </li>
            <li className='relative overflow-hidden h-full'>
              <img src={Banner} alt="" className='h-[434px] w-full object-cover'/>
              <div className="absolute h-full w-full top-1 flex flex-col justify-between py-8 px-8">
                 <div>
                   <h3 className='text-heading5 font-space_gortesk font-medium leading-9 text-black_color_900'>Banner Title</h3>
                   <p className='text-text5 ju font-regular font-Inter leading-5 text-[#3E3E59] mt-2 mb-4 max-w-[450px]'>For only $59.99</p>
                  </div>
                  <div className='max-w-fit'>

                  <Button intent="linkblack" size="link_md" roundness="square" children="Shop Now" icon={<BsArrowRight />}/>
                  </div>
               </div>
            </li>
            <li className='relative overflow-hidden h-full'>
              <img src={Banner} alt="" className='h-[434px] w-full object-cover'/>
              <div className="absolute h-full max-w-max top-1 flex flex-col justify-between py-8 px-8">
                   <div>
                     <h3 className='text-heading5 font-space_gortesk font-medium leading-9 text-black_color_900'>Banner Title</h3>
                     <p className='text-text5 ju font-regular font-Inter leading-5 text-[#3E3E59] mt-2 mb-4 max-w-[450px]'>For only $59.99</p>
                  </div>
                  <div className='max-w-fit'>

                  <Button intent="linkblack" size="link_md" roundness="square" children="Shop Now" icon={<BsArrowRight />}/>
                  </div>
               </div>
            </li>
           
          </ul>
        </div>
     </section>
   )
 }

const BannerGridStyle6 = () => {
  return (
    <section>
       <div className="container">
         <ul className="grid grid-cols-2 gap-8">
           <li className="col-span-3 relative overflow-hidden">
              <img src={Banner} alt="" className='w-full h-[494px] object-cover'/>
              <div className="absolute left-[54px] top-[170px] z-50">
                 <h3 className='text-heading4 font-space_gortesk font-medium leading-10 text-black_color_900'>Banner Title</h3>
                 <p className='text-text4 ju font-regular font-Inter leading-8 text-black_color_900 mt-3 mb-6 max-w-[450px]'>Phosfluor escently engage worldwide methodologies with web-enabled process-centric technology.</p>
                 <Button intent="linkblack" size="link_md" roundness="square" children="Get Started" icon={<BsArrowRight />}/>
              </div>
           </li>
           <li className='relative overflow-hidden'>
             <img src={Banner} alt="" className='w-full h-[379px] object-cover'/>
             <div className="absolute left-[32px] bottom-[32px] z-50">
                 <h3 className='text-heading5 font-space_gortesk font-medium leading-10 text-black_color_900 mb-3'>Banner Title</h3>
                 <Button intent="linkblack" size="link_md" roundness="square" children="Shop Now" icon={<BsArrowRight />}/>
              </div>
           </li>
           <li className='relative overflow-hidden'>
             <img src={Banner} alt="" className='w-full h-[379px] object-cover'/>
             <div className="absolute left-[32px] bottom-[32px] z-50">
                 <h3 className='text-heading5 font-space_gortesk font-medium leading-10 text-black_color_900 mb-3'>Banner Title</h3>
                 <Button intent="linkblack" size="link_md" roundness="square" children="Shop Now" icon={<BsArrowRight />}/>
              </div>
           </li>
          
         </ul>
       </div>
    </section>
  )
}

export { BannerGridStyle1, BannerGridStyle2, BannerGridStyle3, BannerGridStyle4, BannerGridStyle5, BannerGridStyle6}
