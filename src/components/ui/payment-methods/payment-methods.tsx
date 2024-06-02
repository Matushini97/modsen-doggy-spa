import { Payments } from "@/constants/payment";
import s from "./payment-methods.module.scss";
import Image from "next/image";
import clsx from "clsx";

export const PaymentMethods = () => {
  return (
  <div className={clsx(s.wrapper)}>
    {Payments.map((payment, index) => {
        return (
            <Image className={clsx(s.icon)} key={index} src={payment.img} alt={payment.alt} width={34} height={24} />
        )
    })}
  </div>
);
};
