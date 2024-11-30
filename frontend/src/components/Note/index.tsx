import Note from "../../interfaces/note";
import { NoteContainer, StyledButton } from "./style";

interface NoteComponentProps {
    note?: Note;
    isNewNote?: boolean;
    onClick: () => void;
}

export default function NoteComponent({note, isNewNote, onClick}: NoteComponentProps) {
    return (
        <NoteContainer onClick={onClick}>
            {isNewNote ? (
                <StyledButton>Criar nova</StyledButton>
            ) : (
                <>
                    <h2>{note ? note.title : ''}</h2>
                    <p>{note ? note.content : ''}</p>
                </>
            )}

        </NoteContainer>
    )
}