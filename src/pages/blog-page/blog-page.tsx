import { Typography } from "@/components/ui/typography";
import clsx from "clsx";
import s from "./blog-page.module.scss";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export const BlogPage = () => {
  return (
    <article className={clsx(s.article)}>
      <Typography className={clsx(s.title)} variant="body1">
        The Bark Chronicles
      </Typography>
      <Typography className={clsx(s.subheading)} variant="subheading2">
        Where To Read All About The Bark!
      </Typography>
      <Typography className={clsx(s.subtitle)} variant="body1">
        Rex, The Dog Who Never Stops Playing ... Ever
      </Typography>
      <section className={s.section}>
        <Card className={clsx(s.cardImage)}>
          <Image
            src="/bark-two.png"
            alt="rex under blanket"
            width={550}
            height={550}
          />
        </Card>
        <Typography className={clsx(s.text)} variant="body1">
          Sometimes it is difficult to get dogs interested in the toys you buy
          for them. .. Luckily for Rex, everything he sees is a potential toy
          for him! Never let him around your valuables or any socks. He will
          steal them and you will never see them again...
        </Typography>
      </section>
      <section className={s.section}>
        <Typography className={clsx(s.text)} variant="body1">
          One day, we started noticing Rex was ripping apart all of our sheets
          when he was bored except for this blanket over here. Rex decided to
          spare this ugly white blanket that my grandmother gave me from her war
          days. We never threw it away because we felt bad. Seeing Rex sleep on
          this blanket made us happy. At least someone was using this blanket,
          even if we had to rebuy brand new sheets because we have such an
          amazing dog. We love you Rex.
        </Typography>
        <Card className={clsx(s.cardImage)}>
          <Image
            src="/bark-one.png"
            alt="Rex playing"
            width={550}
            height={550}
          />
        </Card>
      </section>
    </article>
  );
};
