"use client";
import { Loader } from "@/components/ui/loader/Loader";
import { useProfile } from "@/hooks/useProfile";
import { MainChart } from "./charts/MainChart";
import { Numbers } from "./charts/Numbers";
import { RadarChart } from "./charts/RadarChart";
import { ProfileInfo } from "./ProfileInfo";
import { ManageUsers } from "./users/ManageUsers";

export default function Admin() {
  const { user, isLoading } = useProfile();

  return isLoading ? (
    <div className="w-screen h-screen flex items-center justify-center">
      <Loader />
    </div>
  ) : (
    <main className="min-h-screen p-6">
      <ProfileInfo />

      {!user.isAdmin ? (
        "You are not an admin"
      ) : (
        <>
          <MainChart />
          <Numbers />
          <div>
            <RadarChart />
            <ManageUsers />
          </div>
        </>
      )}
    </main>
  );
}
