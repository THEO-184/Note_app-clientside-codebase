import React from "react";
import Note from "./Note";

const LeftColumn = () => {
	return (
		<div className="bg-red-300 col-span-4 overflow-y-scroll ">
			<div className="flex justify-between items-center p-4">
				<h6 className="text-rose-500 text-2xl italic font-bold">Notes</h6>
				<button className="text-indigo-500">Add</button>
			</div>
			<Note />
		</div>
	);
};

export default LeftColumn;
