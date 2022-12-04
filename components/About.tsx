import Image from 'next/image'
import { useState } from 'react'
import { aboutData } from '../portfolioInfo'

const titles = [
  'Software Engineer',
  'Student',
  'Competitive Soccer Player',
  'Learner',
]

const selectedButtonStyle = 'ring-2 rounded-md dark:ring-arrow-blue ring-black'

var numOfDescriptions = 4;
if (!aboutData.tldr) numOfDescriptions--;
if (!aboutData.less) numOfDescriptions--;
if (!aboutData.more) numOfDescriptions--;

const Description = (descriptionType: string, setDescriptionType: (descriptionType: string) => void) => {

  const selectDescription = (type: string) =>  {
    if (type === 'tldr') {
      return aboutData.tldr;
    } else if (type === 'less') {
      return aboutData.less;
    } else if (type === 'more') {
      return aboutData.more;
    }
    return aboutData.default;
  }

  return (
    <>
      {(aboutData.img && aboutData.imgWidth && aboutData.imgHeight) ? <Image src={"/" + aboutData.img} alt="profile picture" width={aboutData.imgWidth} height={aboutData.imgHeight} className="my-4 justify-self-center w-80 md:w-100 lg:w-150"/> : <></>}

      <div className={`my-3 grid grid-cols-${numOfDescriptions} gap-4`}>
        {aboutData.tldr ? <button className={` m-1 p-1 ${descriptionType === 'tldr' ? selectedButtonStyle : undefined}`} onClick={() => setDescriptionType('tldr')}>TL;DR</button> : <></>}
        {aboutData.less ? <button className={` m-1 p-1 ${descriptionType === 'less' ? selectedButtonStyle : undefined}`} onClick={() => setDescriptionType('less')}>Less</button> : <></>}        
        <button className={` m-1 p-1 ${descriptionType === 'default' ? selectedButtonStyle : undefined}`} onClick={() => setDescriptionType('default')}>Default</button>
        {aboutData.more ? <button className={` m-1 p-1 ${descriptionType === 'more' ? selectedButtonStyle : undefined}`} onClick={() => setDescriptionType('more')}>More</button> : <></>}
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

  return (
    <div className="px-32 py-0" id="about">
      <main className="pt-24 px-0  flex flex-1 flex-col flex-wrap justify-start items-center">
      <h1 className="text-4xl justify-self-center">
        About Me
      </h1>
      {Description(descriptionType, setDescriptionType)}
      </main>
    </div>
  );
}

export default About;