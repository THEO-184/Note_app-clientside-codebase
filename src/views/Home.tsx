import React, { createContext, useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";

// local imports";
import LeftColumn from "../components/LeftColumn";
import RightColumn from "../components/RightColumn";
import {
	useCreateNote,
	useDeleteNote,
	useGetAllNotes,
} from "../services/services";
import { useDebounce } from "../utils/hooks/useDebounce";
import { AppContextInterface, Note } from "../utils/interfaces";

const AppContext = createContext<AppContextInterface | null>(null);

const HomePage = () => {
	const [title, setTitle] = useState("");
	const [text, setText] = useState("");
	const [searchNote, setSearchNote] = useState("");
	const [isUserEditing, setIsUserEditing] = useState(false);
	const [noteId, setNoteId] = useState("");
	const deleteNoteMutation = useDeleteNote();
	const { isLoading, count, notes, data, setNotes } = useGetAllNotes();
	const { save } = useDebounce({
		title,
		body: text,
		id: noteId,
		isUserEditing,
	});
	const addNoteMutation = useCreateNote();

	const isFetchingNotes = isLoading;

	const handleChangeTitle = (e: React.FormEvent<HTMLInputElement>) => {
		setTitle(e.currentTarget.value);
		if (!isUserEditing) localStorage.setItem("title", e.currentTarget.value);
	};
	const handleSearchNote = (e: React.FormEvent<HTMLInputElement>) => {
		const user_input = e.currentTarget.value.toLowerCase();
		const filterNotes = data?.notes.filter(
			(note) =>
				note.title.toLowerCase().includes(user_input) ||
				note.body.toLowerCase().includes(user_input)
		);
		if (!filterNotes) return;
		setNotes(filterNotes);
		setSearchNote(e.currentTarget.value);
	};

	const handleChangeText = (e: React.FormEvent<HTMLTextAreaElement>) => {
		setText(e.currentTarget.value);
		if (!isUserEditing) localStorage.setItem("body", e.currentTarget.value);
	};

	const handleEraseNotes = (e: React.FormEvent<HTMLButtonElement>) => {
		setText("");
		setTitle("");
		setIsUserEditing(false);
	};

	const handleEditeNote = (
		id: string,
		e: React.FormEvent<HTMLButtonElement>
	) => {
		const note_details = notes.find((note) => note._id === id);
		if (!note_details) return;
		setIsUserEditing(true);
		setTitle(note_details?.title);
		setText(note_details?.body);
		setNoteId(id);
	};

	const handleDeleteNote = (
		id: string,
		e: React.FormEvent<HTMLButtonElement>
	) => {
		toast.loading("deleting note...");
		setNoteId(id);
		deleteNoteMutation.mutate(id);
	};

	const handleAddNote = (e: React.FormEvent<HTMLButtonElement>) => {
		toast.loading("saving note...");
		addNoteMutation.mutate({ body: text, title });
		localStorage.removeItem("title");
		localStorage.removeItem("body");
	};

	useEffect(() => {
		const storageTitle = localStorage.getItem("title");
		if (storageTitle) setTitle(storageTitle);
		const storagBody = localStorage.getItem("body");
		if (storagBody) setText(storagBody);
	}, []);

	const contextValues: AppContextInterface = {
		notes,
		count,
		isFetchingNotes,
		title,
		text,
		isUserEditing,
		searchNote,
		save,
		setIsUserEditing,
		setNoteId,
		setSearchNote,
		setTitle,
		setText,
		handleChangeTitle,
		handleChangeText,
		handleSearchNote,
		handleEditeNote,
		handleDeleteNote,
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
