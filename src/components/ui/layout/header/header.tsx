import { NavLinks } from '../nav-links/nav-links'
import s from './header.module.scss'
export const Header = () => {
    return (
        <header className={s.header}>
            <h3 className={s.logo}>Logo</h3>
            <NavLinks />
        </header>
    )
}