"use client";

import { MainForm } from "./(main)/(form)/MainForm";
import { MainFooter } from "./(main)/MainFooter";
import { MainHeader } from "./(main)/MainHeader";
import { MainNav } from "./(main)/MainNav";

export interface ILink {
  name: string;
  link: string;
}

export default function Home() {
  const links: ILink[] = [
    { name: "biz turaly", link: "/" },
    { name: "komek", link: "/" },
    { name: "kitapkhana", link: "/" },
    { name: "baylanys", link: "/" },
  ];

  return (
    <div className="px-32 py-4">
      <MainHeader />

      <div>
        <h1 className="font-black uppercase text-6xl mt-5">
          Data Security .ORG.
        </h1>
      </div>

      <div className="flex gap-10 justify-between">
        <MainNav links={links} />

        <div className="mt-40">
          <MainForm />
        </div>
      </div>

      <MainFooter />
    </div>
  );
}
