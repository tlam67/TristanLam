import ThemeSwitcher from "./ThemeSwitcher";
import NextLink from "next/link";

interface HeaderEntry {
  label: string,
  href: string,
}

const headerData: HeaderEntry[] = [
  {
    label: "About",
    href: "/",
  },
  {
    label: "Experience",
    href: "/",
  },
  {
    label: "Projects",
    href: "/",
  },
  {
    label: "Contact",
    href: "/",
  },
];

const Header = () => {
  return (
    <header className="md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center justify-end">
          {headerData.map((headerEntry: HeaderEntry, idx: number) => {
            return (
              <NextLink
                href={headerEntry.href}
                key={idx}
                className={
                  "hidden md:inline-block p-1 sm:px-3 sm:py-2 z-20 rounded-lg  transition-all text-gray-600 dark:text-gray-400 dark:hover:text-white hover:text-black ease-in-out"
                }
              >
                {headerEntry.label}
              </NextLink>
            );
          })}
          <ThemeSwitcher/>
      </div>
    </header>
  );
}

export default Header;