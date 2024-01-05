import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import s from "@/styles/Home.module.scss";
// import components
import Hero from "@/components/hero.home/index";
import Classes from "@/components/classes.home/index";
import About from "@/components/about.home/index";

import React from "react";

const baseURL = "http://localhost:3001/coaches";

const Home = () => {
  const [data, setData] = useState([]);
  const handleGetData = async () => {
    try {
      await fetch(`${baseURL}`)
        .then((res) => res.json())
        .then((res) => setData(res));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    let subscribed = true;
    if (subscribed) {
      handleGetData();
    }
    return () => {
      subscribed = false;
    };
  }, []);
  return (
    <>
      <Hero />
      <Classes />
      <About />
    </>
  );
};

export default Home;
