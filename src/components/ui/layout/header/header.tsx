import { Typography } from "../../typography";
import { NavLinks } from "../nav-links/nav-links";
import s from "./header.module.scss";
export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Typography variant="body1">Logo</Typography>
        <Typography variant="logo1">Luxe Animal Spa</Typography>
      </div>
      <NavLinks />
    </header>
  );
};
