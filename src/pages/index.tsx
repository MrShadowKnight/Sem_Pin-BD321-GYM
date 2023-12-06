import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import s from "@/styles/Home.module.scss";
// import components

import React from "react";

const baseURL = "http://localhost:3001/coaches";

interface

const Home = () => {
	const [data, setData] = useState([]);
	const newData = {
		id: nanoid(),
		name: "Vlad",
		rating: 0.8,
	};

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
	console.log(data)
	
	const handleSave = async () => {
		await fetch(`${baseURL}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newData),
		});
	};

	const handleDelete = async (id) => {
		await fetch(`${baseURL}/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});
	};
	
	return (
		<>
			<div className={s.box}>e</div>
			<div className={s.box2}>
				<button onClick={handleSave}>new</button>
				<button>edit</button>
				<button>delete</button>
			</div>
			<ul>
				{data.map(item => (<li>{item.name: string}</li>))}
			</ul>
		</>
	);
};

export default Home;
