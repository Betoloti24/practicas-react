import { useContext } from 'react';

import { NoteContext } from "../contexts/NoteContexts";

import '../css/NoteDeleteButton.css'

function NoteDeleteButton({ id }) {
    let { removeNote } = useContext(NoteContext);
    
    return (
        <button className="noteDeleteButton" onClick={() => removeNote(id)}>Borrar</button>
    )
}

export default NoteDeleteButton;
