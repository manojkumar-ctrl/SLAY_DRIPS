import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewletterBox'


const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>

      </div>
      <div className='my-10  flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>At SlayDrips, we believe fashion should feel as good as it looks. Our mission is to create versatile, timeless clothing that combines quality craftsmanship with modern style. Each piece is thoughtfully designed to fit seamlessly into your everyday life—comfortable, confident, and effortlessly cool.</p>
                <p>We’re committed to more than just great style. Every item we produce is made with care—using responsibly sourced materials and ethical production practices wherever possible. Our goal is to offer clothing that not only looks good but also feels good to wear and support.</p>
              <b className='text-gray-800'>OUR MISSION</b>
              <p>Our mission is to empower individuals through thoughtfully designed clothing that blends style, comfort, and quality. We aim to create timeless pieces that inspire confidence, celebrate self-expression, and make everyday dressing effortless. With a focus on sustainability and integrity, we’re building a brand that values people, the planet, and purpose.</p>
      </div>
    </div>
    <div className='text-xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE SLAY DRIPS'}/>

    </div>
    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-18 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance: </b>
            <p className='text-gray-600'> Quality is at the heart of everything we do. From fabric selection to final stitching, every piece undergoes strict quality control to ensure it meets our high standards. We work closely with trusted manufacturers and use premium materials to deliver clothing that’s built to last, feel great, and look even better—season after season</p>
      </div>

       <div className='border px-10 md:px-16 py-18 sm:py-20 flex flex-col gap-5'>
            <b>Convinence:</b>
            <p className='text-gray-600'>We’re here to make style simple. At SlayDrips, we offer a seamless shopping experience—from easy browsing and secure checkout to fast shipping and hassle-free returns. Whether you’re shopping from home or on the go, we’ve made it convenient to find your perfect fit and get it delivered straight to your door.</p>
      </div>

      <div className='border px-10 md:px-16 py-18 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>We’re committed to providing a customer experience as exceptional as our products. Our support team is here to help—friendly, responsive, and ready to assist with any questions, concerns, or styling advice. Your satisfaction is our priority, and we’re always just a message away to ensure you feel confident and cared for at every step.</p>
      </div>


    </div>

    <NewsletterBox/>
    </div>
    
  )
}

export default About
