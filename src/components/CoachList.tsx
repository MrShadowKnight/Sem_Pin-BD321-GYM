import { useState, useEffect } from "react";
import CoachItem from "./CoachItem";

const baseURL = "http://localhost:3001/coaches";

const CoachList = () => {
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
			{data.map((item) => (
				<CoachItem item={item} key={item.id} />
			))}
		</>
	);
};

export default CoachList;
