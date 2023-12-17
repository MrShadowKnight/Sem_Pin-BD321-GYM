import Link from "next/link";
import s from "./header.module.scss";

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.header__icon}>
          <img src="dumpbell2.svg" alt="" />
          <p>ANGEL FIT</p>
        </div>
        <div></div>
        <div></div>
        <Link className={s.header__link} href={`/`}>
          HOME
        </Link>
        <Link className={s.header__link} href={`/coaches`}>
          COACHES
        </Link>
        <Link className={s.header__link} href={`/`}>
          ARTICLES
        </Link>
        <div></div>
        <div></div>
        <Link className={s.signUp__link} href={`/`}>
          GET STARTED FOR FREE
        </Link>
      </header>
    </>
  );
};

export default Header;
