import React from 'react'
import ProductBanner from '../../assets/Paste_image.png'
import { AiFillStar } from "react-icons/ai"
import Button from '../../components/Buttons/button'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper';
// import { Pagination } from "swiper";
const ProductCarousel = () => {
  return (
    <section>
        <div className="container">

            <Swiper  
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                }
              }}
            className="mySwiper"
            pagination={true} modules={[Pagination]}>
                
                    <SwiperSlide>               
                        <div className="flex flex-col items-start">
                            <div className="h-80">
                            <img src={ProductBanner} className='w-full h-full object-cover' />
                            </div>
                            <div className="mt-3">

                            <h3 className='font-space_gortesk font-medium text-black_color_900 leading-7 text-text5 tracking-tighter my-1'>Product Name</h3>
                            
                            <div className="flex items-center gap-3">
                                <span className='font-Inter font-semibold text-text6 leading-6 text-black_color_900'>$56.00</span>
                                <span className='font-Inter text-[#A7A7A7] font-regular text-text6 leading-6 line-through'>$130.00</span>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>              
                        <div className="flex flex-col items-start">
                            <div className="h-80">
                            <img src={ProductBanner} className='w-full h-full object-cover' />
                            </div>
                            <div className="mt-3">

                            <h3 className='font-space_gortesk font-medium text-black_color_900 leading-7 text-text5 tracking-tighter my-1'>Product Name</h3>
                            
                            <div className="flex items-center gap-3">
                                <span className='font-Inter font-semibold text-text6 leading-6 text-black_color_900'>$56.00</span>
                                <span className='font-Inter text-[#A7A7A7] font-regular text-text6 leading-6 line-through'>$130.00</span>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>              
                        <div className="flex flex-col items-start">
                            <div className="h-80">
                            <img src={ProductBanner} className='w-full h-full object-cover' />
                            </div>
                            <div className="mt-3">

                            <h3 className='font-space_gortesk font-medium text-black_color_900 leading-7 text-text5 tracking-tighter my-1'>Product Name</h3>
                            
                            <div className="flex items-center gap-3">
                                <span className='font-Inter font-semibold text-text6 leading-6 text-black_color_900'>$56.00</span>
                                <span className='font-Inter text-[#A7A7A7] font-regular text-text6 leading-6 line-through'>$130.00</span>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>              
                        <div className="flex flex-col items-start">
                            <div className="h-80">
                            <img src={ProductBanner} className='w-full h-full object-cover' />
                            </div>
                            <div className="mt-3">

                            <h3 className='font-space_gortesk font-medium text-black_color_900 leading-7 text-text5 tracking-tighter my-1'>Product Name</h3>
                            
                            <div className="flex items-center gap-3">
                                <span className='font-Inter font-semibold text-text6 leading-6 text-black_color_900'>$56.00</span>
                                <span className='font-Inter text-[#A7A7A7] font-regular text-text6 leading-6 line-through'>$130.00</span>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>              
                        <div className="flex flex-col items-start">
                            <div className="h-80">
                            <img src={ProductBanner} className='w-full h-full object-cover' />
                            </div>
                            <div className="mt-3">

                            <h3 className='font-space_gortesk font-medium text-black_color_900 leading-7 text-text5 tracking-tighter my-1'>Product Name</h3>
                            
                            <div className="flex items-center gap-3">
                                <span className='font-Inter font-semibold text-text6 leading-6 text-black_color_900'>$56.00</span>
                                <span className='font-Inter text-[#A7A7A7] font-regular text-text6 leading-6 line-through'>$130.00</span>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>              
                        <div className="flex flex-col items-start">
                            <div className="h-80">
                            <img src={ProductBanner} className='w-full h-full object-cover' />
                            </div>
                            <div className="mt-3">

                            <h3 className='font-space_gortesk font-medium text-black_color_900 leading-7 text-text5 tracking-tighter my-1'>Product Name</h3>
                            
                            <div className="flex items-center gap-3">
                                <span className='font-Inter font-semibold text-text6 leading-6 text-black_color_900'>$56.00</span>
                                <span className='font-Inter text-[#A7A7A7] font-regular text-text6 leading-6 line-through'>$130.00</span>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>              
                        <div className="flex flex-col items-start">
                            <div className="h-80">
                            <img src={ProductBanner} className='w-full h-full object-cover' />
                            </div>
                            <div className="mt-3">

                            <h3 className='font-space_gortesk font-medium text-black_color_900 leading-7 text-text5 tracking-tighter my-1'>Product Name</h3>
                            
                            <div className="flex items-center gap-3">
                                <span className='font-Inter font-semibold text-text6 leading-6 text-black_color_900'>$56.00</span>
                                <span className='font-Inter text-[#A7A7A7] font-regular text-text6 leading-6 line-through'>$130.00</span>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    
           <div className="absolute top-0 left-0 w-full">
                <h3 className='font-space_gortesk font-medium text-heading5 leading-8 text-black_color_900'>Section Title</h3>
            </div>

            </Swiper>
        </div>
    </section>
  )
}


export default ProductCarousel
