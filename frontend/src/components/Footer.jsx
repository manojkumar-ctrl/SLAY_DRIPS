import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm'>

            <div >
                <img src={assets.logo} className='mb-5 w-32'alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                   SlayDrips is a modern clothing brand dedicated to creating stylish, high-quality pieces that blend comfort, confidence, and everyday wearability.
                </p>

            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91-98802xxxxx</li>
                    <li>contact@slaydrips.com</li>
                    <li>manojkumar@gmail.com</li>
                    <li>Owner & Author - Manojkumar </li>
                </ul>
            </div>
      </div>
                <br />
            <div>
                <hr />
                <p className='py-5 text-sm text-center'></p>
                        Copyright 2025@slaydrips.com - All Right Reserved.
                        <b></b><b></b>
                        <p>Made with ❤️</p>
                        <br />

                
            </div>
    </div>
  )
}

export default Footer
