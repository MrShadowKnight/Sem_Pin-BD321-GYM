import React from "react";
import s from "./card.module.scss";
import Link from "next/link";
import Image from "next/image";

// import images
import human from "@/assets/images/human.png";

const Card = () => {
  return (
    <>
      <div className={s.card}>
        <div className={s.card__title}>
          <Image
            className={s.card__title_img}
            width={57}
            height={70}
            src={human}
            alt=""
          ></Image>
          <div className={s.card__title_text}>
            <h2>GYM</h2>
            <h1>Morbi sodales</h1>
          </div>
        </div>
        <div className={s.card__text}>
          <p>
            consetetur sadipscing elitr,
            <br />
            sed diam nonumy eirmod
          </p>
          <h3>
            READ
            <br />
            MORE
          </h3>
        </div>
      </div>
    </>
  );
};

export default Card;
