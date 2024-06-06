import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const ProjectCard = ({imgUrl, title, description, gitUrl, prevUrl}) => {
  return (
    <div>
        <div 
            style={{background:`url(${imgUrl})`,
            backgroundSize:"cover", }}
            className="h-52 md:h-62 rounded-t-xl relative group">
            <div className="overlay  items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration:500 ">
                <Link href={gitUrl} className="h-14 w-14 mr-4 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                    <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
                </Link>
                <Link href={prevUrl} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                    <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
                </Link>
            </div>
        </div>
        <div className="text-white mt-4 rounded-b-xl bg[#181818]py-6 px-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <h5 className="text-[#ADB7BE] font-semibold mb-4">{description}</h5>

        </div>
    </div>
  )
}

export default ProjectCard