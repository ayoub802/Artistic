import React from 'react'
import MegeImg1 from '../../assets/MegaMenuImage1.png'
import MegeImg2 from '../../assets/MegaMenuImage2.png'
import MegeImg3 from '../../assets/MegaMenuImage3.png'
import Button from '../../components/Buttons/button'
import {FiArrowRight} from "react-icons/fi"

const MegaMenuStyle1 = () => {
  return (
    <div className="mt-1 bg-white py-14 shadow-sm border-y ">
        <div className="grid max-w-screen-xl gap-6 px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-start md:px-6">
            <ul className="space-y-4 md:mb-0">
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage01
                    </a>
                </li>
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage02
                    </a>
                </li>
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage03
                    </a>
                </li>
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage04
                    </a>
                </li>
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage05
                    </a>
                </li>
            </ul>
            <ul className="space-y-4 md:mb-0">
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage01
                    </a>
                </li>
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage02
                    </a>
                </li>
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage03
                    </a>
                </li>
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage04
                    </a>
                </li>
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage05
                    </a>
                </li>
            </ul>
            <ul className="space-y-4 md:mb-0">
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage01
                    </a>
                </li>
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage02
                    </a>
                </li>
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage03
                    </a>
                </li>
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage04
                    </a>
                </li>
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage05
                    </a>
                </li>
            </ul>

             <div className="flex items-center gap-3 col-span-2">
                <a href="#" className="w-64 h-72 relative">
                    <img src={MegeImg1} alt="" className='w-full h-full object-cover'/>
                    <button type="button" className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] inline-flex justify-center items-center p-1 bg-white text-text5 font-space_gortesk tracking-tight leading-7 w-36 font-medium text-center text-black_color_900 rounded-md">
                        Winter Collection
                    </button>
                </a>
                <a href="#" className="w-64 h-72 relative">
                    <img src={MegeImg2} alt="" className='w-full h-full object-cover'/>
                    <button type="button" className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] inline-flex justify-center items-center p-1 bg-white text-text5 font-space_gortesk tracking-tight leading-7 w-36 font-medium text-center text-black_color_900 rounded-md">
                        New Arrivals
                    </button>
                </a>
             </div>
        </div>
    </div>
  )
}

const MegaMenuStyle2 = () => {
  return (
    <div className="mt-1 bg-white py-14 shadow-sm border-y ">
        <div className="grid max-w-screen-xl gap-6 px-4 py-5 mx-auto text-sm grid-cols-2 sm:grid-cols-3 text-gray-500 dark:text-gray-400 md:grid-cols-5 lg:grid-cols-6 items-start md:px-6">
            <ul className="space-y-4 md:mb-0 ">
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage01
                    </a>
                </li>
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage02
                    </a>
                </li>
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage03
                    </a>
                </li>
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage04
                    </a>
                </li>
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage05
                    </a>
                </li>
            </ul>
            <ul className="space-y-4 md:mb-0">
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage01
                    </a>
                </li>
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage02
                    </a>
                </li>
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage03
                    </a>
                </li>
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage04
                    </a>
                </li>
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage05
                    </a>
                </li>
            </ul>
            <ul className="space-y-4 md:mb-0">
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage01
                    </a>
                </li>
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage02
                    </a>
                </li>
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage03
                    </a>
                </li>
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage04
                    </a>
                </li>
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage05
                    </a>
                </li>
            </ul>
            <ul className="space-y-4 md:mb-0">
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage01
                    </a>
                </li>
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage02
                    </a>
                </li>
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage03
                    </a>
                </li>
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage04
                    </a>
                </li>
                <li>
                    <a href="#" className="font-space_gortesk text-black_color_900 font-medium text-text6 leading-6">
                        Homepage05
                    </a>
                </li>
            </ul>

             <div className="col-span-2">
                <a href="#" className="w-64 h-72 relative">
                    <img src={MegeImg3} alt="" className='w-full h-full object-cover'/>
                    <div className="mt-4 text-center">
                        <h2 className='font-space_gortesk text-text2 leading-8 text-black_color_900 font-medium'>Summer collection</h2>
                        <div className="mx-auto mt-1 max-w-max">
                          <Button intent="linkblack" size="xsmall" roundness="square" children="See Collection" icon={<FiArrowRight />} />
                         </div>
                    </div>
                </a>
             </div>
        </div>
    </div>
  )
}

export {
    MegaMenuStyle1,
    MegaMenuStyle2
}