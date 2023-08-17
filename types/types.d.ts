interface themedAppProps extends Omit<AppProps, "Component"> {
  Component: AppProps["Component"] & { theme: string | undefined }
}

interface DescriptionTypes {
  tldr: ReactElement,
  less: ReactElement,
  default: ReactElement,
  more: ReactElement,
}

interface HeaderEntry {
  label: string,
  href: string,
}

interface HomeInfo {
  websiteTitle: string,
  title: string,
  subtitle: string,
  subsubtitle?: string,
  favicon?: string,
}

interface AboutInfo {
  img?: string,
  imgHeight?: number,
  imgWidth?: number,
  tldr?: string,
  less?: string,
  default: string,
  more?: string,
  resume?: string,
}

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

interface ProjectInfo {
  title: string,
  description: string,
  detailedDescription: string,
  github?: string,
  link?: string,
}

interface FooterInfo {
  email?: string,
  github?: string,
  linkedin?: string,
  twitter?: string,
  facebook?: string,
  instagram?: string,
}