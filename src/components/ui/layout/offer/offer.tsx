import clsx from "clsx";
import { Typography } from "../../typography";
import s from "./offer.module.scss";

export const Offer = () => {
  return (
    <div className={clsx(s.offer)}>
      <Typography variant="body2">
        Get 20% OFF When You Book A Spa Day For Your Animal Today!
      </Typography>
    </div>
  );
};
