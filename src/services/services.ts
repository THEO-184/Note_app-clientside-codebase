import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// local imports
import { createNote, deleteNote, getAllNotes, updateNote } from "./apis";
import { Note } from "../utils/interfaces";
import { getErrorMessage, messageNotification } from "../utils/functions";

export const useGetAllNotes = () => {
	const [notes, setNotes] = useState<Note[]>([]);
	const [count, setCount] = useState(0);
	const { isLoading, data } = useQuery(["notes"], getAllNotes, {
		onSuccess: (response) => {
			setNotes(response.notes);
			setCount(response.count);
		},
		onError: (error) => {
			const message = getErrorMessage(error);
			messageNotification("error", message);
		},
	});

	return { isLoading, notes, count, data, setNotes };
};

export const useCreateNote = () => {
	const queryClient = useQueryClient();
	return useMutation(createNote, {
		onSuccess: () => {
			queryClient.invalidateQueries(["notes"]);
			messageNotification("success", "note saved successfully");
		},
		onError: (error) => {
			const message = getErrorMessage(error);
			messageNotification("error", message);
		},
	});
};

export const useDeleteNote = (id: string) => {
	const queryClient = useQueryClient();
	return useMutation(() => deleteNote(id), {
		onSuccess: (response) => {
			queryClient.invalidateQueries(["notes"]);
			messageNotification("success", response.msg);
		},
		onError: (error) => {
			const message = getErrorMessage(error);
			messageNotification("error", message);
		},
	});
};

export const useUpdateNote = (id: string) => {
	const queryClient = useQueryClient();
	return useMutation(
		(data: Pick<Note, "title" | "body">) => updateNote(id, data),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(["notes"]);
			},
			onError: (error) => {
				const message = getErrorMessage(error);
				messageNotification("error", message);
			},
		}
	);
};
