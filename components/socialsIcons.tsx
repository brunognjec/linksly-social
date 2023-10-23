import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function SocialsIcons() {
  return (
    <div className="flex flex-row gap-4">
      <Link href={"https://twitter.com/Brunki2"}>
        <Twitter />
      </Link>
      <Link href={"https://twitter.com/Brunki2"}>
        <Github />
      </Link>
      <Link href={"https://twitter.com/Brunki2"}>
        <Linkedin />
      </Link>
      <Link href={"https://twitter.com/Brunki2"}>
        <Instagram />
      </Link>
    </div>
  );
}
