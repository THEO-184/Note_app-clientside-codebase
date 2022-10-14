import React from "react";
import LeftColumn from "../components/LeftColumn";
import RightColumn from "../components/RightColumn";

const HomePage = () => {
	return (
		<div className="grid grid-cols-12 h-screen">
			<LeftColumn />
			<RightColumn />
		</div>
	);
};

export default HomePage;
