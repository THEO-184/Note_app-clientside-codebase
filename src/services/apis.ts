import axios from "axios";
import { Note } from "../utils/interfaces";

const api = axios.create({
	baseURL: "http://localhost:5000/api/v1",
});

export const getAllNotes = async (): Promise<{
	count: number;
	notes: Note[];
}> => {
	const res = await api.get("/notes");
	return res.data;
};

export const createNote = async (
	data: Pick<Note, "title" | "body">
): Promise<{ note: Note }> => {
	const res = await api.post("/notes", data);
	return res.data;
};
