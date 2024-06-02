import Image from "next/image";
import { Typography } from "../typography";
import s from "./dog-card.module.scss";
import clsx from "clsx";

export const DogCard = () => {
  return (
    <article>
      <div className={clsx(s.cardWrapper)}>
        <Image
          src={"/husky.png"}
          alt="Siberian Husky"
          width={729}
          height={486}
          className={clsx(s.img)}
        />
        <Typography className={clsx(s.dogName)} variant="body1">
          Siberian Husky
        </Typography>
      </div>
      <div className={s.descriptionWrapper}>
        <Typography className={s.description} variant="body1">
          Energy: 5
        </Typography>
        <Typography className={s.description} variant="body1">
          Min life expectancy: 5
        </Typography>
        <Typography className={s.description} variant="body1">
          Good with strangers: 5
        </Typography>
        <Typography className={s.description} variant="body1">
          Good with other dogs: 5
        </Typography>
      </div>
    </article>
  );
};
