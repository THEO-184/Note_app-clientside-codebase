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
	const [searchNote, setSearchNote] = useState("");
	const [showDelete, setShowDelete] = useState(false);
	const { isLoading, count, notes, data, setNotes } = useGetAllNotes();
	const addNoteMutation = useCreateNote();

	const isFetchingNotes = isLoading;
	console.log("notes", data?.notes);

	const handleChangeTitle = (e: React.FormEvent<HTMLInputElement>) => {
		setTitle(e.currentTarget.value);
		console.log("title", e.currentTarget.value);
	};
	const handleSearchNote = (e: React.FormEvent<HTMLInputElement>) => {
		const input = e.currentTarget.value.toLowerCase();
		const filterNotes = data?.notes.filter(
			(note) =>
				note.title.toLowerCase().includes(input) ||
				note.body.toLowerCase().includes(input)
		);
		if (!filterNotes) return;
		setNotes(filterNotes);
		setSearchNote(e.currentTarget.value);
	};

	const handleChangeText = (e: React.FormEvent<HTMLTextAreaElement>) => {
		setText(e.currentTarget.value);
	};

	const handleEraseNotes = (e: React.FormEvent<HTMLButtonElement>) => {
		setText("");
		setTitle("");
		setShowDelete(false);
	};

	const handleEditeNote = (id: string, e: React.FormEvent<HTMLDivElement>) => {
		const note_details = notes.find((note) => note._id === id);
		if (!note_details) return;
		setShowDelete(true);
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
		text,
		showDelete,
		searchNote,
		setShowDelete,
		setSearchNote,
		setTitle,
		setText,
		handleChangeTitle,
		handleChangeText,
		handleSearchNote,
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
