import React from "react";
import s from "./footer.module.scss";
import Link from "next/link";
import Image from "next/image";
// import images
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
import youtube from "../../assets/images/youtube.png";

const Footer = () => {
  return (
    <>
      <footer className={s.footer}>
        <div className={s.footer__Menu}>
          <div className={s.footer__box1}>
            <div className={s.footer__colum1}>
              <div className={s.footer__colum1_titles}>
                <img className={s.footer__colum1_img} src="Dumpbell.svg" />
                <h1 className={s.footer__colum1_title}>ANGEL FIT</h1>
              </div>
              <p className={s.footer__colum1_text}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea
              </p>
            </div>

            <div className={s.footer__colum2}>
              <h1 className={s.footer__colum2_title}>INFORMATION</h1>
              <Link className={s.footer__colum2_link} href="">
                ABOUT US
              </Link>
              <Link className={s.footer__colum2_link} href="">
                CUSTOMERS
              </Link>
              <Link className={s.footer__colum2_link} href="">
                CLIENTS
              </Link>
              <Link className={s.footer__colum2_link} href="">
                PORTFOLIO
              </Link>
            </div>
          </div>

          <div className={s.footer__box2}>
            <div className={s.footer__colum3}>
              <h1 className={s.footer__colum3_title}>SERVICES</h1>
              <Link className={s.footer__colum3_link} href="">
                TRAINING AT HOME
              </Link>
              <Link className={s.footer__colum3_link} href="">
                FITNESS FOR KIDS
              </Link>
              <Link className={s.footer__colum3_link} href="">
                ONLINE COACH
              </Link>
              <Link className={s.footer__colum3_link} href="">
                CHAMPIONS
              </Link>
            </div>

            <div className={s.footer__colum4}>
              <h1 className={s.footer__colum4_title}>
                SUBSCRIBE TO NEWSLETTER
              </h1>
              <form>
                <input
                  className={s.footer__colum4_input}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="EMAIL"
                />
                <input
                  className={s.footer__colum4_submit}
                  type="submit"
                  value="SUBSCRIBE"
                />
              </form>
            </div>
          </div>
        </div>
        <div className={s.footer__Copyright}>
          <nav>
            <ul className={s.footer__Copyright_nav1}>
              <li>
                <p>Copyright @ 2020 All Rights Reserved.</p>
              </li>
              <li>
                <Link href="tel:+614434333">+614 434 333</Link>
              </li>
              <li>
                <Link href="emailto:info@angelclub.com">
                  info@angelclub.com
                </Link>
              </li>
              <li>
                <p>Sydney, Australia</p>
              </li>
            </ul>
            <ul className={s.footer__Copyright_nav2}>
              <li className={s.footer__Copyright_nav2_icon}>
                <Link href="https://rt.pornhub.com/gayporn" target="_blank">
                  <Image src={facebook} height={36} width={36} alt=""></Image>
                </Link>
              </li>
              <li className={s.footer__Copyright_nav2_icon}>
                <Link href="https://rt.pornhub.com/gayporn" target="_blank">
                  <Image src={instagram} height={36} width={36} alt=""></Image>
                </Link>
              </li>
              <li className={s.footer__Copyright_nav2_icon}>
                <Link href="https://rt.pornhub.com/gayporn" target="_blank">
                  <Image src={linkedin} height={36} width={36} alt=""></Image>
                </Link>
              </li>
              <li className={s.footer__Copyright_nav2_icon}>
                <Link href="https://rt.pornhub.com/gayporn" target="_blank">
                  <Image src={twitter} height={36} width={36} alt=""></Image>
                </Link>
              </li>
              <li className={s.footer__Copyright_nav2_icon}>
                <Link href="https://rt.pornhub.com/gayporn" target="_blank">
                  <Image src={youtube} height={36} width={36} alt=""></Image>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;
