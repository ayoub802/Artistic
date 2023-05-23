import React from 'react'
import phone from "../../assets/phone.png"
import flag from '../../assets/Flag.png'
import { BiChevronDown } from "react-icons/bi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Discount from '../../assets/discount.png'
import Button from '../../components/Buttons/button';
import { DropdownCurrency, DropdownLanguage} from '../Dropdown/Dropdown';


const TopBarStyle1 = () => {
  return (
    <div className='w-full py-2.5 bg-black_color_900 text-white font-space_gortesk'>
       <div className="container">
        <div className='flex justify-between items-center '>
            <h5 className="flex gap-2 items-center">
                <img src={phone} alt="" />
                <span className='text-text6 font-medium leading-6'>Support +11 456 3734</span>
            </h5>

            <div className="flex gap-6 items-center">
                
                <div className="flex gap-2 items-center cursor-pointer">
                    <img src={flag} alt="" className='w-[18px] h-[14px]'/>
                    <span className='text-text6 font-medium leading-6'>English</span>
                    <BiChevronDown />

                </div>

                <div className="flex gap-2 items-center cursor-pointer">
                    <span className='text-text6 font-medium leading-6'>USD</span>
                    <BiChevronDown />
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}


const TopBarStyle2 = () => {
  return (
    <div className='w-full py-2.5 bg-black_color_900 text-white font-space_gortesk'>
       <div className="container">
        <div className='flex justify-between items-center '>
            <ul className="flex gap-2 items-center">
                <li>
                   <a href="#" className='w-6 h-6 grid place-content-center rounded-full text-center bg-black_color text-white'>
                      <FaFacebookF size={10}/>
                   </a>
                </li>
                <li>
                   <a href="#" className='w-6 h-6 grid place-content-center rounded-full text-center bg-black_color text-white'>
                      <FaInstagram size={10}/>
                   </a>
                </li>
                <li>
                   <a href="#" className='w-6 h-6 grid place-content-center rounded-full text-center bg-black_color text-white'>
                      <FaTwitter size={10}/>
                   </a>
                </li>
            </ul>

            <h5 className='flex items-center text-text6 font-medium leading-6'>
               <span className='flex items-center gap-1'>
                  <img src={Discount} alt="" />
                  70% discount storewide 
               </span>

               <Button intent="linkWhite" size="link" roundness="square" children="Shop Now"/>
            </h5>

            <div className="flex gap-6 items-center">
                
                <div className="flex gap-2 items-center cursor-pointer relative group">
                    <img src={flag} alt="" className='w-[18px] h-[14px]'/>
                    <span className='text-text6 font-medium leading-6'>English</span>
                    <BiChevronDown />

                    <DropdownLanguage />
                </div>

                <div className="flex gap-2 items-center cursor-pointer relative group">
                    <span className='text-text6 font-medium leading-6 '>USD</span>
                    <BiChevronDown />

                    <DropdownCurrency />
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}


export { TopBarStyle1, TopBarStyle2 };