import { useState } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import renderText from '../utils/RenderText';

const EmploymentEntry = (employmentInfo: EmploymentInfo) => {
  const [showDetails, setShowDetails] = useState(false);
  
  const toggleShowDetails = () => setShowDetails(!showDetails);

  return (
    <>
    <div className='flex flex-row items-center mb-4 w-full max-w-3xl cursor-pointer' id="employment-entry" onClick={toggleShowDetails}>
      <a href={employmentInfo.href} onClick={e => e.stopPropagation()} target="_blank" rel="noopener noreferrer">
        <Image
          alt={employmentInfo.company + " logo"}
          height={employmentInfo.logoHeight}
          width={employmentInfo.logoWidth}
          src={"/" + employmentInfo.logo}
          priority
          className={"mr-4 p-2 rounded-lg"}
        />
      </a>
      <div className="w-7/24 justify-self-start">
        <div className="dark:text-white text-gray-800 ">
          {employmentInfo.company}
        </div>
        <span className="dark:text-gray-400 whitespace-nowrap text-gray-600 text-sm ">
          {employmentInfo.position}
        </span>
      </div>
      <span className="grow opacity-0 md:opacity-100  border-t dark:border-gray-500 mx-4 mb-4 self-end border-dashed shrink border-gray-400"></span>

      <span className="dark:text-gray-400 sm:whitespace-nowrap whitespace-normal text-right text-gray-600 text-sm mt-2 justify-self-end">
        {employmentInfo.date}
      </span>

      <FontAwesomeIcon icon={faAngleRight} size="1x" className={'mt-2 ml-2 animate-pulse duration-750 ' + (showDetails ? 'rotate-90' : 'hover:rotate-90')}/>
    </div>
    <div className='flex flex-row items-center mb-4 w-full max-w-3xl cursor-pointer' id="employment-entry" onClick={toggleShowDetails}>
      {showDetails ? <div className='mb-4 ml-[4.75rem] justify-self-start'>{renderText(employmentInfo.description, true)}</div> : null}
    </div>
    </>
  );
}

export default EmploymentEntry;