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
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos repudiandae doloremque vel illo? Sequi pariatur perspiciatis vitae amet soluta unde nesciunt sunt maiores optio, esse voluptate molestiae ullam blanditiis rem?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos placeat odit expedita esse itaque fuga vitae nihil corporis tempore mollitia illo modi eveniet, inventore quasi enim facere sit fugit rerum! Laboriosam aliquam aut molestias voluptatum perferendis quidem in dolorem possimus?</p>
              <b className='text-gray-800'>OUR MISSION</b>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, est. Eum iusto assumenda accusamus, enim sequi id! Veniam, natus, totam incidunt doloremque illum ex blanditiis provident eveniet, modi deleniti perferendis?</p>
      </div>
    </div>
    <div className='text-xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE SLAY DRIPS'}/>

    </div>
    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-18 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>add gpt text here after t last</p>
      </div>

       <div className='border px-10 md:px-16 py-18 sm:py-20 flex flex-col gap-5'>
            <b>Convinence:</b>
            <p className='text-gray-600'>add gpt text here after t last</p>
      </div>

      <div className='border px-10 md:px-16 py-18 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>add gpt text here after t last</p>
      </div>


    </div>

    <NewsletterBox/>
    </div>
    
  )
}

export default About
