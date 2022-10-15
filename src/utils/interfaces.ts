export interface Note {
	_id: string;
	title: string;
	body: string;
	createdAt: string;
	updatedAt: string;
}

export interface FetchNotesResponse extends Note {
	count: number;
	notes: Note[];
}
export type onFetchNotes = (res: FetchNotesResponse) => void;

export type toastType = "error" | "success";

export interface AppContextInterface {
	notes: Note[];
	count: number;
	isFetchingNotes: boolean;
	title: string;
	text: string;
	showDelete: boolean;
	setShowDelete: React.Dispatch<React.SetStateAction<boolean>>;
	setTitle: React.Dispatch<React.SetStateAction<string>>;
	setText: React.Dispatch<React.SetStateAction<string>>;
	handleChangeTitle: (e: React.FormEvent<HTMLInputElement>) => void;
	handleChangeText: (e: React.FormEvent<HTMLTextAreaElement>) => void;
	handleEditeNote: (id: string, e: React.FormEvent<HTMLDivElement>) => void;
	handleAddNote: (e: React.FormEvent<HTMLButtonElement>) => void;
	handleEraseNotes: (e: React.FormEvent<HTMLButtonElement>) => void;
}
