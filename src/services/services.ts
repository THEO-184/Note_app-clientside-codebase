import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// local imports
import { createNote, getAllNotes } from "./apis";
import { Note } from "../utils/interfaces";
import { getErrorMessage, messageNotification } from "../utils/functions";

export const useGetAllNotes = () => {
	const [notes, setNotes] = useState<Note[]>([]);
	const [count, setCount] = useState(0);
	const { error, isLoading } = useQuery(["notes"], getAllNotes, {
		onSuccess: (response) => {
			setNotes(response.notes);
			setCount(response.count);
		},
		onError: (error) => {
			const message = getErrorMessage(error);
			messageNotification("error", message);
		},
	});

	return { error, isLoading, notes, count };
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
