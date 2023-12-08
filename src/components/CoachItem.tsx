import coachInfo from "@/pages/coachInfo";
import Link from "next/link";

const CoachItem = ({ item }) => {
	return (
		<Link href="./coaches">
			<img src={item.imgURL} />
		</Link>
	);
};

export default CoachItem;
