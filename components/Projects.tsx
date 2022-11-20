import styles from '../styles/Home.module.css'
import profile from '../public/temp.jpg'
import Image from 'next/image'
import { ReactElement, useState } from 'react'

const titles = [
  'Software Engineer',
  'Student',
  'Competitive Soccer Player',
  'Learner',
]

interface DescriptionTypes {
  tldr: ReactElement,
  less: ReactElement,
  default: ReactElement,
  more: ReactElement,
}

const descriptions: DescriptionTypes = {
  tldr: <div><p>tldr</p></div>,
  less: <p>less</p>,
  default: <p>default</p>,
  more: <p>more</p>,
}

const selectedButtonStyle = 'ring-2 rounded-md dark:ring-arrow-blue ring-black'

const Description = (descriptionType: string, setDescriptionType: (descriptionType: string) => void) => {

  const selectDescription = (type: string) =>  {
    if (type === 'tldr') {
      return descriptions.tldr;
    } else if (type === 'less') {
      return descriptions.less;
    } else if (type === 'more') {
      return descriptions.more;
    }
    return descriptions.default;
  }

  return (
    <div className=''>
      <div className='mt-3 grid grid-cols-4 gap-4'>
        <button className={` m-1 p-1 ${descriptionType === 'tldr' ? selectedButtonStyle : undefined}`} onClick={() => setDescriptionType('tldr')}>TL;DR</button>
        <button className={` m-1 p-1 ${descriptionType === 'less' ? selectedButtonStyle : undefined}`} onClick={() => setDescriptionType('less')}>Less</button>
        <button className={` m-1 p-1 ${descriptionType === 'default' ? selectedButtonStyle : undefined}`} onClick={() => setDescriptionType('default')}>Default</button>
        <button className={` m-1 p-1 ${descriptionType === 'more' ? selectedButtonStyle : undefined}`} onClick={() => setDescriptionType('more')}>More</button>
      </div>
      
      {selectDescription(descriptionType)}
      <Image src={profile} alt="profile picture" width={80} height={80} className="justify-self-center"/>
    </div>
  );
}

const Projects = () => {
  const [descriptionType, setDescriptionType] = useState('default');
  const [open, setOpen] = useState(false);

  return (
    <div className="px-32 py-0" id="about">
      <main className="py-8 px-0 flex flex-1 flex-col justify-start items-center">
        <a onClick={() => setOpen(!open)} className="cursor-pointer">
        <h1 className="text-5xl justify-self-center">
          Projects
        </h1>
        </a>
        {open ? Description(descriptionType, setDescriptionType) : null}
      </main>
    </div>
  );
}

export default Projects;