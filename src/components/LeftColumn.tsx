import React, { memo } from "react";
import { useAppContext } from "../views/Home";
import Note from "./Note";

const LeftColumn = () => {
	const context = useAppContext();

	return (
		<div className="col-span-4  overflow-auto left-col">
			<div className="flex justify-between items-center p-4">
				<h6 className="text-rose-500 text-2xl italic font-bold">TheoNote</h6>
			</div>
			<div className="w-11/12 m-auto h-10 mb-4">
				<input
					type="text"
					autoFocus
					value={context?.searchNote}
					onChange={context?.handleSearchNote}
					className="w-full block h-full p-5 border-2 border-gray-300 focus:border-gray-300 focus:outline-none"
					placeholder="search notes"
				/>
			</div>

			{context?.isFetchingNotes ? (
				<div className="col-span-4 overflow-auto left-col">
					<h1>Loading...</h1>
				</div>
			) : (
				context?.notes.map((note) => {
					return <Note note={note} key={note._id} />;
				})
			)}
		</div>
	);
};

const memoizedLeftColumn = memo(LeftColumn);

export default memoizedLeftColumn;
