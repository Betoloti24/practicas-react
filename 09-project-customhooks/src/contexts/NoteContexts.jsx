import { createContext, useState } from "react";
import useNotes from "../hooks/useNotes";

const NoteContext = createContext({});

function NoteProvider({ children }) {
    const { notes, add, remove } = useNotes();

    // function addNote(title, content, author, date) {
    //     const newNote = {
    //         'id': list.length + 1,
    //         'title': title,
    //         'content': content,
    //         'author': author,
    //         'date': date
    //     }
    //     setList([...list, newNote]);
    // }

    return (
        <NoteContext.Provider value={ { list: notes, addNote: add, removeNote: remove }}>
            {children}
        </NoteContext.Provider>
    );
}

export { NoteContext, NoteProvider };