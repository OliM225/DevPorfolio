"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA =[
    {
    title: "Skills",
    id: "Skills",
    content:
    (   <ul className="list-disc pl-2">
            <li>Node.js</li>
            <li>React JS</li>
            <li>Angular </li>
            <li>MySql</li>
            <li>Php Oracle</li>
        </ul>
    )},
    {
        title: "Education",
        id: "Education",
        content:
        (   <ul className="list-disc pl-2" >
                <li>Agricultural Engeneering : INP-HB</li>
                <li>Software Development : CCNB </li>
                <li>Entrepreneuship & Business : YALI DAKAR</li>
                
            </ul>
        )},
        {
            title: "Certification",
            id: "Certification",
            content:
            (   <ul className="list-disc pl-2">
                    <li>Python</li>
                    <li>C++</li>
                    <li>Oracle</li>
                    
                </ul>
            )},
]

const AboutSection = () => {
    const [tab, setTab] = useState("Skills")
    const [ isPending, startTransition] = useTransition()

    const handleTabChange = (id) =>{
        startTransition(()=>{
            setTab(id)
        })
    }

  return (
    <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image  src="../../login.png"
                width={700}
                height={500}
                style={{borderRadius:30}}
                alt='salut'
            />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
                <h3 className="text-base lg:text-lg">Lorem ipsum dolor sit, amet consectetur 
                    adipisicing elit. Quae dolore saepe minus 
                    nobis officiis animi nulla iusto quaerat, 
                    voluptatem ipsam rem mollitia dolores aperiam,
                    quia inventore. Consequatur molestias molestiae
                    fugit!
                </h3>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton selectTab={()=>handleTabChange("Skills")} active={tab === "Skills"}>Skills</TabButton>
                    <TabButton selectTab={()=>handleTabChange("Education")} active={tab === "Education"}>{" "}Education{" "}</TabButton>
                    <TabButton selectTab={()=>handleTabChange("Certification")} active={tab === "Certification"}>{" "}Certification{" "}</TabButton>
                </div>
                <div className="mt-8">{TAB_DATA.find((t)=> t.id===tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection