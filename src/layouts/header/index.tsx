import Link from "next/link";
import s from "./header.module.scss";

const Header = () => {
  return (
		<>
			<div className={s.header}>
        <nav>
          <Link href="/">home</Link>
          <Link href="./coaches">coaches</Link>
        </nav>
      </div>
		</>
  );
};

export default Header;
