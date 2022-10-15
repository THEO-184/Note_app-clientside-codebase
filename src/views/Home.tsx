import React, { createContext, useState, useContext } from "react";

// local imports";
import LeftColumn from "../components/LeftColumn";
import RightColumn from "../components/RightColumn";
import { useCreateNote, useGetAllNotes } from "../services/services";
import { AppContextInterface, Note } from "../utils/interfaces";

const AppContext = createContext<AppContextInterface | null>(null);

const HomePage = () => {
	const [title, setTitle] = useState("");
	const [text, setText] = useState("");
	const { isLoading, count, notes } = useGetAllNotes();
	const addNoteMutation = useCreateNote();

	const isFetchingNotes = isLoading;

	const handleChangeTitle = (e: React.FormEvent<HTMLInputElement>) => {
		setTitle(e.currentTarget.value);
	};
	const handleChangeText = (e: React.FormEvent<HTMLTextAreaElement>) => {
		setText(e.currentTarget.value);
	};

	const handleEraseNotes = (e: React.FormEvent<HTMLButtonElement>) => {
		setText("");
		setTitle("");
	};

	const handleEditeNote = (id: string, e: React.FormEvent<HTMLDivElement>) => {
		const note_details = notes.find((note) => note._id === id);
		if (!note_details) return;
		setTitle(note_details?.title);
		setText(note_details?.body);
	};

	const handleAddNote = (e: React.FormEvent<HTMLButtonElement>) => {
		addNoteMutation.mutate({ body: text, title });
		setText("");
		setTitle("");
	};

	const contextValues: AppContextInterface = {
		notes,
		count,
		isFetchingNotes,
		title,
		setTitle,
		text,
		setText,
		handleChangeTitle,
		handleChangeText,
		handleEditeNote,
		handleAddNote,
		handleEraseNotes,
	};

	return (
		<AppContext.Provider value={contextValues}>
			<div className="grid grid-cols-12 h-screen overflow-hidden divide-x divide-gray-300">
				<LeftColumn />
				<RightColumn />
			</div>
		</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);

export default HomePage;
