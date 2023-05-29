import React from 'react'
import { FiX, FiFacebook, FiInstagram, FiTwitter, FiMail, FiChevronDown } from 'react-icons/fi'
import flag from '../../assets/Flag.png'
import Button from '../../components/Buttons/button'

const FlyMenu = ({bg, text}) => {
  return (
    <div className={`w-[508px] h-full bg-black fixed  p-14 z-40 top-0 left-0 ${bg} ${text}`}>
      <div className="relative">
            <button className='absolute right-6 top-6 cursor-pointer z-50'>
                <FiX className={`${text}`} size={28}/>
            </button>

            <div className="flex flex-col relative h-screen w-full">
                <div className='mt-32'>
                    <ul className="flex flex-col gap-6">
                        <li>
                            <a href="#">
                                <span className='font-space_gortesk text-text1 leading-9 font-medium'>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className='font-space_gortesk text-text1 leading-9 font-medium'>Shop</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className='font-space_gortesk text-text1 leading-9 font-medium'>Product</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className='font-space_gortesk text-text1 leading-9 font-medium'>Pages</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className='font-space_gortesk text-text1 leading-9 font-medium'>Shop</span>
                            </a>
                        </li>
                    </ul>

                    <ul className="flex items-center gap-5 mt-8">
                       <li className='w-8 h-8 rounded-full bg-[#F5F5F5] grid place-content-center'>
                          <a href="#" className=''>
                            <FiFacebook />
                          </a>
                       </li>
                       <li className='w-8 h-8 rounded-full bg-[#F5F5F5] grid place-content-center'>
                          <a href="#" className=''>
                            <FiInstagram />
                          </a>
                       </li>
                       <li className='w-8 h-8 rounded-full bg-[#F5F5F5] grid place-content-center'>
                          <a href="#" className=''>
                            <FiTwitter />
                          </a>
                       </li>
                       <li className='w-8 h-8 rounded-full bg-[#F5F5F5] grid place-content-center'>
                          <a href="#" className=''>
                            <FiMail />
                          </a>
                       </li>
                    </ul>
                </div>
                
                <div className="absolute bottom-28 z-20 grid gap-4 w-full">

                     <div className="flex justify-between items-center">
                        <h3>Currency</h3>
                        <div className="flex gap-2 items-center cursor-pointer relative group">
                            <span className='text-text6 font-medium leading-6 '>USD</span>
                            <FiChevronDown />
                        </div>
                     </div>
                     
                     <div className="flex justify-between items-center">
                        <h3>Language</h3>
                        <div className="flex gap-2 items-center cursor-pointer relative group">
                            <img src={flag} alt="" className='w-[18px] h-[14px]'/>
                            <span className='text-text6 font-medium leading-6'>English</span>
                            <FiChevronDown />
                        </div>
                     </div>

                    <div className="mt-6">
                       <Button intent="primary" size="xsmall" roundness="round" children="Sign in" style={{ width: '100%' }}/>
                    </div>
                     
                </div>


            </div>
        </div>
    </div>
  )
}

export default FlyMenu
