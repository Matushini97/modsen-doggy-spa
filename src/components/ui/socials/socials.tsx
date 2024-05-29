import { Socials } from "@/constants/social";
import Link from "next/link";
import clsx from "clsx";
import s from "./socials.module.scss"

export const SocialsList = () => {
  return (
    <div className={clsx(s.socialsList)}>
      {Socials.map((social) => {
        const Icon = social.icon;
        return (
          <Link href={social.href} key={social.name}>
            {Icon}
          </Link>
        );
      })}
    </div>
  );
};
