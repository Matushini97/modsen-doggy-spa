import clsx from "clsx";
import s from "./home-page.module.scss";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui";
import { Card } from "@/components/ui/card";

export const HomePage = () => {
  return (
    <>
      <div className={clsx(s.imgWrapper)}>
        <div className={clsx(s.bookAppointment)}>
          <div className={clsx(s.titleWrapper)}>
            <Typography className={clsx(s.title)} variant="body1">
              Book your doggy
            </Typography>
            <Typography className={clsx(s.title)} variant="body1">
              a spa day!
            </Typography>
          </div>
          <Button>Book Appointment</Button>
        </div>
        <Image
          className={s.logo}
          src="/doggy-main.png"
          alt="doggy spa"
          width={1000}
          height={760}
        />
      </div>
      <div className={clsx(s.package)}>
        <Typography className={clsx(s.title)} variant="body1">
          Trending Spa Package
        </Typography>
        <div className={clsx(s.packageBody)}>
          <Card className={clsx(s.cardImage)}>
            <Image
              src="/doggy-spa-package.png"
              alt="doggy spa package"
              width={550}
              height={550}
            />
          </Card>
          <Card className={clsx(s.cardOffer)} isBorder={false}>
            <Typography className={clsx(s.subtitle)}>
              Doggy Facial and Fur <br /> Cleanse Treatment
            </Typography>
            <Typography className={clsx(s.subtitle)}>$269</Typography>
            <Typography className={s.text} variant="body2">
              Dogs receive a facial with our vegan, cruelty free face products
              and cleansing of any dirt left hiding in their beautiful fur
              (comes with a take home face products and animal treats).
            </Typography>
            <Button>See More Spa Packages</Button>
          </Card>
        </div>
      </div>
    </>
  );
};
