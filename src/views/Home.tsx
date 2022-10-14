import React, { createContext, useState, useContext } from "react";

// local imports";
import LeftColumn from "../components/LeftColumn";
import RightColumn from "../components/RightColumn";
import { useGetAllNotes } from "../services/services";
import { FetchNotesResponse, Note } from "../utils/interfaces";

interface AppContext {
	notes: Note[];
	count: number;
	isFetchingNotes: boolean;
}

const AppContext = createContext<AppContext | null>(null);

const HomePage = () => {
	const [notes, setNotes] = useState<Note[]>([]);
	const [count, setCount] = useState(0);

	const onFetchNotesSuccess = (res: FetchNotesResponse) => {
		setNotes(res.notes);
		setCount(res.count);
		console.log("res", res.notes);
	};
	const data = useGetAllNotes({ onFetchNotesSuccess });
	const isFetchingNotes = data.isLoading;

	const contextValues: AppContext = { notes, count, isFetchingNotes };

	return (
		<AppContext.Provider value={contextValues}>
			<div className="grid grid-cols-12 h-screen overflow-hidden">
				<LeftColumn />
				<RightColumn />
			</div>
		</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);

export default HomePage;
