import React from 'react'
import Logo from '../../assets/404.png'
import Button from '../../components/Buttons/button'


const NotfoundPage = () => {
  return (
    <div className='w-full h-screen'>
       <div className="container">
        <div className='grid place-content-center text-center'>
           <img src={Logo} alt="" className='mx-auto'/>
           <h3 className='text-heading3 font-space_gortesk leading-10 text-black_color_900 font-medium mt-10'>404 – Page not found</h3>
           <p className='mt-4 mb-6 text-[#3E3E59] font-regular text-text4 leading-8 max-w-[500px] mx-auto'>The page you're looking for isn't available.Try to search again or use the go back button below.</p>

           <div className='max-w-max mx-auto'>
           <Button intent="primary" size="medium" roundness="round" children="Go Back Home"/>
           </div>
        </div>

       </div>
    </div>
  )
}

export default NotfoundPage
