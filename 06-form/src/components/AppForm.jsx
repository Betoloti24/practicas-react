import { Formik, Form, Field, ErrorMessage } from 'formik'

function AppForm(params) {
    return (
        <Formik
            initialValues={{
                name: 'Nombre',
                email: 'Correo',
                message: 'Probando Mensaje'
            }}
            validate = {values => {
                // console.log(values);
                let errors = {};
                if (!values.name) {
                    errors.name = 'El nombre es requerido';
                }
                if (!values.email) {
                    errors.email = 'El correo es requerido';
                }/*Expresion regular para correos*/ 
                else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = 'Correo invalido';
                }
                return errors;
            }}
            onSubmit = {(values, {setSubmitting}) => {
                console.log(values);
            }}
        >
            {
                ({isSubmitting, values}) => (
                    <Form>
                         <div>
                            <label htmlFor="name">Nombre: </label>
                            <Field type="text" name="name"></Field>
                            <ErrorMessage name="name" component="p"/>
                         </div>
                         <div>
                            <label htmlFor="email">Correo: </label>
                            <Field type="text" name="email"></Field>
                            <ErrorMessage name="email" component="p"/>
                         </div>
                         <div>
                            <label htmlFor="message">Mesanje: </label>
                            <Field component="textarea" value={values.message} name="message"></Field>
                         </div>
                         <button disabled={isSubmitting} type="submit">{ isSubmitting ? 'Enviando...': 'Enviar Mensaje' }</button>
                    </Form>
                )
            }
        </Formik>
    )
}

export default AppForm