import React from "react";
import s from "./footer.module.scss";

const Footer = () => {
	return (
		<>
			<footer className={s.footer}>
				<div className={s.footerMenu}>
					<div style={{ backgroundColor: "green" }}>1</div>
					<div style={{ backgroundColor: "purple" }}>2</div>
					<div style={{ backgroundColor: "lightgray" }}>3</div>
					<div style={{ backgroundColor: "darkblue" }}>4</div>
				</div>
				<div className={s.footerCopyright}>
					<div style={{ backgroundColor: "lightgreen" }}>1</div>
					<div style={{ backgroundColor: "purple" }}>2</div>
					<div style={{ backgroundColor: "lightgray" }}>3</div>
					<div style={{ backgroundColor: "darkblue" }}>4</div>
					<div style={{ backgroundColor: "lightgreen" }}>1</div>
					<div style={{ backgroundColor: "purple" }}>2</div>
					<div style={{ backgroundColor: "lightgray" }}>3</div>
					<div style={{ backgroundColor: "darkblue" }}>4</div>
					<div style={{ backgroundColor: "green" }}>1</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
