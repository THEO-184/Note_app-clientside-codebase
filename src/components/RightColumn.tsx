import React, { memo } from "react";
// local imports
import { useAppContext } from "../views/Home";
import MarkComponent from "./MarkComponent";
import Markdown from "./Markdown";

const RightColumn = () => {
	const context = useAppContext();

	return (
		<div className="col-span-8 p-4">
			<div className="flex items-center justify-end text-white ">
				<button
					className="bg-rose-500 hover:bg-rose-600 p-2 mb-2 rounded-xl text-xs"
					onClick={context?.handleEraseNotes}
				>
					Erase notes
				</button>
			</div>
			<div className="w-full h-10 mb-4">
				<input
					type="text"
					autoFocus
					value={context?.title}
					onChange={context?.handleChangeTitle}
					className="w-full block h-full p-5 border-2 border-gray-300 focus:border-gray-300 focus:outline-none"
					placeholder="Add title"
				/>
			</div>
			<div className="w-full">
				<textarea
					value={context?.text}
					className=" w-full block p-5 border-2 border-gray-300 focus:border-gray-300 focus:outline-none "
					rows={10}
					onChange={context?.handleChangeText}
					placeholder="write your note here..."
				></textarea>
			</div>
			<div className="bg-gray-200 h-full w-full p-4">
				<h4 className="font-bold">{context?.title}</h4>
				<Markdown children={context?.text!} component={MarkComponent} />
			</div>
		</div>
	);
};

const MemoizedRightColumn = memo(RightColumn);

export default MemoizedRightColumn;
