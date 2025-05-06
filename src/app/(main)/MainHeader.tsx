"use client";

import { useClientAuth } from "@/hooks/useClientAuth";
import { UserCircle } from "lucide-react";

export const MainHeader = () => {
  const isAuth = useClientAuth();

  return (
    <header className="flex items-center justify-between">
      <div className="flex flex-col text-2xl">
        <span>by</span>
        <span>Bereke Amanbay</span>
      </div>

      {isAuth ? (
        <a href="/admin" className="flex items-center flex-col gap-3">
          <UserCircle size={55} />
          <span className="text-lg">Admin</span>
        </a>
      ) : (
        <a href="/login" className="flex items-center flex-col gap-3">
          <UserCircle size={55} />
          <span className="text-lg">Login</span>
        </a>
      )}
    </header>
  );
};
