import React from "react";
import s from "./about.module.scss";
import Link from "next/link";
import Image from "next/image";

// import components
import Card from "../card.about/index";

// import images
import homeGym from "@/assets/images/home-design.jpg";
import arrow from "@/assets/images/arrow.png";

const About = () => {
  return (
    <>
      <section className={s.about}>
        <div className={s.about__nulla}>
          <h3 className={s.about__nulla_subtitle}>ABOUT US</h3>
          <h1 className={s.about__nulla_title}>
            Nulla id
            <br />
            accumsan erat
          </h1>
          <h4 className={s.about__nulla_text}>
            Lorem ipsum dolor sit amet, consetetur .
          </h4>
          <div className={s.about__nulla_grid}>
            <Card />
            <Card />
          </div>
        </div>
        <div className={s.about__homeGym}>
          <Image className={s.about__homeGym_img} src={homeGym} alt="" />
          <div className={s.about__homeGym_text}>
            <h1 className={s.about__homeGym_text_title}>
              WANY TO PRACTICE <br />
              AT HOME ?
            </h1>
            <Link href={`/`} className={s.about__homeGym_text_link}>
              <p className={s.about__homeGym_text_link_text}>CLICK HERE</p>
              <Image
                className={s.about__homeGym_text_link_img}
                src={arrow}
                alt=""
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
