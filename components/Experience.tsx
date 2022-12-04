import styles from '../styles/Home.module.css'
import profile from '../public/temp.jpg'
import Image, { StaticImageData } from 'next/image'
import { ReactElement, useState } from 'react'
import pic from '../public/temp.jpg'
import arcturusLogo from '../public/Arcturus-logo-light.svg'
import wsibLogo from '../public/wsib-logo.svg'
import hopinLogo from '../public/hopin-logo.svg'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import EmploymentEntry from './EmploymentEntry';

const titles = [
  'Software Engineer',
  'Student',
  'Competitive Soccer Player',
  'Learner',
]

interface EmploymentInfo {
  company: string,
  position: string,
  date: string,
  logo: StaticImageData,
  logoWidth: number,
  logoHeight: number,
  description: string,
  href: string,
}

const employments: EmploymentInfo[] = [
  {
    company: "Arcturus Networks",
    position: "Full Stack Software Engineering Intern",
    date: "Fall 2022",
    logo: arcturusLogo,
    logoWidth: 60,
    logoHeight: 60,
    description: "arcturus description arcturus description arcturus description arcturus description arcturus description arcturus description arcturus description arcturus description arcturus description arcturus description arcturus description ",
    href: "https://www.arcturusnetworks.com/",
  },
  {
    company: "WSIB Innovation Lab",
    position: "Full Stack Software Engineering Intern",
    date: "Winter 2022",
    logo: wsibLogo,
    logoWidth: 60,
    logoHeight: 60,
    description: "wsib description",
    href: "https://www.wsib-lab.ca/",
  },
  {
    company: "Hop In",
    position: "Full Stack Software Engineering Intern",
    date: "Summer 2021",
    logo: hopinLogo,
    logoWidth: 60,
    logoHeight: 60,
    description: "hop in description",
    href: "https://www.hopintech.com/",
  },
]


const Experience = () => {

  return (
    <div className="px-32 py-0" id="experience">
      <main className="pt-8 px-0 flex flex-1 flex-col justify-start items-center">
        <h1 className="text-4xl justify-self-center mb-5">
          Experience
        </h1>
        {employments.map((employmentInfo: EmploymentInfo, idx: number) => {
            return (
              <EmploymentEntry {... employmentInfo} key={idx} />
            );
          })}
      </main>
    </div>
  );
}

export default Experience;