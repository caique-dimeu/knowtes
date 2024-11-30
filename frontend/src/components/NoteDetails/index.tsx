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
import { useAuth } from "../../contexts/Auth";

interface NoteDetails {
  note?: Note;
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
  const [value, setValue] = useState('');
  const [backupValue, setBackupValue] = useState<string>("");
  const [isClosing, setIsClosing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [title, setTitle] = useState('');
  const { userId} = useAuth();

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const onChangeinput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
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
    if(!userId) return;

    if (mode === "new") {
      const newNote = await createNote({title, content: value }, userId);
      if (newNote) {
        //adicionar ao state de notas
        onClose(); 
      }
    }

    if(!note) return;

    const updatedNote = await editNote({ ...note, title, content: value });

    if (updatedNote) {
      setIsEditing(false);
    }
  };

  const confirmDeleteNote = async () => {
    if (!note) return;
    try {
      const res = await deleteNote(note._id);

      if(res === 200) {
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

    if(!note) return;
  
    setTitle(note.title);
    setValue(note.content);
  }, []);

  return (
    <>
      {showNoteDetails && (
        <NoteDetailsContainer>
          <StyledDialog isClosing={isClosing}>
            <input value={title} onChange={onChangeinput}></input>
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
