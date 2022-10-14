import { memo } from "react";
import { Note as NoteInterface } from "../utils/interfaces";
import Card from "./layout/Card";

interface Props {
	note: NoteInterface;
}

const Note = ({ note }: Props) => {
	const { body, createdAt, title, updatedAt } = note;
	const date_updated = new Date(updatedAt).toDateString();
	const date_created = new Date(createdAt).toDateString();

	return (
		<div className="w-11/12 m-auto">
			<Card>
				<div className="flex items-center justify-between">
					<p className="font-bold text-black text-base">{title}</p>
					<button className="text-rose-600">Delete</button>
				</div>
				<div className="">
					<span className="block text-base">{body}</span>
					<p>
						<small className="text-gray-500">
							last modified {date_updated}
						</small>
					</p>
					<p>
						<small className="text-gray-500">Last created {date_created}</small>
					</p>
				</div>
			</Card>
		</div>
	);
};

const MemoizedNote = memo(Note);

export default MemoizedNote;
