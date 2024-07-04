import { useEffect } from "react";
import { useState } from "react";

const original_list = [
    {
        'id': 1,
        'title': 'React',
        'content': 'React es una librería de JavaScript para crear interfaces de usuario. Es una biblioteca de código abierto y de código cerrado que se basa en el modelo de componentes de React.',
        'author': 'Roiberth Gonzalez',
        'date': '2020-01-01'
    },
    {
        'id': 2,
        'title': 'React Native',
        'content': 'React Native es una librería de JavaScript para crear aplicaciones móviles. Es una biblioteca de código abierto y de código cerrado que se basa en el modelo de componentes de React.',
        'author': 'Roiberth Gonzalez',
        'date': '2020-01-02'
    },
    {
        'id': 3,
        'title': 'Django',
        'content': 'Django es un framework de Python para el desarrollo de aplicaciones web. Es una biblioteca de código abierto y de código cerrado que se basa en el modelo de componentes de React.',
        'author': 'Roiberth Gonzalez',
        'date': '2020-01-03'
    },
    {
        'id': 4,
        'title': 'Vue',
        'content': 'Vue es una librería de JavaScript para crear interfaces de usuario. Es una biblioteca de código abierto y de código cerrado que se basa en el modelo de componentes de React.',
        'author': 'Roiberth Gonzalez',
        'date': '2020-01-04'
    },
    {
        'id': 5,
        'title': 'Angular',
        'content': 'Angular es una librería de JavaScript para crear interfaces de usuario. Es una biblioteca de código abierto y de código cerrado que se basa en el modelo de componentes de React.',
        'author': 'Roiberth Gonzalez',
        'date': '2020-01-05'
    }
]

const LOCAL_STORAGE_KEY = 'notes';

function useNotes() {
    const [notes, setNotes] = useState([]);

    useEffect ( () => {
        let localStorageNotes = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (localStorageNotes) {
            setNotes(JSON.parse(localStorageNotes));
        }
    }, []);
    
    useEffect ( () => {
        if (!notes || notes.length === 0) return;
        
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
    }, [notes]);

    function add(title, content, author, date) {
        const newNote = {
            'id': notes.length + 1,
            'title': title,
            'content': content,
            'author': author,
            'date': date
        }
        setNotes([...notes, newNote]);
    }

    function remove(id) {
        console.log(id);
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    }

    return { notes, add, remove};
}

export default useNotes;