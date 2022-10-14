import { useState } from "react";
import { getAllNotes } from "./apis";
import { useQuery } from "@tanstack/react-query";
import { Note, onFetchNotes } from "../utils/interfaces";

export const useGetAllNotes = () => {
	const [notes, setNotes] = useState<Note[]>([]);
	const [count, setCount] = useState(0);
	const { error, isLoading } = useQuery(["notes"], getAllNotes, {
		onSuccess: (response) => {
			setNotes(response.notes);
			setCount(response.count);
		},
		onError: (error) => {
			console.log("users error", error);
		},
	});

	return { error, isLoading, notes, count };
};
