import EmploymentEntry from './EmploymentEntry';
import { experienceData } from '../portfolioInfo';

const Experience = () => {
  return (
    <div className="pt-24 px-32 py-0" id="experience">
      <main className="pt-8 px-0 flex flex-1 flex-col justify-start items-center">
        <h1 className="text-4xl justify-self-center mb-5">
          Experience
        </h1>
        <p className='mb-5'>Expand the positions below for quick information, or check out my <a href="Tristan_Resume_Aug2023.pdf" download><b>Resume</b></a></p>
        {experienceData.map((employmentInfo: EmploymentInfo, idx: number) => {
            return (
              <EmploymentEntry {... employmentInfo} key={idx} />
            );
          })}
      </main>
    </div>
  );
}

export default Experience;