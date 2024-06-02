"use client";
import clsx from "clsx";
import s from "./info-page.module.scss";
import { Typography } from "@/components/ui/typography";
import { TextField } from "@/components/ui";
import { DogCard } from "@/components/ui/dog-card/dog-card";

const InfoPage = () => {
  return (
    <div className={clsx(s.infoWrapper)}>
      <Typography className={clsx(s.title)}>INFO DOG</Typography>
      <div className={clsx(s.search)}>
        <Typography>
          Current Selection:{" "}
          <span className={clsx(s.selection)}>Beds&Cushion</span>
        </Typography>
        <div className={clsx(s.textField)}>
          <TextField isSearch={true} placeholder="Search" />
        </div>
      </div>
      <DogCard />
    </div>
  );
};

export default InfoPage;
