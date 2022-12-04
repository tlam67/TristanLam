import ThemeSwitcher from "./ThemeSwitcher";
import NextLink from "next/link";
import { ScrollLink } from "./ScrollLink";

const headerData: HeaderEntry[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
];

const Header = () => {
  return (
    <header className="md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center justify-end">
          {headerData.map((headerEntry: HeaderEntry, idx: number) => {
            return (
              <ScrollLink
                href={headerEntry.href}
                key={idx}
                className={
                  "hidden md:inline-block p-1 sm:px-3 sm:py-2 z-20 rounded-lg transition-all text-gray-600 dark:text-gray-400 dark:hover:text-white hover:text-black ease-in-out"
                }
              >
                {headerEntry.label}
              </ScrollLink>
            );
          })}
          <ThemeSwitcher/>
      </div>
    </header>
  );
}

export default Header;