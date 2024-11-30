import { useState, useEffect } from "react";
import NoteDetails from "../../components/NoteDetails";
import Nav from "./components/Nav";
import { HomeContainer } from "./styles";
import Note from "../../interfaces/note";
import { useAuth } from "../../contexts/Auth";
import { getNotes } from "../../services/notes";
import NoteComponent from "../../components/Note";

const newNote: Note  = {
    title: 'Nova nota',
    content: '',
    _id: '',
    datetime: ''
}

export default function Home() {
    const [showNoteDetails, setShowNoteDetails] = useState(false);
    const [notes, setNotes] = useState<Note[] | []>([]);
    const [selectedNote, setSelectedNote] = useState<Note | null>(null);
    const [selectedNoteNew, setSelectedNoteNew] = useState<Note | null>(null);
    const [typeNote, setTypeNote] = useState<'new' | 'old'>('new');
    const { userId} = useAuth();

    const fetchNotes = async () => {
        if (!userId) return;
        const data = await getNotes(userId);
        setNotes(data);
    };

    const onClose = () => {
        fetchNotes()
        setSelectedNote(null)
        setSelectedNoteNew(null);

    }

    useEffect(() => {
        fetchNotes();
    }, []);

    useEffect(() => {
        setShowNoteDetails(true);
    }, [selectedNote, selectedNoteNew]);

    const onClickNew = (note: Note) => {
        setTypeNote('new')
        setSelectedNoteNew(note);
    }

    const clickOld = (note: Note) => {
        setTypeNote('old')
        setSelectedNote(note);
    }

    return (
        <HomeContainer>
            <Nav />
            {selectedNote && typeNote === "old" && (
                <NoteDetails
                    note={selectedNote}
                    showNoteDetails={showNoteDetails}
                    setShowNoteDetails={setShowNoteDetails}
                    mode="old"
                    onCloseDetails={onClose}
                />
            )}

            {selectedNoteNew && typeNote === "new" &&(
                    <NoteDetails
                        note={selectedNoteNew}
                        showNoteDetails={showNoteDetails}
                        setShowNoteDetails={setShowNoteDetails}
                        mode="new"
                        onCloseDetails={onClose}
                    />
                )}



            <div style={{ display: 'flex', gap: '1rem', width: '100%', flexWrap: 'wrap', padding: '1rem', boxSizing: 'border-box'}}>
                <NoteComponent isNewNote={true} onClick={() => onClickNew(newNote)}/>
                {notes.length > 0 ? (
                    notes.map((note) => (
                        <NoteComponent note={note} isNewNote={false} onClick={() => clickOld(note)}/>
                    ))
                ) : (
                    <></>
                )}
            </div>
        </HomeContainer>
    );
}
