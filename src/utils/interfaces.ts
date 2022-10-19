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

export type toastType = 'error' | 'success';

export type AsProps<T extends React.ElementType> = {
    as?: T;
};

export type PolymorphicComponentProp<
    T extends React.ElementType,
    Props = {}
> = React.PropsWithChildren<Props & AsProps<T>> &
    Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, Props>>;

<<<<<<< HEAD
export type PropsToOmit<
    T extends React.ElementType,
    P
> = keyof (AsProps<T> & P);
=======
export type PropsToOmit<T extends React.ElementType, P> = keyof (AsProps<T> &
    P);
>>>>>>> b8a57b80755f21a2a6f71bcfb2bef489f19e5b9d

export interface AppContextInterface {
    notes: Note[];
    count: number;
    isFetchingNotes: boolean;
    title: string;
    text: string;
    isUserEditing: boolean;
    searchNote: string;
    save: string;
    setIsUserEditing: React.Dispatch<React.SetStateAction<boolean>>;
    setNoteId: React.Dispatch<React.SetStateAction<string>>;
    setSearchNote: React.Dispatch<React.SetStateAction<string>>;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    setText: React.Dispatch<React.SetStateAction<string>>;
    handleChangeTitle: (e: React.FormEvent<HTMLInputElement>) => void;
<<<<<<< HEAD
    handleChangeText: (
        e: React.FormEvent<HTMLTextAreaElement>
    ) => void;
=======
    handleChangeText: (e: React.FormEvent<HTMLTextAreaElement>) => void;
>>>>>>> b8a57b80755f21a2a6f71bcfb2bef489f19e5b9d
    handleSearchNote: (e: React.FormEvent<HTMLInputElement>) => void;
    handleEditeNote: (
        id: string,
        e: React.FormEvent<HTMLButtonElement>
    ) => void;
    handleDeleteNote: (
        id: string,
        e: React.FormEvent<HTMLButtonElement>
    ) => void;
    handleAddNote: (e: React.FormEvent<HTMLButtonElement>) => void;
    handleEraseNotes: (e: React.FormEvent<HTMLButtonElement>) => void;
}
