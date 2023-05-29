import React, { useState } from 'react'
import Logo from '../../assets/Branding.png'
import Search from '../../assets/Search.png'
import User from '../../assets/User.png'
import Bag from '../../assets/Bag.png'
import { BsX } from 'react-icons/bs'
import { FiChevronDown } from 'react-icons/fi'
import MenuBar from '../../assets/Menu.png'
// import FlyMenu from '../FlyMenu/FlyMenu'



const HeaderStyle1 = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <header className='relative top-0 left-0 w-full py-5 z-30 bg-white'>
        <div className="container">
             <div className="flex justify-between items-center">
              
                <div>
                    <img src={Logo} alt="" />
                 </div>

                 <div className="hidden md:block font-space_gortesk">
                    <ul className="flex gap-10">
                        <li>
                            <a href="#" className='text-black_color_900 text-text6 leading-6 font-medium flex items-center gap-1'>
                              <span>Home</span>
                              <FiChevronDown />
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-black_color_900 text-text6 leading-6 font-medium flex items-center gap-1'>
                              <span>Shop</span>
                              <FiChevronDown />
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-black_color_900 text-text6 leading-6 font-medium flex items-center gap-1'>
                              <span>Product</span>
                              <FiChevronDown />
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-black_color_900 text-text6 leading-6 font-medium flex items-center gap-1'>
                              <span>Pages</span>
                              <FiChevronDown />
                            </a>
                        </li>
                    </ul>
                 </div>

                 <div className="flex gap-5 md:gap-7 items-center">
                    <button className='hidden md:block'>
                        <img src={Search} alt="" className='mt-1'/>
                    </button>
                    <button className='hidden md:block'>
                        <img src={User} alt=""/>
                    </button>
                    <button className='flex items-center gap-1' onClick={() => setToggle(!toggle)}>
                        <img src={Bag} alt=""/>
                        <span className='w-5 h-5 rounded-full text-center bg-black_color_900 text-text7 font-medium font-inter text-white'>2</span>
                    </button>
                    <button className='flex items-center gap-1 md:hidden' onClick={() => setToggle(!toggle)}>
                        <img src={MenuBar} alt=""/>
                    </button>
                 </div>
             </div>

        </div>

        
    </header>
  )
}
const HeaderStyle2 = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <header className='relative top-0 left-0 w-full py-5 z-30 bg-white'>
        <div className="container">
             <div className="flex justify-between items-center">
               <div className='flex items-center gap-4 md:hidden'>
                    <button >
                      <img src={MenuBar} alt="" />
                    </button>
                    <button className=''>
                        <img src={Search} alt="" className='mt-1'/>
                    </button>
                 </div>

                 <div className="hidden md:block font-space_gortesk">
                    <ul className="flex gap-10">
                        <li>
                            <a href="#" className='text-black_color_900 text-text6 leading-6 font-medium flex items-center gap-1'>
                              <span>Home</span>
                              <FiChevronDown />
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-black_color_900 text-text6 leading-6 font-medium flex items-center gap-1'>
                              <span>Shop</span>
                              <FiChevronDown />
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-black_color_900 text-text6 leading-6 font-medium flex items-center gap-1'>
                              <span>Product</span>
                              <FiChevronDown />
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-black_color_900 text-text6 leading-6 font-medium flex items-center gap-1'>
                              <span>Pages</span>
                              <FiChevronDown />
                            </a>
                        </li>
                    </ul>
                 </div>

                 <div>
                    <img src={Logo} alt="" />
                 </div>

                 <div className="flex gap-7 items-center">
                    <button className='hidden md:block'>
                        <img src={Search} alt="" className='mt-1'/>
                    </button>
                    <button className='hidden md:block'>
                        <img src={User} alt=""/>
                    </button>
                    <button className='flex items-center gap-1' onClick={() => setToggle(!toggle)}>
                        <img src={Bag} alt=""/>
                        <span className='w-5 h-5 rounded-full text-center bg-black_color_900 text-text7 font-medium font-inter text-white'>2</span>
                    </button>
                 </div>
             </div>

             <div className={`${toggle ? 'visible translate-x-0' : 'invisible  translate-x-28'} right-0 h-full w-[450px] bg-black_color_900 py-8 px-10 fixed top-0 transition-all delay-200 duration-500 overflow-hidden`}>
                 <div className="flex items-center justify-between text-white">
                    <h2 className='uppercase text-text1 font-space_gortesk font-medium'>cart</h2>
                    <BsX size={30} className='cursor-pointer' onClick={() => setToggle(false)}/>
                 </div>
             </div>
        </div>

        
    </header>
  )
}
const HeaderStyle3 = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <header className='relative top-0 left-0 w-full py-5 z-30 bg-white'>
        <div className="container">
             <div className="flex justify-between items-center">
              
                <div className='flex items-center gap-4'>
                    <button className='md:hidden block'>
                      <img src={MenuBar} alt="" />
                    </button>
                    <img src={Logo} alt="" />
                 </div>

                 <div className="hidden md:block font-space_gortesk mr-auto pl-9">
                    <ul className="flex gap-10">
                        <li>
                            <a href="#" className='text-black_color_900 text-text6 leading-6 font-medium flex items-center gap-1'>
                              <span>Home</span>
                              <FiChevronDown />
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-black_color_900 text-text6 leading-6 font-medium flex items-center gap-1'>
                              <span>Shop</span>
                              <FiChevronDown />
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-black_color_900 text-text6 leading-6 font-medium flex items-center gap-1'>
                              <span>Product</span>
                              <FiChevronDown />
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-black_color_900 text-text6 leading-6 font-medium flex items-center gap-1'>
                              <span>Pages</span>
                              <FiChevronDown />
                            </a>
                        </li>
                    </ul>
                 </div>

                 <div className="flex gap-5 md:gap-7 items-center">
                    <button className=''>
                        <img src={Search} alt="" className='mt-1'/>
                    </button>
                    <button className='hidden md:block'>
                        <img src={User} alt=""/>
                    </button>
                    <button className='flex items-center gap-1' onClick={() => setToggle(!toggle)}>
                        <img src={Bag} alt=""/>
                        <span className='w-5 h-5 rounded-full text-center bg-black_color_900 text-text7 font-medium font-inter text-white'>2</span>
                    </button>
                 </div>
             </div>

             <div className={`${toggle ? 'visible translate-x-0' : 'invisible  translate-x-28'} right-0 h-full w-[450px] bg-black_color_900 py-8 px-10 fixed top-0 transition-all delay-200 duration-500 overflow-hidden`}>
                 <div className="flex items-center justify-between text-white">
                    <h2 className='uppercase text-text1 font-space_gortesk font-medium'>cart</h2>
                    <BsX size={30} className='cursor-pointer' onClick={() => setToggle(false)}/>
                 </div>
             </div>
        </div>

        
    </header>
  )
}
const HeaderStyle4 = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <header className='relative top-0 left-0 w-full py-5 z-30 bg-white'>
        <div className="container">
             <div className="flex justify-between items-center">

                 <div className='flex items-center gap-4'>
                    <button>
                      <img src={MenuBar} alt="" />
                    </button>
                    <img src={Logo} alt="" />
                 </div>

                 <div className="hidden md:block font-space_gortesk">
                    <ul className="flex gap-10">
                        <li>
                            <a href="#" className='text-black_color_900 text-text6 leading-6 font-medium flex items-center gap-1'>
                              <span>Home</span>
                              <FiChevronDown />
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-black_color_900 text-text6 leading-6 font-medium flex items-center gap-1'>
                              <span>Shop</span>
                              <FiChevronDown />
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-black_color_900 text-text6 leading-6 font-medium flex items-center gap-1'>
                              <span>Product</span>
                              <FiChevronDown />
                            </a>
                        </li>
                        <li>
                            <a href="#" className='text-black_color_900 text-text6 leading-6 font-medium flex items-center gap-1'>
                              <span>Pages</span>
                              <FiChevronDown />
                            </a>
                        </li>
                    </ul>
                 </div>

                 <div className="flex gap-7 items-center">
                    <button className='hidden md:block'>
                        <img src={Search} alt="" className='mt-1'/>
                    </button>
                    <button className='hidden md:block'>
                        <img src={User} alt=""/>
                    </button>
                    <button className='flex items-center gap-1' onClick={() => setToggle(!toggle)}>
                        <img src={Bag} alt=""/>
                        <span className='w-5 h-5 rounded-full text-center bg-black_color_900 text-text7 font-medium font-inter text-white'>2</span>
                    </button>
                 </div>
             </div>

             <div className={`${toggle ? 'visible translate-x-0' : 'invisible  translate-x-28'} right-0 h-full w-[450px] bg-black_color_900 py-8 px-10 fixed top-0 transition-all delay-200 duration-500 overflow-hidden`}>
                 <div className="flex items-center justify-between text-white">
                    <h2 className='uppercase text-text1 font-space_gortesk font-medium'>cart</h2>
                    <BsX size={30} className='cursor-pointer' onClick={() => setToggle(false)}/>
                 </div>
             </div>
        </div>

      {/* <FlyMenu /> */}
        
    </header>


  )
}


export {
  HeaderStyle1,
  HeaderStyle2,
  HeaderStyle3,
  HeaderStyle4
}
