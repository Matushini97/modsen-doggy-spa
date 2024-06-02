"use client";
import clsx from "clsx";
import { TextField } from "../text-field";
import s from "./appoint-form.module.scss";
import { Typography } from "../typography";
import { Button } from "../button";
import { PaymentMethods } from "../payment-methods/payment-methods";

export const AppointForm = () => {
  return (
    <form className={s.form}>
      <div className={s.formFirstBlock}>
        <TextField placeholder="First Name" />
        <TextField placeholder="Last Name" />
      </div>
      <div className={s.formSecondBlock}>
        <TextField placeholder="Email" />
        <TextField placeholder="Phone Number" />
      </div>
      <textarea
        placeholder="Your Message Goes Here..."
        className={clsx(s.textarea)}
      />
      <Typography variant="body1">Enter your payment information</Typography>
      <div className={clsx(s.payment)}>
        <TextField
          placeholder="Credit Card Number"
          className={clsx(s.cardNumber)}
        />
        <div className={clsx(s.paymentSecondBlock)}>
          <TextField placeholder="Expiry Date" />
          <TextField placeholder="CVV" />
        </div>
        <TextField placeholder="Name on Card" />
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
  );
};
