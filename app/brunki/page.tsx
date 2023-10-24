'use client'
import Image from "next/image";
import SocialsIcons from "@/components/socialsIcons";
import Link from "next/link";

export default function Brunki() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2 ">
        <Image
          className="rounded-full"
          src={"https://avatars.githubusercontent.com/u/75663251?v=4"}
          alt="profile"
          width={50}
          height={50}
        />
        <h1 className="font-medium text-2xl text-center text-zinc-700">
          Brunki
        </h1>
        <p className="w-40 text-center text-zinc-600">
          Fullstack developer working from home, watches anime and drinks
          monster all day. And writes <Link href={'/brunki/blog'}>blog</Link>.
        </p>
        <SocialsIcons />
      </div>
    </div>
  );
}
