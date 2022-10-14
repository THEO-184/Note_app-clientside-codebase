import React from "react";
import { useAppContext } from "../views/Home";
import Note from "./Note";

const LeftColumn = () => {
	const data = useAppContext();

	if (data && data.isFetchingNotes) {
		return <h1>"Loading..."</h1>;
	}

	return (
		<div className="col-span-4 border-r-2 border-r-slate-200 overflow-auto left-col">
			<div className="flex justify-between items-center p-4">
				<h6 className="text-rose-500 text-2xl italic font-bold">Notes</h6>
				<button className="text-indigo-500">Add</button>
			</div>
			{data &&
				data.notes.map((note) => {
					return <Note note={note} />;
				})}
		</div>
	);
};

export default LeftColumn;
