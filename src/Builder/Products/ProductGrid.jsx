import React from 'react'
import ProductBanner from '../../assets/Paste_image.png'
import { AiFillStar } from "react-icons/ai"
import Button from '../../components/Buttons/button'

const ProductGrid = () => {
  return (
    <section className='py-14'>
      <div className="container">
        <div className="flex item-center justify-center gap-14">
            <a href="#" className='font-Inter text-black_color_900 pb-1 text-text4 sm:text-text2 leading-8 font-semibold relative before:absolute before:content[""] before:w-full before:h-[1px] before:bottom-0 before:left-0 before:bg-black_color_900'>
                Best Sellers
            </a>
            <a href="#" className='font-Inter text-[#605F5F] text-text4 sm:text-text2 leading-8 font-regular'>
                New Arrivals 
            </a>
            <a href="#" className='font-Inter text-[#605F5F] text-text4 sm:text-text2 leading-8 font-regular'>
                Sale
            </a>
        </div>

        <div className="mt-14">
            <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-8">
                <div className="flex flex-col items-start">
                    <div className="h-80">
                       <img src={ProductBanner} className='w-full h-full object-cover' />
                    </div>
                    <div className="mt-3">
                       <div className="flex text-[#FD7E14]">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                       </div>

                       <h3 className='font-space_gortesk font-medium text-black_color_900 leading-7 text-text5 tracking-tighter my-1'>Product Name</h3>
                       
                       <div className="flex items-center gap-3">
                         <span className='font-Inter font-semibold text-text6 leading-6 text-black_color_900'>$56.00</span>
                         <span className='font-Inter text-[#A7A7A7] font-regular text-text6 leading-6 line-through'>$130.00</span>
                       </div>
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <div className="h-80">
                       <img src={ProductBanner} className='w-full h-full object-cover' />
                    </div>
                    <div className="mt-3">
                       <div className="flex text-[#FD7E14]">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                       </div>

                       <h3 className='font-space_gortesk font-medium text-black_color_900 leading-7 text-text5 tracking-tighter my-1'>Product Name</h3>
                       
                       <div className="flex items-center gap-3">
                         <span className='font-Inter font-semibold text-text6 leading-6 text-black_color_900'>$56.00</span>
                         <span className='font-Inter text-[#A7A7A7] font-regular text-text6 leading-6 line-through'>$130.00</span>
                       </div>
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <div className="h-80">
                       <img src={ProductBanner} className='w-full h-full object-cover' />
                    </div>
                    <div className="mt-3">
                       <div className="flex text-[#FD7E14]">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                       </div>

                       <h3 className='font-space_gortesk font-medium text-black_color_900 leading-7 text-text5 tracking-tighter my-1'>Product Name</h3>
                       
                       <div className="flex items-center gap-3">
                         <span className='font-Inter font-semibold text-text6 leading-6 text-black_color_900'>$56.00</span>
                         <span className='font-Inter text-[#A7A7A7] font-regular text-text6 leading-6 line-through'>$130.00</span>
                       </div>
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <div className="h-80">
                       <img src={ProductBanner} className='w-full h-full object-cover' />
                    </div>
                    <div className="mt-3">
                       <div className="flex text-[#FD7E14]">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                       </div>

                       <h3 className='font-space_gortesk font-medium text-black_color_900 leading-7 text-text5 tracking-tighter my-1'>Product Name</h3>
                       
                       <div className="flex items-center gap-3">
                         <span className='font-Inter font-semibold text-text6 leading-6 text-black_color_900'>$56.00</span>
                         <span className='font-Inter text-[#A7A7A7] font-regular text-text6 leading-6 line-through'>$130.00</span>
                       </div>
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <div className="h-80">
                       <img src={ProductBanner} className='w-full h-full object-cover' />
                    </div>
                    <div className="mt-3">
                       <div className="flex text-[#FD7E14]">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                       </div>

                       <h3 className='font-space_gortesk font-medium text-black_color_900 leading-7 text-text5 tracking-tighter my-1'>Product Name</h3>
                       
                       <div className="flex items-center gap-3">
                         <span className='font-Inter font-semibold text-text6 leading-6 text-black_color_900'>$56.00</span>
                         <span className='font-Inter text-[#A7A7A7] font-regular text-text6 leading-6 line-through'>$130.00</span>
                       </div>
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <div className="h-80">
                       <img src={ProductBanner} className='w-full h-full object-cover' />
                    </div>
                    <div className="mt-3">
                       <div className="flex text-[#FD7E14]">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                       </div>

                       <h3 className='font-space_gortesk font-medium text-black_color_900 leading-7 text-text5 tracking-tighter my-1'>Product Name</h3>
                       
                       <div className="flex items-center gap-3">
                         <span className='font-Inter font-semibold text-text6 leading-6 text-black_color_900'>$56.00</span>
                         <span className='font-Inter text-[#A7A7A7] font-regular text-text6 leading-6 line-through'>$130.00</span>
                       </div>
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <div className="h-80">
                       <img src={ProductBanner} className='w-full h-full object-cover' />
                    </div>
                    <div className="mt-3">
                       <div className="flex text-[#FD7E14]">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                       </div>

                       <h3 className='font-space_gortesk font-medium text-black_color_900 leading-7 text-text5 tracking-tighter my-1'>Product Name</h3>
                       
                       <div className="flex items-center gap-3">
                         <span className='font-Inter font-semibold text-text6 leading-6 text-black_color_900'>$56.00</span>
                         <span className='font-Inter text-[#A7A7A7] font-regular text-text6 leading-6 line-through'>$130.00</span>
                       </div>
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <div className="h-80">
                       <img src={ProductBanner} className='w-full h-full object-cover' />
                    </div>
                    <div className="mt-3">
                       <div className="flex text-[#FD7E14]">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                       </div>

                       <h3 className='font-space_gortesk font-medium text-black_color_900 leading-7 text-text5 tracking-tighter my-1'>Product Name</h3>
                       
                       <div className="flex items-center gap-3">
                         <span className='font-Inter font-semibold text-text6 leading-6 text-black_color_900'>$56.00</span>
                         <span className='font-Inter text-[#A7A7A7] font-regular text-text6 leading-6 line-through'>$130.00</span>
                       </div>
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <div className="h-80">
                       <img src={ProductBanner} className='w-full h-full object-cover' />
                    </div>
                    <div className="mt-3">
                       <div className="flex text-[#FD7E14]">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                       </div>

                       <h3 className='font-space_gortesk font-medium text-black_color_900 leading-7 text-text5 tracking-tighter my-1'>Product Name</h3>
                       
                       <div className="flex items-center gap-3">
                         <span className='font-Inter font-semibold text-text6 leading-6 text-black_color_900'>$56.00</span>
                         <span className='font-Inter text-[#A7A7A7] font-regular text-text6 leading-6 line-through'>$130.00</span>
                       </div>
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <div className="h-80">
                       <img src={ProductBanner} className='w-full h-full object-cover' />
                    </div>
                    <div className="mt-3">
                       <div className="flex text-[#FD7E14]">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                       </div>

                       <h3 className='font-space_gortesk font-medium text-black_color_900 leading-7 text-text5 tracking-tighter my-1'>Product Name</h3>
                       
                       <div className="flex items-center gap-3">
                         <span className='font-Inter font-semibold text-text6 leading-6 text-black_color_900'>$56.00</span>
                         <span className='font-Inter text-[#A7A7A7] font-regular text-text6 leading-6 line-through'>$130.00</span>
                       </div>
                    </div>
                </div>
            </div>

            <div className="max-w-max mx-auto mt-14">
              <Button intent="primary" size="medium" roundness="round" children="Load more" icon="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
