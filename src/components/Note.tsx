import { memo } from "react";
import { Note as NoteInterface } from "../utils/interfaces";

interface Props {
	note: NoteInterface;
}

const Note = ({ note }: Props) => {
	const { body, createdAt, title, updatedAt } = note;
	const date_updated = new Date(updatedAt).toDateString();
	const date_created = new Date(createdAt).toDateString();

	return (
		<div className="p-4 bg-white mb-2 w-11/12 m-auto rounded-md shadow-sm cursor-pointer hover:shadow-md hover:drop-shadow-md">
			<div className="flex items-center justify-between">
				<p className="font-bold text-black text-base">{title}</p>
				<button className="text-rose-600">Delete</button>
			</div>
			<div className="">
				<span className="block text-base">{body}</span>
				<p>
					<small className="text-gray-500">last modified {date_updated}</small>
				</p>
				<p>
					<small className="text-gray-500">Last created {date_created}</small>
				</p>
			</div>
		</div>
	);
};

const MemoizedNote = memo(Note);

export default MemoizedNote;
