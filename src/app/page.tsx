"use client";

import { useClientAuth } from "@/hooks/useClientAuth";
import { MainForm } from "./(main)/(form)/MainForm";
import { MainFooter } from "./(main)/MainFooter";
import { MainHeader } from "./(main)/MainHeader";
import { MainNav } from "./(main)/MainNav";

export interface ILink {
  name: string;
  link: string;
}

export default function Home() {
  const isAuth = useClientAuth();

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
        <h1 className="font-black uppercase text-7xl mt-5">
          Data Security .ORG.
        </h1>
      </div>

      <div className="flex gap-10 justify-between">
        <MainNav links={links} />

        {isAuth ? (
          <div className="mt-40">
            <MainForm />
          </div>
        ) : (
          <div className="mt-96 w-[480px]">
            <p>
              Aqparattyq qauipsizdik oqigalaryn tirkeu zhane derbes derekterdin
              zhylystauyn baqulay zhuiesi
            </p>
            <p className="mt-8">
              Zhoba Qazaqstan aumagynda tirkelgen cyber shabuyldardy zhariyalap,
              qauipsizdik mamandarynyn bilikiligin arttyruga zhene sheshimderdi
              qamtidy. Zhuyie 24/7 qoldau korsetedi7
            </p>
          </div>
        )}
      </div>

      <MainFooter />
    </div>
  );
}
