import { useContext } from 'react';

import Note from './Note'
import { NoteContext } from '../contexts/NoteContexts'

import '../css/NoteList.css'

function NotesList() {
    const { list, removeNote } = useContext(NoteContext);
    
    return (
        <>
            <h3>Hay {list.length} notas almacenadas</h3>
            <div className="noteList">
                {list.map((note) => (
                    <Note key={note.id} {...note} />
                ))}
            </div>
        </>
    )
}

export default NotesList;