"use client";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  const { isLoaded, isSignedIn, user } = useUser();

  // In case the user signs out while on the page.
  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <div className="px-24 py-5 ">
      <div className="w-full flex flex-row justify-between gap-4">
        <h1 className="font-medium text-2xl text-green-600">linkslySocial</h1>
        <UserButton afterSignOutUrl="/" />
      </div>
      <div>
        <p>Hello, {user.firstName}</p>
      </div>
    </div>
  );
}
