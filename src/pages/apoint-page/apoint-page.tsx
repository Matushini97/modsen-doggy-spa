import clsx from "clsx";
import s from "./apoint-page.module.scss";
import { Typography } from "@/components/ui/typography";
import { AppointForm } from "@/components/ui/appoint-form/appoint-form";
import { Card } from "@/components/ui/card";
import MapWidget from "@/components/ui/map-widget/map-widget";

const ApointPage = () => {
  return (
    <main>
      <div className={clsx(s.image)}>
        <Typography className={clsx(s.title)} variant="body1">
          Book An Appointment With Our Groom Specialist Today!
        </Typography>
      </div>

      <div className={clsx(s.mapForm)}>
        <AppointForm />
        <Card className={clsx(s.card)}>
          <MapWidget />
        </Card>
      </div>
    </main>
  );
};

export default ApointPage;
