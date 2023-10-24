"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
      <div className="h-screen flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl font-medium text-emerald-700 text-center">
          We are currently building this site if you are interested join the
          waiting list. We will let you know through the mail when we are back on track, number of our current users is <span className="font-bold text-2xl">5</span>.
        </h1>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="email" placeholder="Email" />
          <Button type="submit">Subscribe</Button>
        </div>
      </div>
    </div>
  );
}
