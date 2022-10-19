import axios from 'axios';
import { Note } from '../utils/interfaces';

const api = axios.create({
<<<<<<< HEAD
    baseURL:
        'https://noteapp-backend-production-22b6.up.railway.app/api/v1',
=======
    baseURL: 'https://noteapp-backend-production-22b6.up.railway.app/api/v1',
>>>>>>> b8a57b80755f21a2a6f71bcfb2bef489f19e5b9d
});

export const getAllNotes = async (): Promise<{
    count: number;
    notes: Note[];
}> => {
    const res = await api.get('/notes');
    return res.data;
};

export const createNote = async (
    data: Pick<Note, 'title' | 'body'>
): Promise<{ note: Note }> => {
    const res = await api.post('/notes', data);
    return res.data;
};

<<<<<<< HEAD
export const deleteNote = async (
    id: string
): Promise<{ msg: string }> => {
=======
export const deleteNote = async (id: string): Promise<{ msg: string }> => {
>>>>>>> b8a57b80755f21a2a6f71bcfb2bef489f19e5b9d
    const res = await api.delete(`/notes/${id}`);
    return res.data;
};

export const updateNote = async (
    id: string,
    data: Pick<Note, 'title' | 'body'>
): Promise<{ note: Note }> => {
    const res = await api.put(`/notes/${id}`, data);
    return res.data;
};
