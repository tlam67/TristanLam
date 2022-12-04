import EmploymentEntry from './EmploymentEntry';
import { experienceData } from '../portfolioInfo';

const Experience = () => {
  return (
    <div className="px-32 py-0" id="experience">
      <main className="pt-8 px-0 flex flex-1 flex-col justify-start items-center">
        <h1 className="text-4xl justify-self-center mb-5">
          Experience
        </h1>
        <p className='mb-5'>Expand the positions below for quick information, or check out my <a href="">resume</a></p>
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