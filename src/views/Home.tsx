import React, { createContext, useState, useContext } from "react";

// local imports";
import LeftColumn from "../components/LeftColumn";
import RightColumn from "../components/RightColumn";
import { useGetAllNotes } from "../services/services";
import { Note } from "../utils/interfaces";

interface AppContext {
	notes: Note[];
	count: number;
	isFetchingNotes: boolean;
	title: string;
	setTitle: React.Dispatch<React.SetStateAction<string>>;
	text: string;
	setText: React.Dispatch<React.SetStateAction<string>>;
	handleChangeTitle: (e: React.FormEvent<HTMLInputElement>) => void;
	handleChangeText: (e: React.FormEvent<HTMLTextAreaElement>) => void;
	handleEditeNote: (id: string, e: React.FormEvent<HTMLDivElement>) => void;
}

const AppContext = createContext<AppContext | null>(null);

const HomePage = () => {
	const { isLoading, count, notes } = useGetAllNotes();
	const isFetchingNotes = isLoading;
	const [title, setTitle] = useState("");
	const [text, setText] = useState("");

	const handleChangeTitle = (e: React.FormEvent<HTMLInputElement>) => {
		setTitle(e.currentTarget.value);
	};
	const handleChangeText = (e: React.FormEvent<HTMLTextAreaElement>) => {
		setText(e.currentTarget.value);
	};

	const handleEditeNote = (id: string, e: React.FormEvent<HTMLDivElement>) => {
		const note_details = notes.find((note) => note._id === id);
		if (!note_details) return;
		setTitle(note_details?.title);
		setText(note_details?.body);
	};

	const contextValues: AppContext = {
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
