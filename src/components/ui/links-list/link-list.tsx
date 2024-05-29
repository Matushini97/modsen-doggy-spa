import { Links } from "@/constants/links";
import clsx from "clsx";
import Link from "next/link";
import { Button } from "../button";
import { Typography } from "../typography";
import s from "./link-list.module.scss";

type LinkListProps = {
  links: Links;
  title: string;
};

export const LinkList = ({ links, title }: LinkListProps) => {
  return (
    <>
      <Typography className={clsx(s.title)}>{title}</Typography>
      <div className={clsx(s.footerLinks)}>
        {links.map((link) => {
          return (
            <Button
              className={clsx("")}
              as={Link}
              href={link.href}
              variant="link"
              key={link.name}
            >
              <Typography variant="body2">{link.name}</Typography>
            </Button>
          );
        })}
      </div>
    </>
  );
};
