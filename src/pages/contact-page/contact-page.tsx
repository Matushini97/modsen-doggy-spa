'use client';
import { Typography } from "@/components/ui/typography";
import clsx from "clsx";
import { Button, TextField } from "@/components/ui";
import s from "./contact-page.module.scss";
import Link from "next/link";

const ContactPage = () => {
  return (
    <main className={s.contact}>
      <Typography className={clsx(s.title)} variant="body1">
        Contact
      </Typography>
      <div className={clsx(s.line)}></div>
      <Typography className={s.text} variant="body1">
        For customer service inquiries, please email us at{" "}
        <Button as={Link} href={'mailto:customerservice@luxeanimalspa.ca'} variant="link" className={s.email} >customerservice@luxeanimalspa.ca</Button>. For
        spa inquiries, please include your animal’s name for faster service. For
        your protection, please do not include your credit card or banking
        information details in your email.{" "}
      </Typography>
      <form action="" className={clsx(s.form)}>
        <div className={clsx(s.formFirstBlock)}>
         <TextField  placeholder="First Name"/>
         <TextField  placeholder="Last Name"/>
        </div>
        <div className={clsx(s.formSecondBlock)}>
         <TextField  placeholder="Email"/>
         <TextField  placeholder="Phone Number"/>
        </div>
        <textarea placeholder="Your Message Goes Here..." className={clsx(s.textarea)}/>
        <Button variant="primary" type="submit" className={s.btn}>Submit</Button>
      </form>
      <a href="customerservice@luxeanimalspa.ca" />
    </main>
  );
};

export default ContactPage;
