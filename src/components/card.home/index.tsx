import React from "react";
import Image from "next/image";
import Link from "next/link";
import s from "./card.module.scss";

import human from "@/assets/images/human.png";
import arrow from "@/assets/images/arrow.png";

const Card = () => {
  return (
    <>
      <div className={s.card}>
        <Image
          className={s.card__img}
          src={human}
          width={57}
          height={70}
          alt=""
        />
        <h2>GYM</h2>
        <h1>MORBI SODALES</h1>
        <div>
          <Link href={`/`}>READ MORE</Link>
          <Link href={`/`}>
            <Image src={arrow} width={41} height={13} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
