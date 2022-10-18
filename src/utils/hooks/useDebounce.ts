import { updateNote } from "../../services/apis";
import { useState, useEffect } from "react";
import { useUpdateNote } from "../../services/services";

interface Props {
	title: string;
	body: string;
	id: string;
	isUserEditing: boolean;
}

export const useDebounce = ({ title, body, id, isUserEditing }: Props) => {
	const { updateNoteMutation, save, setSave } = useUpdateNote(id);

	useEffect(() => {
		let updateNote: NodeJS.Timeout;
		if (isUserEditing && id) {
			setSave("saving...");
			updateNote = setTimeout(() => {
				updateNoteMutation.mutate({ body, title });
			}, 500);
		}

		return () => {
			clearTimeout(updateNote);
		};
	}, [title, body]);
	return { save, setSave };
};
