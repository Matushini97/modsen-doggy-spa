import clsx from "clsx";
import s from "./apoint-page.module.scss";
import { Typography } from "@/components/ui/typography";
import { AppointForm } from "@/components/ui/appoint-form/appoint-form";
import { Card } from "@/components/ui/card";

const ApointPage = () => {
  return (
    <main>
      <div className={clsx(s.image)}>
        <Typography className={clsx(s.title)} variant="body1">
          Book An Appointment With Our Groom Specialist Today!
        </Typography>
      </div>
      <Typography className={s.formTitle} variant="body1">
        Enter your information here
      </Typography>
      <div className={clsx(s.mapForm)}>
        <AppointForm />
        <Card>hi</Card>
      </div>
    </main>
  );
};

export default ApointPage;
