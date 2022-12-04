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
  default: <><p className=''>123456789qwertyuiopasdfghjklzxcvbnm123456789q wertyuiopasdfghjklzxcvbnm123456789qwertyuiopasdfghjklzxcvbnm</p><br/><p>second paragraph</p></>,
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
    <>
      <Image src={profile} alt="profile picture" className="my-4 justify-self-center w-80 md:w-100 lg:w-150"/>

      <div className='my-3 grid grid-cols-4 gap-4'>
        <button className={` m-1 p-1 ${descriptionType === 'tldr' ? selectedButtonStyle : undefined}`} onClick={() => setDescriptionType('tldr')}>TL;DR</button>
        <button className={` m-1 p-1 ${descriptionType === 'less' ? selectedButtonStyle : undefined}`} onClick={() => setDescriptionType('less')}>Less</button>
        <button className={` m-1 p-1 ${descriptionType === 'default' ? selectedButtonStyle : undefined}`} onClick={() => setDescriptionType('default')}>Default</button>
        <button className={` m-1 p-1 ${descriptionType === 'more' ? selectedButtonStyle : undefined}`} onClick={() => setDescriptionType('more')}>More</button>
      </div>

      {/* center this later */}
      <div className='w-96 max-w-2xl break-all'>
        {selectDescription(descriptionType)}

      </div>
      
    </>
  );
}

const About = () => {
  const [descriptionType, setDescriptionType] = useState('default');
  const [open, setOpen] = useState(true);

  return (
    <div className="px-32 py-0" id="about">
      <main className="pt-24 px-0  flex flex-1 flex-col flex-wrap justify-start items-center">
      <a onClick={() => setOpen(!open)} className="cursor-pointer">
        <h1 className="text-4xl justify-self-center">
          About Me
        </h1>
      </a>
      {open ? Description(descriptionType, setDescriptionType) : null}
      </main>
    </div>
  );
}

export default About;