"use client";
import clsx from "clsx";
import { Typography } from "../../typography";
import s from "./footer.module.scss";
import { FooterLinksLeft, FooterLinksRight } from "@/constants/links";
import { Button } from "../../button";
import { LinkList } from "../../links-list";
import { TextField } from "../../text-field";
import { SocialsList } from "../../socials";

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
    </>
  );
};
