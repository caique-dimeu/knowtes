import Note from "../interfaces/note";

const baseUrl = 'localhost:3000';

export const getNotes = async (userId: string): Promise<Note[]> => {
    const request = await fetch(`${baseUrl}/notes?userId=${userId}`);
    const data: Note[] = await request.json();
    return data;
}


export const createNote = async (note: Note): Promise<{ data: Note[], status: number }> => {
    const formData = new FormData();
    formData.append('userId', 'sdfklsçdf');
    formData.append('content', note.content);
    formData.append('datetime', new Date().toISOString());
    formData.append('title', note.title);
    formData.append('categorie', note.categorie);
    formData.append('noteId', note.noteId);

    const request = await fetch(`${baseUrl}/notes`, {
        method: 'POST',
        body: formData,
    });

    if (!request.ok) {
        throw new Error('failed to create note!');
    }

    const data: Note[] = await request.json();
    return {
        data: data,
        status: request.status,
    };
};

export const editNote = async (note: Note): Promise<{ data: Note[], status: number }> => {
    const formData = new FormData();
    formData.append('userId', 'sdfklsçdf');
    formData.append('content', note.content);
    formData.append('datetime', new Date().toISOString());
    formData.append('title', note.title);
    formData.append('categorie', note.categorie);
    formData.append('noteId', note.noteId);

    const request = await fetch(`${baseUrl}/notes`, {
        method: 'SET',
        body: formData,
    });

    if (!request.ok) {
        throw new Error('failed to create note!');
    }

    const data: Note[] = await request.json();
    return {
        data: data,
        status: request.status,
    };
}

export const deleteNote = async (noteId: string): Promise<number> => {
    const formData = new FormData();
    formData.append('noteId', noteId);

    const request = await fetch(`${baseUrl}/notes`, {
        method: 'DELETE',
        body: formData,
    });

    if (!request.ok) {
        throw new Error('failed to create note!');
    }

    return request.status;
}