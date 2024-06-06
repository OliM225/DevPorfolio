"use client"
import React, {useState} from 'react'
import git from "../../../public/images/git.svg"
import link from "../../../public/images/link.svg"
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
        
    }
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    const options ={

        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSONdata,
        }
        const response = await fetch(endpoint, options);
        const resData = await response.json();
        if(response.status === 200) {
            console.log("Message sent.")
        }
  }
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-60 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="z-10">
            <h4 className="text-2xl font-bold text-white  my-2">Lets Connect </h4>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
                {" "}
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Consectetur voluptas ea, 
                eum, aliquid maxime facilis delectus veritatis 
                accusantium tenetur necessitatibus officia 
                commodi possimus. Officiis nostrum dolores odio
                 consequatur. Ex, animi.
            </p>
            <div className="socials flex flex-row gap-2 ">
                <Link href="http://github.com" >
                    <Image src={git} width={50} height={50} alt="git hub icon"/>
                </Link>
                <Link href="http://linkedin.com" className="hover:bg-white">
                    <Image src={link} width={50} height={50} alt="linkedin icon"/>
                </Link>
            </div>
        
        </div>
        <div>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="email" className="text-white mb-2 block  text-sm font-medium">Your Email</label>
                    <input 
                    type="email" 
                    name="email"
                    id="email" required 
                    placeholder="mail@xeample.com"
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="subject" className="text-white mb-2 block text-sm font-medium">Subject</label>
                    <input 
                    type="text" 
                    name="subject"
                    id="subject" required 
                    placeholder="subject of your message"
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    />
                </div>
                <div className="mb-6">
                <label htmlFor="message" className="text-white mb-2 block text-sm font-medium">Message</label>
                    <textarea 
                        name="message"
                        id="message"
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    
                    />  
                </div>
                <button type="submit"
                    className="bg-orange-400 text-white font-medium hover:bg-orange-600 py-1.5 px-5 rounded-lg w-full"
                >
                    Send Message
                </button>
            </form>

        </div>

    </section>
  )
}

export default EmailSection