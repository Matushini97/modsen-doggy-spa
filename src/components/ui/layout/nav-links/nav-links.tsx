"use client";
import { HeaderLinks } from "@/constants/links";
import s from "./nav-links.module.scss";
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
            className={clsx(pathname === link.href && s.activeLink)}
            as={Link}
            href={link.href}
            variant="link"
            key={link.name}
          >
            {link.name}
          </Button>
        );
      })}
    </nav>
  );
};
