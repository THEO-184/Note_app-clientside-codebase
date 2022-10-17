import { updateNote } from "./../../services/apis";
import { useState, useEffect } from "react";
import { useUpdateNote } from "../../services/services";

interface Props {
	title: string;
	body: string;
	id: string;
	showDelete: boolean;
}

export const useDebounce = ({ title, body, id, showDelete }: Props) => {
	const updateNoteMutation = useUpdateNote(id);
	useEffect(() => {
		let updateNote: NodeJS.Timeout;
		if (showDelete) {
			updateNote = setTimeout(() => {
				updateNoteMutation.mutate({ body, title });
			}, 500);
		}

		return () => {
			clearTimeout(updateNote);
		};
	}, [title, body]);
};
