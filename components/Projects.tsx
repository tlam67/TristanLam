import ProjectCard from './ProjectCard'
import { projectData } from '../portfolioInfo'

const Projects = () => {
  return (
    <>
    <div className="pt-24 px-32 py-0" id="projects">
      <main className="py-8 px-0 flex flex-1 flex-col justify-start items-center">
        <h1 className="text-4xl justify-self-center mb-5">
          Projects
        </h1>
        {/* <div className={`grid grid-cols-${projectData.length <= 2? projectData.length : 3} gap-4`}> */}
        <div className={`grid grid-cols-3 gap-4`}>
        {projectData.map((entry: ProjectInfo, idx: number) => {
            return (
              <ProjectCard key={idx} {... entry}/>
            );
          })}
        </div>
      </main>
    </div>
    </>
  );
}

export default Projects;