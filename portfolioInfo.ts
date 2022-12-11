/***************************************************
 *             Portfolio information
 * 
 * Enter the info for each field
 * Some fields are marked optional
 **************************************************/


/**
 * Home page 
 * 
 * websiteTitle: string, mandatory, <Title of website which shows up on the tab>
 * title: string, mandatory, <Title on the home page>
 * subtitle: string, mandatory, <Subtitle on the home page>
 */
export const homeData: HomeInfo = {
  websiteTitle: 'Tristan Lam',
  title: 'Tristan Lam',
  subtitle: 'Computer Science @ UWaterloo',
  // favicon: ''
}

/**
 * About me section 
 * 
 * Note: if you include img, you must include imgHeight and imgWidth
 * Note: img must be in the public folder
 * Note: for descriptions, use \n to split paragraphs
 * 
 * img: string, optional, <The name of the image to appear in the About me section>
 * imgHeight: number, optional, <Height of the image>
 * imgWidth: number, optional, <Width of the image>
 * tldr: string, optional, <TLDR version of your text in About me section>
 * less: string, optional, <A shorter version of your text in About me section>
 * default: string, mandatory, <The default text in About me section>
 * more: string, optional, <A longer version of your text in About me section>
 * resume: string, optional, <Haven't figured this one out yet>
 */
export const aboutData: AboutInfo = {
  img: 'me.jpg',
  imgHeight: 814,
  imgWidth: 889,
  tldr: 'Shortest description',
  less: 'A shorter description about me',
  default: 'A default description about me',
  more: 'A more verbose description about me',
  resume: '',
}

/**
 * Experience section 
 * 
 * Note: logo must be in the public folder
 * 
 * company: string, mandatory, <Title of the company you worked for>
 * position: string, mandatory, <Name of position you held>
 * date: string, mandatory, <The date when you held the position>
 * logo: StaticImageData, mandatory, <The name of the logo image for the company>
 * logoWidth: number, mandatory, <Width of the logo>
 * logoHeight: number, mandatory, <Height of the logo>
 * description: string, mandatory, <Description of the position>
 * href: string, mandatory, <Link to website of employer>
 */
export const experienceData: EmploymentInfo[] = [
  {
    company: "Arcturus Networks",
    position: "Full Stack Software Engineering Intern",
    date: "Fall 2022",
    logo: 'arcturus-logo.svg',
    logoWidth: 60,
    logoHeight: 60,
    description: "arcturus description arcturus description arcturus description arcturus description arcturus description arcturus description arcturus description arcturus description arcturus description arcturus description arcturus description ",
    href: "https://www.arcturusnetworks.com/",
  },
  {
    company: "WSIB Innovation Lab",
    position: "Full Stack Software Engineering Intern",
    date: "Winter 2022",
    logo: 'wsib-logo.svg',
    logoWidth: 60,
    logoHeight: 60,
    description: "wsib description",
    href: "https://www.wsib-lab.ca/",
  },
  {
    company: "Hop In",
    position: "Full Stack Software Engineering Intern",
    date: "Summer 2021",
    logo: 'hopin-logo.svg',
    logoWidth: 60,
    logoHeight: 60,
    description: "hop in description",
    href: "https://www.hopintech.com/",
  },
]

/**
 * Project section 
 * 
 * title: string, mandatory, <Title of project>
 * description: string, mandatory, <Short description of project for the project card>
 * detailedDescription: string, mandatory, <Detailed description of project for the modal>
 * github: string, optional, <Link to github>
 * link: string, optional, <Link to project>
 */
export const projectData: ProjectInfo[] = [
  {
    title: 'Wave chat',
    description: 'Wave is a social-media platform that connects incoming first-year students from the same university. Built as a COVID-19 solution, Wave allows meaningful friendships to be formed, despite the lack of in-person activities while we all social distance. Wave has 1500+ users.',
    detailedDescription: 'Wave is a social-media platform that connects incoming first-year students from the same university. Built as a COVID-19 solution, Wave allows meaningful friendships to be formed, despite the lack of in-person activities while we all social distance. Wave has 1500+ users.',
    github: 'https://github.com/nicholas-tao/Wave-Chat',
  },
  {
    title: 'Free burger project',
    description: 'Automation of receipt info extraction and survey completion to get free burger coupons born from my reliance on late night Burger King runs after long nights of studying (and procrastinating)',
    detailedDescription: 'Automation of receipt info extraction and survey completion to get free burger coupons born from my reliance on late night Burger King runs after long nights of studying (and procrastinating)'
  },
  {
    title: 'Random thing',
    description: 'an even longer description',
    detailedDescription: 'an even longer description'
  },
  {
    title: 'Thingy majiggy',
    description: 'a massive huge enormous large super long incredibly boring and redundant block of text forming an incromprehensible wall of nothingness',
    detailedDescription: 'a massive huge enormous large super long incredibly boring and redundant block of text forming an incromprehensible wall of nothingness'
  },
]

/**
 * Footer section 
 * 
 * Note: do not put the entire link to your socials, just your username
 * 
 * email: string, mandatory, <your email address>
 * github: string, optional, <your github username>
 * linkedin: string, optional, <your linkedin username>
 * twitter: string, optional, <your twitter username>
 * facebook: string, optional, <your facebook username>
 * instagram: string, optional, <your instagram username>
 */
export const footerData: FooterInfo = {
  email: 'tlamottawa@gmail.com',
  github: 'tlam67',
  linkedin: 'tristanlam',
  // twitter: '',
  // facebook: '',
  // instagram: '',
}