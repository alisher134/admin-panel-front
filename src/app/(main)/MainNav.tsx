"use client";

interface MainNavProps {
  name: string;
  link: string;
}

export const MainNav = ({ links }: { links: MainNavProps[] }) => {
  return (
    <nav className="my-24">
      <ul className="flex flex-col gap-6">
        {links.map((link) => (
          <li
            className=" bg-white text-black w-56 rounded-3xl text-center py-2"
            key={link.name}
          >
            <a className="block" href={link.link}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
