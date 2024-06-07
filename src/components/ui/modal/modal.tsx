import { Portal } from "@/utils/providers/portal-provider";
import s from "./modal.module.scss";
import { FormValuesAppointment } from "../appoint-form/appoint-form";
import { Button } from "../button";
import clsx from "clsx";
import { Typography } from "../typography";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

type ModalProps = {
  onClose: () => void;
} & FormValuesAppointment;

export const AppointmentModal = (props: ModalProps) => {
  const {
    cardName,
    cardNumber,
    expirationDate,
    cvv,
    email,
    phone,
    lastName,
    time,
    message,
    name,
    onClose,
  } = props;

  const ref = useRef(null);

  useOnClickOutside(ref, onClose);

  return (
    <Portal>
      <div className={clsx(s.modal)} ref={ref}>
        <Typography className={clsx(s.text)} variant="body1">
          Name: {name}
        </Typography>
        <Typography className={clsx(s.text)} variant="body1">
          Last Name: {lastName}
        </Typography>
        <Typography className={clsx(s.text)} variant="body1">
          Email: {email}
        </Typography>
        <Typography className={clsx(s.text)} variant="body1">
          Phone: {phone}
        </Typography>
        <Typography className={clsx(s.text)} variant="body1">
          Card Name: {cardName}
        </Typography>
        <Typography className={clsx(s.text)} variant="body1">
          Card Number: {cardNumber}
        </Typography>
        <Typography className={clsx(s.text)} variant="body1">
          Expiration Date: {expirationDate}
        </Typography>
        <Typography className={clsx(s.text)} variant="body1">
          CVV: {cvv}
        </Typography>
        <Typography className={clsx(s.text)} variant="body1">
          Time: {time}
        </Typography>
        <Typography className={clsx(s.text)} variant="body1">
          Message: {message}
        </Typography>
        <Button onClick={onClose} variant="primary" className={clsx(s.btn)}>
          Confirm
        </Button>
      </div>
    </Portal>
  );
};
