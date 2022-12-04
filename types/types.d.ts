interface DescriptionTypes {
  tldr: ReactElement,
  less: ReactElement,
  default: ReactElement,
  more: ReactElement,
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

interface HeaderEntry {
  label: string,
  href: string,
}

interface ProjectInfo {
  title: string,
  description: string,
  detailedDescription: string,
  github?: string,
  link?: string,
}

interface themedAppProps extends Omit<AppProps, "Component"> {
  Component: AppProps["Component"] & { theme: string | undefined }
}