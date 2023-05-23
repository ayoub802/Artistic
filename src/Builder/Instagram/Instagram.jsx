import React from 'react'
import Banner from "../../assets/Paste_image.png"

const InstagramStyle1 = () => {
  return (
    <section>
       <div className="container">
          <div className="flex flex-col gap-1 text-black_color_900">
             <span className='text-text5  font-inter font-bold uppercase leading-6'>check us out</span>
             <h2 className='font-space_gortesk font-medium text-heading4 leading-10 '>On Instagram</h2>
          </div>

        <div className="mt-8">
          <ul className="grid grid-cols-3 gap-8">
            <li>
                <img src={Banner} alt="" />
            </li>
            <li>
                <img src={Banner} alt="" />
            </li>
            <li>
                <img src={Banner} alt="" />
            </li>
          </ul>
        </div>
       </div>
    </section>
  )
}

const InstagramStyle2 = () => {
  return (
    <section>
       <div className="container">
          <div className="flex flex-col justify-center text-black_color_900 text-center">
             <span className='text-text5  font-inter font-bold uppercase leading-6'>check us out</span>
             <h2 className='font-space_gortesk font-medium text-heading4 leading-10 '>On Instagram</h2>
             <p className='text-text5 font-regular font-Inter leading-6 text-[#3E3E59] mt-4 max-w-[600px] mx-auto'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>
          </div>

        <div className="mt-8">
          <ul className="grid grid-cols-4 gap-8">
            <li>
                <img src={Banner} alt="" />
            </li>
            <li>
                <img src={Banner} alt="" />
            </li>
            <li>
                <img src={Banner} alt="" />
            </li>
            <li>
                <img src={Banner} alt="" />
            </li>
          </ul>
        </div>
       </div>
    </section>
  )
}

const InstagramStyle3 = () => {
  return (
    <section>
       <div className="container">
          <div className="flex flex-col justify-center text-black_color_900 text-center">
             <span className='text-text5  font-inter font-bold uppercase leading-6'>check us out</span>
             <h2 className='font-space_gortesk font-medium text-heading4 leading-10 '>On Instagram</h2>
          </div>

        <div className="mt-8">
          <ul className="grid grid-cols-6">
            <li>
                <img src={Banner} alt="" />
            </li>
            <li>
                <img src={Banner} alt="" />
            </li>
            <li>
                <img src={Banner} alt="" />
            </li>
            <li>
                <img src={Banner} alt="" />
            </li>
            <li>
                <img src={Banner} alt="" />
            </li>
            <li>
                <img src={Banner} alt="" />
            </li>
          </ul>
        </div>
       </div>
    </section>
  )
}

export { InstagramStyle1, InstagramStyle2, InstagramStyle3 }
