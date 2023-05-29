import React from 'react'
import { FiX, FiFacebook, FiInstagram, FiTwitter, FiMail, FiChevronDown, FiSearch } from 'react-icons/fi'
import Button from '../../components/Buttons/button'
import Logo from '../../assets/Branding.png'
import Bag from '../../assets/Bag.png'
import Hearth from '../../assets/Hearth.png'


const FlyMenuMobile = () => {
  return (
    <div className='w-[333px] h-full bg-white fixed  p-4 z-40 top-0 '>
      <div className="relative w-full">
           
           <div className="flex items-center justify-between w-full mt-3">
                 <img src={Logo} alt="" />
                <button className='cursor-pointer'>
                    <FiX size={28}/>
                </button>
           </div>

           <form action="" className='mt-5 border border-1 border-[#CBCBCB] rounded-md px-4 py-3'>
             <div className="flex items-center gap-2">
                 <FiSearch />

                 <input type="text" placeholder='Search' className='bg-transparent outline-none text-black_color_900'/>
             </div>
           </form>

            <div className="flex flex-col relative h-screen w-full text-black_color_900">
                <div className='mt-4'>
                    <ul className="flex flex-col gap-6">
                        <li className='border-b border-[#EAEAEA] py-3'>
                            <a href="#" className='flex items-end justify-between'>
                                <span className='font-space_gortesk text-text6 leading-6 text-black_color_900 font-medium'>Home</span>
                                <FiChevronDown />
                            </a>
                        </li>
                        <li className='border-b border-[#EAEAEA] py-3'>
                            <a href="#" className='flex items-end justify-between'>
                                <span className='font-space_gortesk text-text6 leading-6 text-black_color_900 font-medium'>Shop</span>
                                <FiChevronDown />
                            </a>
                        </li>
                        <li className='border-b border-[#EAEAEA] py-3'>
                            <a href="#" className='flex items-end justify-between'>
                                <span className='font-space_gortesk text-text6 leading-6 text-black_color_900 font-medium'>Product</span>
                                <FiChevronDown />
                            </a>
                        </li>
                        <li className='border-b border-[#EAEAEA] py-3'>
                            <a href="#" className='flex items-end justify-between'>
                                <span className='font-space_gortesk text-text6 leading-6 text-black_color_900 font-medium'>Pages</span>
                                <FiChevronDown />
                            </a>
                        </li>
                    </ul>

                </div>
                
                <div className="absolute bottom-44 z-20 grid gap-4 w-full">

                    <div className="border-b border-[#EAEAEA] grid gap-4 pb-6">
                        <div className="flex justify-between items-center">
                            <h3 className='font-space_gortesk font-medium text-text6 leading-6 text-[#807E7E]'>Cart</h3>
                            <div className="flex gap-2 items-center cursor-pointer relative group">
                                <img src={Bag} alt="" />
                                <span className='w-5 h-5 rounded-full text-center bg-black_color_900 text-text7 font-medium font-inter text-white'>2</span>
                            </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                            <h3 className='font-space_gortesk font-medium text-text6 leading-6 text-[#807E7E]'>Wishlist</h3>
                            <div className="flex gap-2 items-center cursor-pointer relative group">
                                <img src={Hearth} alt=""/>
                                <span className='w-5 h-5 rounded-full text-center bg-black_color_900 text-text7 font-medium font-inter text-white'>6</span>
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-[#EAEAEA] grid gap-4 mt-4 pb-6">
                        <div className="flex justify-between items-center">
                            <h3 className='font-space_gortesk font-medium text-text6 leading-6 text-[#807E7E]'>Currency</h3>
                            <div className="flex gap-2 items-center cursor-pointer relative group">
                                <span className='text-text6 font-medium leading-6 '>USD</span>
                                <FiChevronDown />
                            </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                            <h3 className='font-space_gortesk font-medium text-text6 leading-6 text-[#807E7E]'>Language</h3>
                            <div className="flex gap-2 items-center cursor-pointer relative group">
                                <span className='text-text6 font-medium leading-6'>English</span>
                                <FiChevronDown />
                            </div>
                        </div>
                    </div>

                    <div className="mt-3">
                       <Button intent="primary" size="xsmall" roundness="round" children="Sign in" style={{ width: '100%' }}/>
                    </div>

                    <ul className="flex items-center gap-5 mt-4">
                       <li className='w-8 h-8 rounded-full bg-[#F5F5F5] grid place-content-center'>
                          <a href="#" className='text-[#000]'>
                            <FiFacebook />
                          </a>
                       </li>
                       <li className='w-8 h-8 rounded-full bg-[#F5F5F5] grid place-content-center'>
                          <a href="#" className='text-[#000]'>
                            <FiInstagram />
                          </a>
                       </li>
                       <li className='w-8 h-8 rounded-full bg-[#F5F5F5] grid place-content-center'>
                          <a href="#" className='text-[#000]'>
                            <FiTwitter />
                          </a>
                       </li>
                       <li className='w-8 h-8 rounded-full bg-[#F5F5F5] grid place-content-center'>
                          <a href="#" className='text-[#000]'>
                            <FiMail />
                          </a>
                       </li>
                    </ul>
                     
                </div>


            </div>

        </div>
    </div>
  )
}

export default FlyMenuMobile