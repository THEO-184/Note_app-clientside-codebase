import React, { memo } from "react";
import { useDeleteNote } from "../services/services";

import { Note as NoteInterface } from "../utils/interfaces";
import { useAppContext } from "../views/Home";
import Button from "./Forms/Buttons/Button";
import Box from "./layout/Box";
import Card from "./layout/Card";
import MarkComponent from "./MarkComponent";
import Markdown from "./Markdown";

interface Props {
	note: NoteInterface;
}

const Note = ({ note }: Props) => {
	const deleteNoteMutation = useDeleteNote(note._id);
	const { body, createdAt, title, updatedAt } = note;
	const date_updated = new Date(updatedAt).toDateString();
	const date_created = new Date(createdAt).toDateString();

	const context = useAppContext();

	const handleDeleteNote = (e: React.FormEvent<HTMLButtonElement>) => {
		context?.setIsUserEditing(false);
		context?.setText("");
		context?.setTitle("");
		deleteNoteMutation.mutate();
	};

	return (
		<div
			className="w-11/12 m-auto"
			onClick={(e) => context?.handleEditeNote(note._id, e)}
		>
			<Card>
				<Box className="flex items-center justify-between mb-1 sm:mb-0 ">
					<p className="font-bold text-black text-xs sm:text-base">{title}</p>
					<Button
						className="text-xs sm:text-base text-rose-600 z-40"
						onClick={handleDeleteNote}
					>
						Delete
					</Button>
				</Box>
				<Box>
					<Markdown children={body} component={MarkComponent} />
					<p>
						<small className="text-xs  text-gray-500">
							last updated {date_updated}
						</small>
					</p>
					<p>
						<small className="text-xs  text-gray-500">
							last created {date_created}
						</small>
					</p>
				</Box>
			</Card>
		</div>
	);
};

const MemoizedNote = memo(Note);

export default MemoizedNote;
