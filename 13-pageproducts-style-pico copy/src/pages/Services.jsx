import { useState } from "react";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

import s1 from '../assets/servicio 1.jpeg';
import s2 from '../assets/servicio 2.jpeg';
import p1 from '../assets/perfil 1.jpg';
import p2 from '../assets/perfil 2.jpg';
import '../css/Services.css';

function Services() {
    const [open, setOpen] = useState(false);

    function modalOpenClick(e) {
        e.preventDefault();
        setOpen(true);
    }

    function modalCloseClick(e) {
        e.preventDefault();
        setOpen(false);
    }

    return (
        <>
            <NavBar />
            <main className="container-fluid">
                <h2>Lista de Servicios</h2>
                <div className="grid">
                    <article className="service" role="group">
                        <div className="service-title">
                            <img src={s1} alt="Servicio 1" />
                            <h3>Servicio 1</h3>
                        </div>
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facere, ducimus eius assumenda aliquam quis?</p>
                        </div>
                    </article>
                    <article className="service" role="group">
                        <div className="service-title">
                            <img src={s2} alt="Servicio 1" />
                            <h3>Servicio 2</h3>
                        </div>
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facere, ducimus eius assumenda aliquam quis?</p>
                        </div>
                    </article>
                </div>
                <hr />
                <h2>Testimonios</h2>
                <article className="testimonial" role="group">
                    <img src={p1} alt="Perfil 1" />
                    <blockquote>
                        “Design is a funny word. Some people think
                        design means how it looks. But of course, if
                        you dig deeper, it's really how it works.”
                        <footer>
                            <cite>— Steve Jobs</cite>
                        </footer>
                    </blockquote>
                </article>
                <article className="testimonial" role="group">
                    <blockquote>
                        “Design is a funny word. Some people think
                        design means how it looks. But of course, if
                        you dig deeper, it's really how it works.”
                        <footer>
                            <cite>— Steve Jobs</cite>
                        </footer>
                    </blockquote>
                    <img src={p2} alt="Perfil 1" />
                </article>

                <hr />

                <div role="group">
                    <details className="accordion" open>
                        <summary>Formulario</summary>
                        <form>
                            <fieldset>
                                <label>
                                    First name
                                    <input
                                        type="text"
                                        name="first_name"
                                        placeholder="First name"
                                    />
                                </label>
                                <label>
                                    Email
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                    />
                                </label>
                            </fieldset>

                            <input
                                type="submit"
                                value="Subscribe"
                            />
                        </form>
                    </details>
                    <details className="accordion">
                        <summary>Modal</summary>
                        <p>Pulse el boton para probar el modal</p>
                        <button onClick={modalOpenClick}>Pulse el boton</button>

                        <dialog open={open}>
                            <article>
                                <h2>Confirm Your Membership</h2>
                                <p>
                                    Thank you for signing up for a membership!
                                    Please review the membership details below:
                                </p>
                                <ul>
                                    <li>Membership: Individual</li>
                                    <li>Price: $10</li>
                                </ul>
                                <footer>
                                    <button className="secondary" onClick={modalCloseClick}>
                                        Cancel
                                    </button>
                                    <button className="primary" onClick={modalCloseClick}>
                                        Confirm
                                    </button>
                                </footer>
                            </article>
                        </dialog>
                    </details>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Services;