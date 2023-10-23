"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="px-24 py-5">
      <div className="w-full flex flex-row justify-evenly gap-2 items-center">
        <h1 className="font-medium text-2xl text-green-600">linkslySocial</h1>
        <div className="flex gap-4">
          <Button variant={"secondary"} asChild>
            <Link href="/sign-up">Sign Up</Link>
          </Button>
          <Button asChild className="hidden sm:flex">
            <Link href="/dashboard">Go to dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
