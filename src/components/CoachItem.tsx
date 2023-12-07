import coachInfo from "@/pages/coachInfo";
import Link from "next/link";

const CoachItem = ({ item }) => {
	console.log(item);
	return (
		<div>
			<Link href="./coachInfo">
				<img src={item.imgURL} />
			</Link>
		</div>
	);
};

export default CoachItem;
