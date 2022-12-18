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
  tldr: "Hi! I'm Tristan!\n\nI'm an undergraduate Computer Science student @ UWaterloo who loves to build fun things and explore new topics!\n\nPreviously I've interned at Arcturus Networks working on embedded machine vision as a full stack developer, as well as at WSIB Innovation Lab and Hop In as a full stack developer. I currently have a 3.9 CGPA and am always looking for new challenges!",
  less: "Hi there! I'm Tristan, a software developer and undergraduate Computer Science student @ UWaterloo.\n\nAs a leader and developer in many projects, I lead by example by approaching opportunities with enthusiasm and creative perspectives.\n\n I most recently interned at Arcturus Networks, where I worked on a real-time video monitoring application in a full stack capacity. In the past, I've interned at WSIB Innovation Lab and Hop In as a full stack developer. Academically, I am committed to my education and excel in my studies with a CGPA of 3.9.\n\nIn addition to school and work, I am always looking for opportunities to expand my knowledge and have fun. I enjoy learning languages and am currently studying Cantonese ahead of my university exchange to Hong Kong! I keep active by going to the gym and playing competitive soccer and volleyball.",
  default: "Hello! I'm Tristan, a software developer and undergraduate Computer Science student @ UWaterloo.\n\nAs a leader and developer in many projects, I lead by example by approaching opportunities with enthusiasm and creative perspectives. I like to be reliable and consistent and enjoy the challenge of working with new and unfamiliar technologies.\n\n I most recently interned at Arcturus Networks, where I worked on a real-time video monitoring application in a full stack capacity. I implemented front-end updates and bug fixes, improved PostgreSQL performance for key queries, and worked on a custom bus for writing computer vision detections to an InfluxDB time series database. In the past, I've interned at WSIB Innovation Lab and Hop In as a full stack developer. Academically, I am committed to my education and excel in my studies with a CGPA of 3.9. I enjoy taking courses related to Computer Science, Combinatorics, Statistics, and Languages.\n\nIn addition to school and work, I am always looking for opportunities to expand my knowledge and have fun. I enjoy learning languages and am currently studying Cantonese ahead of my university exchange to Hong Kong! I keep active by going to the gym and playing competitive soccer and volleyball.",
  more: "Hello! I'm Tristan, a software developer and undergraduate Computer Science student @ UWaterloo.\n\nAs a leader and developer in many projects, I lead by example by approaching opportunities with enthusiasm and creative perspectives. I like to be reliable and consistent and enjoy the challenge of working with new and unfamiliar technologies.\n\n I most recently interned at Arcturus Networks, where I worked on a real-time video monitoring application in a full stack capacity. I implemented front-end updates and bug fixes, improved PostgreSQL performance for key queries, and worked on a custom bus for writing computer vision detections to an InfluxDB time series database. In the past, I've interned at WSIB Innovation Lab and Hop In as a full stack developer. Academically, I am committed to my education and excel in my studies with a CGPA of 3.9. I enjoy taking courses related to Computer Science, Combinatorics, Statistics, and Languages.\n\nI am driven by passion and interest and generally dislike doing things just for the sake of doing them. Working on topics which interest me is extremely motivating and makes it easy to enjoy the work and stay consistent. This is reflected in the projects that I have worked on, as there are no generic projects, only those related to my interests, such as Valorant and free burgers. Check them out further down :)\n\nIn addition to school and work, I am always looking for opportunities to expand my knowledge and have fun. I enjoy learning languages and am currently studying Cantonese ahead of my university exchange to Hong Kong! I keep active by going to the gym and playing competitive soccer and volleyball.",
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