import NoteDeleteButton from './NoteDeleteButton';

import '../css/Note.css'

function Note({ id, title, content, author, date }) {
    return (
        <div className="note">
            <h3>{title}</h3>
            <p className='content'>{content}</p>
            <p className='author'>{author}</p>
            <p className='date'>{date}</p>
            <NoteDeleteButton className="noteDeleteButton" id={id} />
        </div>
    )
}

export default Note;