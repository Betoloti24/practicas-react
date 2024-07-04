import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useContext } from 'react';

import { NoteContext } from '../contexts/NoteContexts'

import '../css/NoteForm.css'

function NoteForm() {
    const { addNote } = useContext(NoteContext);

    return (
        <>
            <Formik
            initialValues={{title: "", content: "", author:"", date:""}}
            validate={values => {
                const errors = {};
                if (!values.title) {
                    errors.title = "Title is required";
                }
                if (!values.content) {
                    errors.content = "Content is required";
                }
                if (!values.author) {
                    errors.author = "Author is required";
                }
                if (!values.date) {
                    errors.date = "Date is required";
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                addNote(values.title, values.content, values.author, values.date);
                setSubmitting(false);
                values.title = "";
                values.content = "";
                values.author = "";
                values.date = "";
            }}
            >
                {
                    ({isSubmitting}) => (
                        <Form className="noteForm">
                            <h1>Lista de notas</h1>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <Field name="title" type="text" className="form-control" id="title" placeholder="Title" />
                                <ErrorMessage name="title" component="p" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Content</label>
                                <Field name="content" component="textarea" className="form-control" id="content" placeholder="Content" />
                                <ErrorMessage name="content" component="p" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="author">Author</label>
                                <Field name="author" type="text" className="form-control" id="author" placeholder="Author" />
                                <ErrorMessage name="author" component="p" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="date">Date</label>
                                <Field name="date" type="date" className="form-control" id="date" placeholder="Date" />
                                <ErrorMessage name="date" component="p" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </>
    )
    
}

export default NoteForm;