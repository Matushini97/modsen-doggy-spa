import clsx from "clsx";
import { Typography } from "../typography";
import s from "./gallery.module.scss";
import { Card } from "../card";
import Image from "next/image";
import { Good } from "@/constants/goods";
import { Button } from "../button";
import { ComponentPropsWithoutRef } from "react";

type GalleryProps = {
  title: string;
  goods: Good[];
} & ComponentPropsWithoutRef<'div'>;

export const Gallery = (props: GalleryProps) => {
  const { title, goods, className } = props;
  return (
    <div className={clsx(className)}>
      <Typography className={clsx(s.title)} variant="body1">
        {title}
      </Typography>
      <div>
        <div className={clsx(s.imgWrapper)}>
          {goods.map(({ description, price, img }) => {
            return (
              <section key={img}>
                <Card className={clsx(s.cardImage)}>
                  <Image
                    src={img}
                    alt="doggy spa package"
                    width={420}
                    height={420}
                  />
                </Card>
                <div className={clsx(s.description)}>
                  <Typography variant="body2">{description}</Typography>
                  <Typography variant="body2">Luxe Animal Spa</Typography>
                </div>
                <Typography variant="body1">{price}</Typography>
              </section>
            );
          })}
        </div>
        <div className={clsx(s.btn)}>
          <Button>See More {title}</Button>
        </div>
      </div>
    </div>
  );
};
