import CoachList from "@/components/CoachList";
import { useState, useEffect } from "react";
import s from "@/styles/coaches.module.scss";

const coaches = () => {
	return (
		<div className={s.box}>
			<CoachList />
		</div>
	);
};

export default coaches;
