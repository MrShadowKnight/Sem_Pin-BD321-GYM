import React from "react";
import s from "./header.module.scss";

const Header = () => {
  return (
		<>
			<div className={s.header}>
        <nav>
          <a href="/">home</a>
          <a href="./coaches">coaches</a>
        </nav>
      </div>
		</>
  );
};

export default Header;
