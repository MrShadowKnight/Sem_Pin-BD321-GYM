import React from "react";
import s from "./about.module.scss";
import Link from "next/link";
import Image from "next/image";

// import components
import Card from "../card.about/index";

const About = () => {
  return (
    <>
      <section className={s.about}>
        <div className={s.about__nulla}>
          <h3 className={s.about__subtitle}>ABOUT US</h3>
          <h1 className={s.about__title}>
            Nulla id
            <br />
            accumsan erat
          </h1>
          <h4 className={s.about__text}>
            Lorem ipsum dolor sit amet, consetetur .
          </h4>
          <div className={s.about__grid}>
            <Card />
            <Card />
          </div>
        </div>
        <div className={s.about__box2}></div>
      </section>
    </>
  );
};

export default About;
