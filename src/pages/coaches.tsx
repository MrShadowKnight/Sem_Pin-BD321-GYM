import CoachList from "@/components/CoachList";
import { useState, useEffect } from "react";
import s from "@/styles/coaches.module.scss";

const coaches = () => {
	return (
		<>
			<div className={s.box}>
				<img src="gymBackground.jpg" alt="" />
				<h1>OUR COACHES</h1>
				<h2>PAGES - COACHES</h2>
			</div>
			<div className={s.box2}>
				<div className={s.coaches__grid}>
					<CoachList />
				</div>
			</div>
		</>
	);
};

export default coaches;
