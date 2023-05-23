import React from 'react'
import Mail from '../../assets/email.png'
import Banner from "../../assets/Paste_image.png"



const NewsletterStyle1 = () => {
  return (
    <section className='py-12'>
       <div className="container">
         <div className="grid grid-cols-2 gap-[150px] items-center">
            
            <div className="flex flex-col">
               <h2 className='text-heading4 leading-10 font-medium font-space_gortesk text-black_color_900'>Join our newsletter. Enjoy big discounts.</h2>

               <form action="" className='pt-6'>
                  <div className="flex justify-between items-center border-b border-[#CBCBCB] max-w-[560px] h-[52px] py-5">
                      <img src={Mail} alt="" />
                      <input type="text" placeholder='Your email' className='mr-auto pl-3 outline-none border-none bg-transparent'/>
                      <button className='font-space_gortesk text-text5 font-medium leading-7 text-black_color_900'>Sign Up</button>
                  </div>
               <div className="flex items-center gap-2 pt-4">
                    <input id="link-radio" type="radio" className="appearance-none w-4 h-4 border border-black_color_900 rounded-full  cursor-pointer checked:bg-black checked:border-[3px] checked:border-white checked:outline checked:outline-1 checked:outline-black_color_900  " />
                    <label htmlFor="link-radio" className="font-Inter text-[#3E3E59] text-text6 leading-6 font-regular">I agree to receive marketing emails.</label>
                </div>
               </form>

            </div>

            <div>
              <img src={Banner} alt="" />
            </div>
         </div>
       </div>
    </section>
  )
}


const NewsletterStyle2 = () => {
    return (
        <section className="">
          <div className="container">
            <div className="overflow-hidden w-full h-[334px] relative" >
                <img src={Banner} alt="" className='w-full h-full object-cover'/>
                <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center z-20">
                  <h2 className='text-heading4 leading-10 font-medium font-space_gortesk text-black_color_900'>Join Our Newsletter</h2>
                   <p className='font-Inter font-regular text-text6 leading-7'>Big discounts and right to your inbox.</p>
              
                  <form action="" className='pt-6'>
                    <div className="flex justify-between items-center border-b border-[#CBCBCB] max-w-[560px] h-[52px] py-5">
                        <img src={Mail} alt="" />
                        <input type="text" placeholder='Your email' className='mr-auto pl-3 outline-none border-none bg-transparent'/>
                        <button className='font-space_gortesk text-text5 font-medium leading-7 text-black_color_900'>Sign Up</button>
                    </div>
                </form>
                </div>
            </div>
          </div>
        </section>
    )
}
export {NewsletterStyle1 , NewsletterStyle2}
