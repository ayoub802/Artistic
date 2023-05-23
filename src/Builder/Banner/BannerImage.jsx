import React from 'react'
import Button from '../../components/Buttons/button'
import { BsArrowRight } from "react-icons/bs"

const BannerImageStyle1 = () => {
  return (
    <section className='h-screen w-full' >
      <div className="container">
        <div className="bg h-[500px] relative overflow-hidden">
            <div className='absolute top-[160px] left-[54px] max-w-max'>
              <h2 className='text-heading4 font-medium font-space_gortesk leading-10 text-black_color_900'>Banner Title</h2>
              <p className='font-Inter text-text4 leading-7 text-black_color_900 font-regular max-w-[500px] my-5'>Phosfluor escently engage worldwide methodologies with web-enabled process-centric technology.</p>
               <Button intent="linkblack" size="link_md" roundness="square" children="Get Started" icon={<BsArrowRight />}/>
            </div>
        </div>
      </div>
    </section>
  )
}

const BannerImageStyle2 = () => {
  return (
    <section className='h-screen w-full' >
      <div className="container">
        <div className="bg h-[500px] relative overflow-hidden">
            <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center'>
              <h2 className='text-heading4 font-medium font-space_gortesk leading-10 text-black_color_900'>Banner Title</h2>
              <p className='font-Inter text-text4 leading-7 text-black_color_900 font-regular max-w-[500px] my-5'>Phosfluor escently engage worldwide methodologies with web-enabled process-centric technology.</p>
               <div className="max-w-max mx-auto">
               <Button intent="linkblack" size="link_md" roundness="square" children="Get Started" icon={<BsArrowRight />}/>
               </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export { BannerImageStyle1, BannerImageStyle2}
