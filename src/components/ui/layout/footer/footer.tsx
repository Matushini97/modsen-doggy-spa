"use client";
import clsx from "clsx";
import { Typography } from "../../typography";
import s from "./footer.module.scss";
import { FooterLinksLeft, FooterLinksRight } from "@/constants/links";
import { Button } from "../../button";
import { LinkList } from "../../links-list";
import { TextField } from "../../text-field";
import { SocialsList } from "../../socials";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <div className={s.separator}></div>
      <footer className={clsx(s.footer)}>
        <div>
          <LinkList links={FooterLinksLeft} title={"Customer Service"} />
        </div>
        <div>
          <div className={clsx(s.formWrapper)}>
            <Typography className={clsx(s.title)}>
              Subscribe to our Newsletter
            </Typography>
            <form className={clsx(s.form)} action="">
              <TextField placeholder="email" type="email" />
              <Button>Submit</Button>
            </form>
          </div>
          <div className={clsx(s.socialsWrapper)}>
            <Typography className={clsx(s.title)}>
              Connect With Us On Social Media
            </Typography>
            <SocialsList />
          </div>
        </div>
        <div>
          <LinkList links={FooterLinksRight} title={"Navigation"} />
        </div>
      </footer>
      <div className={clsx(s.bottomSeparator)}>
        <div className={clsx(s.textWrapper)}>
          <Button as={Link} href="/" variant="link">
            <Typography variant="body3">Coockie Policy</Typography>
          </Button>
          <Button as={Link} href="/" variant="link">
            <Typography variant="body3">Cookies Settings</Typography>
          </Button>
        </div>
        <div>
          <Button as={Link} href="/" variant="link">
            <Typography variant="body3">
              Copyright 2021 Luxe Animal Spa, LLC. All rights reserved.
            </Typography>
          </Button>
        </div>
        <div className={clsx(s.textWrapper)}>
          <Button as={Link} href="/" variant="link">
            <Typography variant="body3">Terms</Typography>
          </Button>
          <Button as={Link} href="/" variant="link">
            <Typography variant="body3">Privacy</Typography>
          </Button>
          <Button as={Link} href="/" variant="link">
            <Typography variant="body3">Security</Typography>
          </Button>
        </div>
      </div>
    </>
  );
};
