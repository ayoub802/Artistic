import React from 'react'
import Germany from '../../assets/Germany.png'
import Italy from '../../assets/Italy.png'
import Egypt from '../../assets/Egypt.png'
import Japon from '../../assets/Japon.png'
import America from "../../assets/Flag.png"
import { FiChevronRight } from "react-icons/fi"

const DropdownCurrency = () => {
  return (
    <ul className="bg-black_color_900 w-[115px] transition-all duration-150 flex flex-col absolute z-40 top-9 invisible opacity-0 group-hover:visible group-hover:opacity-100">
        <li className='px-4 py-2 w-full transition-all duration-150 hover:bg-black_color cursor-pointer'>
          <a href="#" className='uppercase text-white leading-6 text-text6'>
              USD
          </a>
        </li>
        <li className='px-4 py-2 w-full transition-all duration-150 hover:bg-black_color cursor-pointer'>
          <a href="#" className='uppercase text-white leading-6 text-text6'>
              GBP
          </a>
        </li>
        <li className='px-4 py-2 w-full transition-all duration-150 hover:bg-black_color cursor-pointer'>
          <a href="#" className='uppercase text-white leading-6 text-text6'>
              EUR
          </a>
        </li>
        <li className='px-4 py-2 w-full transition-all duration-150 hover:bg-black_color cursor-pointer'>
          <a href="#" className='uppercase text-white leading-6 text-text6'>
                JPY
          </a>
        </li>    
    </ul>
  )
}

const DropdownLanguage = () => {
  return (
    <ul className="bg-black_color_900 w-[115px] transition-all duration-150 flex flex-col absolute z-40 top-9 invisible opacity-0 group-hover:visible group-hover:opacity-100">
        <li className='px-4 py-2 w-full transition-all duration-150 hover:bg-black_color cursor-pointer'>
          <a href="#" className=' text-white leading-6 text-text6 flex items-center gap-2'>
            <img src={Germany} alt="" />
            <span>Deutsch</span>
          </a>
        </li>
        <li className='px-4 py-2 w-full transition-all duration-150 hover:bg-black_color cursor-pointer'>
          <a href="#" className=' text-white leading-6 text-text6 flex items-center gap-2'>
            <img src={Italy} alt="" />
            <span>Italiano</span>
          </a>
        </li>
        <li className='px-4 py-2 w-full transition-all duration-150 hover:bg-black_color cursor-pointer'>
          <a href="#" className=' text-white leading-6 text-text6 flex items-center gap-2'>
          <img src={Egypt} alt="" />
            <span>العربية</span>
          </a>
        </li>
        <li className='px-4 py-2 w-full transition-all duration-150 hover:bg-black_color cursor-pointer'>
          <a href="#" className=' text-white leading-6 text-text6 flex items-center gap-2'>
             <img src={Japon} alt="" />
            <span>日本語</span>
          </a>
        </li>    
    </ul>
  )
}

const DropdownContry = () => {
  return (
    <ul className="bg-black_color_900 w-[115px] transition-all duration-150 flex flex-col absolute z-40 top-9 invisible opacity-0 group-hover:visible group-hover:opacity-100">
        <li className='px-4 py-2 w-full transition-all duration-150 hover:bg-black_color cursor-pointer'>
          <a href="#" className=' text-white leading-6 text-text6 flex items-center gap-2'>
            <img src={America} alt="" />
            <span>+44</span>
          </a>
        </li>
        <li className='px-4 py-2 w-full transition-all duration-150 hover:bg-black_color cursor-pointer'>
          <a href="#" className=' text-white leading-6 text-text6 flex items-center gap-2'>
            <img src={Germany} alt="" />
            <span>+52</span>
          </a>
        </li>
        <li className='px-4 py-2 w-full transition-all duration-150 hover:bg-black_color cursor-pointer'>
          <a href="#" className=' text-white leading-6 text-text6 flex items-center gap-2'>
            <img src={Italy} alt="" />
            <span>+35</span>
          </a>
        </li>
        <li className='px-4 py-2 w-full transition-all duration-150 hover:bg-black_color cursor-pointer'>
          <a href="#" className=' text-white leading-6 text-text6 flex items-center gap-2'>
          <img src={Egypt} alt="" />
            <span>+12</span>
          </a>
        </li>
        <li className='px-4 py-2 w-full transition-all duration-150 hover:bg-black_color cursor-pointer'>
          <a href="#" className=' text-white leading-6 text-text6 flex items-center gap-2'>
             <img src={Japon} alt="" />
            <span>+17</span>
          </a>
        </li>    
    </ul>
  )
}

