import { useEffect, useState } from "react";
import Note from "../../interfaces/note";
import {
  StyledDialog,
  StyledTextarea,
  NoteDetailsContainer,
  CloseButton,
  ButtonsContainer,
  SaveButton,
  DeleteButton,
  StyledButton,
} from "./styles";
import { faClose, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createNote, deleteNote, editNote } from "../../services/notes";

interface NoteDetails {
  note: Note;
  showNoteDetails: boolean;
  setShowNoteDetails: React.Dispatch<React.SetStateAction<boolean>>;
  mode: "new" | "old";
  onCloseDetails?: () => void;
}

export default function NoteModal({
  note,
  showNoteDetails,
  setShowNoteDetails,
  mode,
  onCloseDetails,
}: NoteDetails) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(note.content);
  const [backupValue, setBackupValue] = useState<string>("");
  const [isClosing, setIsClosing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const startEditing = () => {
    setIsEditing(true);
    setBackupValue(value);
  };

  const startDeleting = () => setIsDeleting(true);

  const onCancel = () => {
    if (isEditing) {
      setIsEditing(false);
      setValue(backupValue);
      return;
    }

    if (isDeleting) {
      setIsDeleting(false);
      return;
    }
  };

  const onClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      if (onCloseDetails) onCloseDetails();
      setShowNoteDetails(false);
    }, 300);
  };

  const saveChanges = async () => {
    try {
      const res =
        mode === "old" ? await editNote(note) : await createNote(note);
      if (res.status === 200) {
        setIsEditing(false);
        setBackupValue("");
      }
    } catch {
      console.error("failed to save");
    }
  };

  const confirmDeleteNote = async () => {
    try {
      const res = await deleteNote(note.noteId);
      if (res === 200) {
        setIsDeleting(false);
        onClose();
      }
    } catch {
      console.error("failed to delete");
    }
  };

  useEffect(() => {
    if (mode === "new") {
      setIsEditing(true);
    }
  }, []);

  return (
    <>
      {showNoteDetails && (
        <NoteDetailsContainer>
          <StyledDialog isClosing={isClosing}>
            <h2>{note.title}</h2>
            <CloseButton onClick={onClose}>
              <FontAwesomeIcon icon={faClose} size="lg" />
            </CloseButton>
            <StyledTextarea
              value={value}
              onChange={onChange}
              readOnly={!isEditing}
              isEditing={isEditing}
            />
            <ButtonsContainer>
              {!isEditing && !isDeleting && (
                <>
                  <StyledButton onClick={startEditing}>
                    <FontAwesomeIcon icon={faEdit} size="lg" />
                  </StyledButton>
                  <StyledButton onClick={startDeleting}>
                    <FontAwesomeIcon icon={faTrashAlt} size="lg" />
                  </StyledButton>
                </>
              )}

              {(isEditing || isDeleting) && (
                <StyledButton onClick={onCancel}>
                  <span>Cancelar</span>
                </StyledButton>
              )}

              {isEditing && (
                <SaveButton onClick={saveChanges}>
                  <span>Salvar</span>
                </SaveButton>
              )}

              {isDeleting && (
                <DeleteButton onClick={confirmDeleteNote}>
                  <span>Sim, quero deletar</span>
                </DeleteButton>
              )}
            </ButtonsContainer>
          </StyledDialog>
        </NoteDetailsContainer>
      )}
    </>
  );
}
