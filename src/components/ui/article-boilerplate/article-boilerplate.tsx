import clsx from "clsx";
import { Card } from "../card";
import { Typography } from "../typography";

import s from "./article-boilerplate.module.scss";

import Image from "next/image";

export type Section = {
  isReversed: boolean;
  text: string;
  imgSrc: string;
  altImg: string;
};
export type ArticleType = {
  title: string;
  subheading: string;
  subtitle: string;
  sections: Section[];
};
export const ArticleBoilerplate = (props: ArticleType) => {
  const { title, subheading, subtitle, sections } = props;
  return (
    <article className={clsx(s.article)}>
      <Typography className={clsx(s.title)} variant="body1">
        {title}
      </Typography>
      <Typography className={clsx(s.subheading)} variant="subheading2">
        {subheading}
      </Typography>
      <Typography className={clsx(s.subtitle)} variant="body1">
        {subtitle}
      </Typography>
      {sections.map(({ isReversed, text, imgSrc, altImg }, index) => {
        return (
          <section
            className={clsx(s.section, isReversed && s.reversed)}
            key={index}
          >
            <Card className={clsx(s.cardImage)}>
              <Image src={imgSrc} alt={altImg} width={550} height={550} />
            </Card>
            <Typography className={clsx(s.text)} variant="body1">
              {text}
            </Typography>
          </section>
        );
      })}
    </article>
  );
};
