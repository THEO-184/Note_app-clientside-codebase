import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="p-4 bg-white mb-2 w-full rounded-md shadow-sm cursor-pointer hover:shadow-md hover:drop-shadow-md">
			{children}
		</div>
	);
};

export default Card;
