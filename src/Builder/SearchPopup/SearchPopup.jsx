import React from 'react'
import { FiX, FiFacebook, FiInstagram, FiTwitter, FiMail, FiChevronDown, FiSearch } from 'react-icons/fi'
import Logo from '../../assets/Branding.png'
import ProductBanner from '../../assets/Paste_image.png'
import Button from '../../components/Buttons/button'

const SearchPopup = () => {
  return (
    <div className='h-screen w-full bg-white p-8 fixed top-0 left-0 z-50 overflow-auto'>
        <div className="container !px-0 md:px-8">
            <div className="flex item-center justify-between">
               <img src={Logo} alt="" />
                <button className='cursor-pointer'>
                    <FiX size={28}/>
                </button>
            </div>

            <div className='max-w-md mx-auto mt-9'>
                <form action="" className='mt-5 border border-1 border-[#CBCBCB] rounded-md px-4 py-3'>
                    <div className="flex items-center gap-2">
                        <input type="text" placeholder='Search' className='w-full bg-transparent outline-none text-black_color_900'/>
                        <FiSearch />
                    </div>
               </form>

               <div className="flex gap-3 items-center mt-3 mx-0 md:mx-6 text-center">
                   <h3 className='text-text6 font-Inter font-regular text-[#807E7E] leading-6'>Quick Search :</h3>
                   <h3 className='text-text6 font-Inter font-regular text-black_color_900 leading-6'>Jumpsuits</h3>
                   <h3 className='text-text6 font-Inter font-regular text-black_color_900 leading-6'>Pants</h3>
                   <h3 className='text-text6 font-Inter font-regular text-black_color_900 leading-6'>Streetwear</h3>
                   <h3 className='text-text6 font-Inter font-regular text-black_color_900 leading-6'>Summer</h3>
               </div>
            </div> 

            <div className="mt-6">
                <h2 className='text-center text-black_color_900 text-text2 leading-8 font-Inter font-regular'>Search results for “Shoe”</h2>

                <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-x-8 gap-y-14 mt-10">
                     <div>
                        <div className="'w-80 h-[413px]">
                           <img src={ProductBanner} alt="" className='w-full h-full object-cover'/>
                        </div>
                        <div className="mt-3">
                           <h4 className='font-space_gortesk text-text5 font-medium leading-7 tracking-tighter'>
                             Product Name
                           </h4>
                           <div className="flex items-center gap-2">
                              <span className='text-black_color_900 text-text6 leading-5 font-Inter font-semibold'>$56.00</span>
                              <span className='text-[#A7A7A7] text-text6 leading-5 font-Inter font-regular line-through'>$130.00</span>
                           </div>
                        </div>
                     </div>
                     <div>
                        <div className="'w-80 h-[413px]">
                           <img src={ProductBanner} alt="" className='w-full h-full object-cover'/>
                        </div>
                                                <div className="mt-3">
                           <h4 className='font-space_gortesk text-text5 font-medium leading-7 tracking-tighter'>
                             Product Name
                           </h4>
                                                      <div className="flex items-center gap-2">
                              <span className='text-black_color_900 text-text6 leading-5 font-Inter font-semibold'>$56.00</span>
                              <span className='text-[#A7A7A7] text-text6 leading-5 font-Inter font-regular line-through'>$130.00</span>
                           </div>
                        </div>
                     </div>
                     <div>
                        <div className="'w-80 h-[413px]">
                           <img src={ProductBanner} alt="" className='w-full h-full object-cover'/>
                        </div>
                                                <div className="mt-3">
                           <h4 className='font-space_gortesk text-text5 font-medium leading-7 tracking-tighter'>
                             Product Name
                           </h4>
                                                      <div className="flex items-center gap-2">
                              <span className='text-black_color_900 text-text6 leading-5 font-Inter font-semibold'>$56.00</span>
                              <span className='text-[#A7A7A7] text-text6 leading-5 font-Inter font-regular line-through'>$130.00</span>
                           </div>
                        </div>
                     </div>
                     <div>
                        <div className="'w-80 h-[413px]">
                           <img src={ProductBanner} alt="" className='w-full h-full object-cover'/>
                        </div>
                                                <div className="mt-3">
                           <h4 className='font-space_gortesk text-text5 font-medium leading-7 tracking-tighter'>
                             Product Name
                           </h4>
                                                      <div className="flex items-center gap-2">
                              <span className='text-black_color_900 text-text6 leading-5 font-Inter font-semibold'>$56.00</span>
                              <span className='text-[#A7A7A7] text-text6 leading-5 font-Inter font-regular line-through'>$130.00</span>
                           </div>
                        </div>
                     </div>
                     <div>
                        <div className="'w-80 h-[413px]">
                           <img src={ProductBanner} alt="" className='w-full h-full object-cover'/>
                        </div>
                                                <div className="mt-3">
                           <h4 className='font-space_gortesk text-text5 font-medium leading-7 tracking-tighter'>
                             Product Name
                           </h4>
                                                      <div className="flex items-center gap-2">
                              <span className='text-black_color_900 text-text6 leading-5 font-Inter font-semibold'>$56.00</span>
                              <span className='text-[#A7A7A7] text-text6 leading-5 font-Inter font-regular line-through'>$130.00</span>
                           </div>
                        </div>
                     </div>
                     <div>
                        <div className="'w-80 h-[413px]">
                           <img src={ProductBanner} alt="" className='w-full h-full object-cover'/>
                        </div>
                                                <div className="mt-3">
                           <h4 className='font-space_gortesk text-text5 font-medium leading-7 tracking-tighter'>
                             Product Name
                           </h4>
                                                      <div className="flex items-center gap-2">
                              <span className='text-black_color_900 text-text6 leading-5 font-Inter font-semibold'>$56.00</span>
                              <span className='text-[#A7A7A7] text-text6 leading-5 font-Inter font-regular line-through'>$130.00</span>
                           </div>
                        </div>
                     </div>
                     <div>
                        <div className="'w-80 h-[413px]">
                           <img src={ProductBanner} alt="" className='w-full h-full object-cover'/>
                        </div>
                                                <div className="mt-3">
                           <h4 className='font-space_gortesk text-text5 font-medium leading-7 tracking-tighter'>
                             Product Name
                           </h4>
                                                      <div className="flex items-center gap-2">
                              <span className='text-black_color_900 text-text6 leading-5 font-Inter font-semibold'>$56.00</span>
                              <span className='text-[#A7A7A7] text-text6 leading-5 font-Inter font-regular line-through'>$130.00</span>
                           </div>
                        </div>
                     </div>
                     <div>
                        <div className="'w-80 h-[413px]">
                           <img src={ProductBanner} alt="" className='w-full h-full object-cover'/>
                        </div>
                                                <div className="mt-3">
                           <h4 className='font-space_gortesk text-text5 font-medium leading-7 tracking-tighter'>
                             Product Name
                           </h4>
                                                      <div className="flex items-center gap-2">
                              <span className='text-black_color_900 text-text6 leading-5 font-Inter font-semibold'>$56.00</span>
                              <span className='text-[#A7A7A7] text-text6 leading-5 font-Inter font-regular line-through'>$130.00</span>
                           </div>
                        </div>
                     </div>
                </div> 

                <div className="max-w-max mx-auto mt-20">
                 <Button intent="primary" size="medium" roundness="round" children="See all results" icon=''/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchPopup
