import React from "react";
import s from "./hero.module.scss";
import Image from "next/image";
import Link from "next/link";

// import img
import gym from "../../assets/images/gym.jpg";

const Hero = () => {
  return (
    <>
      <section className={s.hero}>
        <Image src={gym} alt="" objectFit="cover" layout="fill" />
        <div className={s.hero__box}>
          <div className={s.hero__text}>
            <h2>MAKE YOUR</h2>
            <h1>BODY</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
