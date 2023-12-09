import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import s from "@/styles/Home.module.scss";
// import components

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
			<div className={s.box}>e</div>
			<div className={s.box2}>
			</div>
		</>
	);
};

export default Home;
