import Note from "../interfaces/note";

const baseUrl = "http://localhost:3000";

export const getNotes = async (userId: string): Promise<Note[]> => {
  const response = await fetch(`${baseUrl}/notes/user/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch notes!");
  }

  const data: Note[] = await response.json();
  return data;
};

export const createNote = async (note: {title: string, content: string}, userid: string): Promise<Note> => {
  const response = await fetch(`${baseUrl}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: note.title,
      content: note.content,
      userid: userid,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create note!");
  }

  const data: Note = await response.json();
  return data;
};

export const editNote = async (note: Note): Promise<Note> => {
  const response = await fetch(`${baseUrl}/notes/${note._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: note.title,
      content: note.content,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to update note!");
  }

  const data: Note = await response.json();
  return data;
};

export const deleteNote = async (noteId: string): Promise<number> => {
  const response = await fetch(`${baseUrl}/notes/${noteId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete note!");
  }

  return response.status;
};
