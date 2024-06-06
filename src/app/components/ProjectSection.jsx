"use client"
import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
const projectsData = [
    {
        id: 1,
        title: "React Portfolio",
        description: "amazing work to be proud",
        image: "/images/proj1.png",
        tag:["All","web"],
        gitUrl:"/",
        prevUrl: "/",
    },
    {
        id: 2,
        title: "React Portfolio",
        description: "amazing work to be proud",
        image: "/images/proj2.png",
        tag:["All","web"],
        gitUrl:"/",
        prevUrl: "/",
    },
    {
        id: 3,
        title: "React Portfolio",
        description: "amazing work to be proud",
        image: "/images/proj3.png",
        tag:["All","web"],
        gitUrl:"/",
        prevUrl: "/",
    },
    {
        id: 4,
        title: "React Portfolio",
        description: "amazing work to be proud",
        image: "/images/proj4.png",
        tag:["All","web"],
        gitUrl:"/",
        prevUrl: "/",
    },
    {
        id: 5,
        title: "React Portfolio",
        description: "amazing work to be proud",
        image: "/images/proj5.png",
        tag:["All","web"],
        gitUrl:"/",
        prevUrl: "/",
        
    },
    {
        id: 6,
        title: "Server Side App",
        description: "amazing work to be proud",
        image: "/images/proj6.png",
        tag:"web",
        gitUrl:"/",
        prevUrl: "/",
    },
]
const ProjectSection = () => {

    const [tag, setTag] = useState("All")

    const handleTagChange = (newTag) =>{
        setTag(newTag)
    }

  const filteredProjects = projectsData.filter((project) =>

    project.tag.includes(tag))
    
  return (
    <div>
        <h1 className="text-center text-6xl font-bold text-white  py-10">My Projects</h1>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
           <ProjectTag  onClick={handleTagChange} name="All" isSelected={tag === "All"}/> 
           <ProjectTag  onClick={handleTagChange} name="web" isSelected={tag === "web"}/> 
        
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">{filteredProjects.map((project)=><ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            prevUrl={project.prevUrl}/>)}</div>
    </div>
  )
}

export default ProjectSection