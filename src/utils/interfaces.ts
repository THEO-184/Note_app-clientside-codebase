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
