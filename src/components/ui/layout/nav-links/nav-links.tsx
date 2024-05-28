"use client";
import { HeaderLinks } from "@/constants/links";
import s from "./nav-links.module.scss";
import { link } from "fs";
import { Button } from "../../button";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
export const NavLinks = () => {
  const pathname = usePathname();
  return (
    <nav className={s.navLinks}>
      {HeaderLinks.map((link) => {
        return (
          <Button
            as={Link}
            href={link.href}
            variant="link"
            key={link.name}
            className={clsx({
              'activeLink': pathname === link.href,
            })}
          >
            {link.name}
          </Button>
        );
      })}
    </nav>
  );
};
