import styles from '../styles/Home.module.css'
import profile from '../public/temp.jpg'
import Image from 'next/image'
import { ReactElement, useState } from 'react'
import ProjectCard from './ProjectCard'

interface ProjectInfo {
  title: string,
  description: string,
  github?: string,
  link?: string,
}

const projectInfo: ProjectInfo[] = [
  {
    title: 'Wave chat',
    description: 'Wave is a social-media platform that connects incoming first-year students from the same university. Built as a COVID-19 solution, Wave allows meaningful friendships to be formed, despite the lack of in-person activities while we all social distance. Wave has 1500+ users.'
  },
  {
    title: 'Free burger project',
    description: 'Automation of receipt info extraction and survey completion to get free burger coupons born from my reliance on late night Burger King runs after long nights of studying (and procrastinating)'
  },
  {
    title: 'Random thing',
    description: 'an even longer description'
  },
  {
    title: 'Thingy majiggy',
    description: 'a massive huge enormous large super long incredibly boring and redundant block of text forming an incromprehensible wall of nothingness'
  },
]


const Projects = () => {
  return (
    <div className="px-32 py-0" id="projects">
      <main className="py-8 px-0 flex flex-1 flex-col justify-start items-center">
        <h1 className="text-4xl justify-self-center mb-5">
          Projects
        </h1>
        <div className='grid grid-cols-3 gap-4'>
        {projectInfo.map((entry: ProjectInfo, idx: number) => {
            return (
              <ProjectCard key={idx} {... entry}/>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Projects;