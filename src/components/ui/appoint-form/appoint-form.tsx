"use client";
import clsx from "clsx";
import { TextField } from "../text-field";
import s from "./appoint-form.module.scss";
import { Typography } from "../typography";
import { Button } from "../button";
import { PaymentMethods } from "../payment-methods/payment-methods";
import { Checkbox } from "../checkbox";
import { WorkingHours } from "@/constants/workingHours";
import { useForm } from "react-hook-form";
import { FormValues } from "@/pages/contact-page/contact-page";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Radio } from "../radio";
import { useState } from "react";
import { AppointmentModal } from "../modal/modal";

export type FormValuesAppointment = {
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  cardName: string;
  time: string;
} & FormValues;

const schema = yup.object({
  cardNumber: yup
    .string()
    .required("Please enter your card number")
    .min(16, "Please enter a valid card number"),
  expirationDate: yup
    .string()
    .required("Please enter your expiration date")
    .min(5, "Please enter a valid expiration date"),
  cvv: yup
    .string()
    .required("Please enter your cvv")
    .min(3, "Please enter a valid cvv"),
  cardName: yup
    .string()
    .required("Please enter your card name")
    .min(3, "Please enter a valid card name"),
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
  time: yup.string().required("Please select a time"),
});

export const AppointForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesAppointment>({
    resolver: yupResolver(schema),
  });

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<FormValuesAppointment>(
    {} as FormValuesAppointment
  );
  console.log(errors.time?.message);
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    setFormData(data);
    setShowModal(true);
  });
  return (
    <>
      <form onSubmit={onSubmit} className={s.form}>
        <Typography className={s.formTitle} variant="body1">
          Enter your information here
        </Typography>
        <div className={s.formFirstBlock}>
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
        <div className={s.formSecondBlock}>
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
        <div className={clsx(s.paymentSecondBlock)}>
          {WorkingHours.map(({ id, interval }) => {
            return (
              <Radio
                key={id}
                id={id}
                label={interval}
                value={interval}
                {...register("time")}
              />
            );
          })}
          {errors.time?.message && (
            <Typography variant="error" className={s.error}>
              {errors.time?.message}
            </Typography>
          )}
        </div>
        <textarea
          {...register("message")}
          placeholder="Your Message Goes Here..."
          className={clsx(s.textarea)}
        />
        <Typography variant="body1">Enter your payment information</Typography>
        <div className={clsx(s.payment)}>
          <TextField
            {...register("cardNumber")}
            placeholder="Credit Card Number"
            className={clsx(s.cardNumber)}
          />
          <div className={clsx(s.paymentSecondBlock)}>
            <TextField
              {...register("expirationDate")}
              placeholder="Expiry Date"
            />
            <TextField {...register("cvv")} placeholder="CVV" />
          </div>
          <TextField {...register("cardName")} placeholder="Name on Card" />
        </div>
        <PaymentMethods />
        <Typography className={clsx(s.text)} variant="body2">
          Please be advised cancelling within 24 hours of your scheduled
          appointment will result in a cancellation fee of $300.00.
        </Typography>
        <Button className={clsx(s.btn)} type="submit">
          Book Appointment
        </Button>
      </form>
      {showModal && (
        <AppointmentModal {...formData} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};
