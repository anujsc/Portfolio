import React from 'react'
import Introsec from '../utilis/Introsec'

function Contact() {
  return (
    <div className=' relative h-screen w-full bg-[#151818ef] '>
        <Introsec name={"Contact"} icon={<i class="ri-phone-line"></i>} />

        <div className="find absolute font-semibold opacity-75 text-[white] text-[5vh] tracking-tight left-[23%] top-[16%]">
            <p>Find me here :</p>
        </div>

        <div className='find absolute h-[60vh] flex gap-[10vh]  text-[#116466] text-[3vh] tracking-tight left-[23%] top-[28%] '>
       <div className="flex flex-col w-[20vh]">
       <a href="https://www.linkedin.com/in/anuj-chaudhari-78a0a9256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className=' hover:-tracking-tighter origin-left duration-200'><i class="pr-3 ri-linkedin-box-fill"></i>Linkedin</a>
       <a href="https://github.com/anujsc" className='  hover:-tracking-tighter origin-left duration-200'><i class="pr-3 ri-github-fill"></i>GitHub</a>
       <a href="" className='  hover:-tracking-tighter origin-left duration-200'><i class="pr-3 ri-phone-fill"></i>8308791653</a>
       </div>
       
       <div className="flex flex-col">
       <a href="https://www.instagram.com/ssup_its_anuj/" className='  hover:-tracking-tighter origin-left duration-200'><i class="pr-3 ri-instagram-fill"></i>Instagram</a>
       <a href="" className=' hover:-tracking-tighter origin-left duration-200'><i class="pr-3 ri-mail-line"></i>anujpvt2311@gmail.com</a>
       </div>

        </div>

        

        


    </div>
  )
}

export default Contact