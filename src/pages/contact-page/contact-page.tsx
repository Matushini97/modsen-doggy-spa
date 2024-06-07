"use client";
import { Typography } from "@/components/ui/typography";
import clsx from "clsx";
import { Button, TextField } from "@/components/ui";
import s from "./contact-page.module.scss";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export type FormValues = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  message?: string;
};

const schema = yup.object({
  name: yup.string().required("Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Phone number is not valid")
    .required("Phone number is required"),
});

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <main className={s.contact}>
      <Typography className={clsx(s.title)} variant="body1">
        Contact
      </Typography>
      <div className={clsx(s.line)}></div>
      <Typography className={s.text} variant="body1">
        For customer service inquiries, please email us at{" "}
        <Button
          as={Link}
          href={"mailto:customerservice@luxeanimalspa.ca"}
          variant="link"
          className={s.email}
        >
          customerservice@luxeanimalspa.ca
        </Button>
        . For spa inquiries, please include your animal’s name for faster
        service. For your protection, please do not include your credit card or
        banking information details in your email.{" "}
      </Typography>
      <form onSubmit={onSubmit} className={clsx(s.form)}>
        <div className={clsx(s.formFirstBlock)}>
          <TextField
            {...register("name", { required: "Name is required" })}
            placeholder="First Name"
            type={"text"}
            errorMessage={errors.name?.message}
          />
          <TextField
            {...register("lastName")}
            placeholder="Last Name"
            type={"text"}
            errorMessage={errors.lastName?.message}
          />
        </div>
        <div className={clsx(s.formSecondBlock)}>
          <TextField
            {...register("email")}
            placeholder="Email"
            type={"email"}
            errorMessage={errors.email?.message}
          />
          <TextField
            {...register("phone")}
            placeholder="Phone Number"
            type={"tel"}
            errorMessage={errors.phone?.message}
          />
        </div>
        <textarea
          {...register("message")}
          placeholder="Your Message Goes Here..."
          className={clsx(s.textarea)}
        />
        <Button variant="primary" type="submit" className={s.btn}>
          Submit
        </Button>
      </form>
      <a href="customerservice@luxeanimalspa.ca" />
    </main>
  );
};

export default ContactPage;
