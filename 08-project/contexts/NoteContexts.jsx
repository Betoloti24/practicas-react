import { createContext, useState } from "react";

const NoteContext = createContext({});

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

function NoteProvider({ children }) {
    const [list, setList] = useState(original_list);

    function addNote(title, content, author, date) {
        const newNote = {
            'id': list.length + 1,
            'title': title,
            'content': content,
            'author': author,
            'date': date
        }
        setList([...list, newNote]);
    }

    return (
        <NoteContext.Provider value={ { list, addNote } }>
            {children}
        </NoteContext.Provider>
    );
}

export { NoteContext, NoteProvider };