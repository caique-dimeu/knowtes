import { useState } from "react";
import NoteDetails from "../../components/NoteDetails";
import Nav from "./components/Nav";
import { HomeContainer } from "./styles";

export default function Home() {
    const [showNoteDetails, setShowNoteDetails] = useState(true);
    return (
        <HomeContainer>
            <Nav />
            <NoteDetails 
                note={{title: 'aksdjals', datetime: 'asdasdasd', content: 'content', categorie: 'sadfjjslkdjf', noteId: 'sçdfksçifspdo'}} 
                showNoteDetails={showNoteDetails}
                setShowNoteDetails={setShowNoteDetails}
                mode="new"
            />
        </HomeContainer>
    );
}