const DropdownSimple = () => {
  return(
     <ul className="bg-black_color_900 w-[228px] transition-all duration-150 flex flex-col absolute z-40 top-9  group-hover:opacity-100">
        <li className='px-4 py-2 w-full transition-all duration-150 hover:bg-black_color cursor-pointer'>
          <a href="#" className=' text-white leading-6 text-text6 flex items-center gap-2'>
            <span>Product v1</span>
          </a>
        </li>
        <li className='px-4 py-2 w-full transition-all duration-150 hover:bg-black_color cursor-pointer'>
          <a href="#" className=' text-white leading-6 text-text6 flex items-center justify-between gap-2'>
            <span>Product v2</span>
            <FiChevronRight />
          </a>
        </li>
        <li className='px-4 py-2 w-full transition-all duration-150 hover:bg-black_color cursor-pointer'>
          <a href="#" className=' text-white leading-6 text-text6 flex items-center justify-between gap-2'>  
            <span>Product v3</span>
            <FiChevronRight />
          </a>
        </li>
        <li className='px-4 py-2 w-full transition-all duration-150 hover:bg-black_color cursor-pointer'>
          <a href="#" className=' text-white leading-6 text-text6 flex items-center gap-2'>
            <span>Product v4</span>
          </a>
        </li>
        <li className='px-4 py-2 w-full transition-all duration-150 hover:bg-black_color cursor-pointer'>
          <a href="#" className=' text-white leading-6 text-text6 flex items-center gap-2'>   
            <span>Product v5</span>
          </a>
        </li>    
    </ul>
  )
}

const DropdownSearch = () => {
  return(
     <ul className="bg-black_color_900 w-[228px] transition-all duration-150 flex flex-col absolute z-40 top-9  group-hover:opacity-100">
        <li className='px-4 py-2 w-full transition-all duration-150 hover:bg-black_color cursor-pointer'>
          <a href="#" className=' text-white leading-6 text-text6 flex items-center gap-2'>
            <span>Product v1</span>
          </a>
        </li>
        <li className='px-4 py-2 w-full transition-all duration-150 hover:bg-black_color cursor-pointer'>
          <a href="#" className=' text-white leading-6 text-text6 flex items-center justify-between gap-2'>
            <span>Product v2</span>
            <FiChevronRight />
          </a>
        </li>
        <li className='px-4 py-2 w-full transition-all duration-150 hover:bg-black_color cursor-pointer'>
          <a href="#" className=' text-white leading-6 text-text6 flex items-center justify-between gap-2'>  
            <span>Product v3</span>
            <FiChevronRight />
          </a>
        </li>
        <li className='px-4 py-2 w-full transition-all duration-150 hover:bg-black_color cursor-pointer'>
          <a href="#" className=' text-white leading-6 text-text6 flex items-center gap-2'>
            <span>Product v4</span>
          </a>
        </li>
        <li className='px-4 py-2 w-full transition-all duration-150 hover:bg-black_color cursor-pointer'>
          <a href="#" className=' text-white leading-6 text-text6 flex items-center gap-2'>   
            <span>Product v5</span>
          </a>
        </li>    
    </ul>
  )
}

export {
  DropdownCurrency,
  DropdownLanguage,
  DropdownSimple
} 
