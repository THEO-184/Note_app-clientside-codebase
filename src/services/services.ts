import { getAllNotes } from "./apis";
import { useQuery } from "@tanstack/react-query";
import { onFetchNotes } from "../utils/interfaces";

export const useGetAllNotes = ({
	onFetchNotesSuccess,
}: {
	onFetchNotesSuccess: onFetchNotes;
}) => {
	return useQuery(["notes"], getAllNotes, {
		onSuccess: onFetchNotesSuccess,
	});
};
