import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

import '../css/Productos.css';
import { useEffect, useState, us } from "react";

function Products() {
    return (
        <>
            <NavBar />
            <main className="container-fluid">
                <div className="dashboard grid-container">
                    <article className="filters">
                        <h3>Aplicar Filtros</h3>
                        <form>
                            <select name="select-segment" aria-label="Selecciona un Segmento..." required>
                                <option defaultValue={true} disabled value="">
                                    Selecciona un Segmento...
                                </option>
                                <option>Open Finance</option>
                                <option>Credito Digital</option>
                                <option>Blockchain</option>
                                <option>Crypto</option>
                            </select>
                            <hr />
                            <select name="select-municipe" aria-label="Selecciona un Municipio..." required>
                                <option defaultValue={true} disabled value="">
                                    Selecciona un Municipio...
                                </option>
                                <option>Bucaramanga</option>
                                <option>Bogotá D.C.</option>
                                <option>Medellín</option>
                                <option>Cali</option>
                            </select>
                            <select name="select-departamento" aria-label="Selecciona un Departamento..." required>
                                <option defaultValue={true} disabled value="">
                                    Selecciona un Departamento...
                                </option>
                                <option>Departamento 1</option>
                                <option>Departamento 2</option>
                                <option>Departamento 3</option>
                                <option>Departamento 4</option>
                            </select>
                            <hr />
                            <select name="select-people-type" aria-label="Selecciona un Tipo de Persona..." required>
                                <option defaultValue={true} disabled value="">
                                    Selecciona un Tipo de Persona...
                                </option>
                                <option>Persona Natural</option>
                                <option>Persona Jurídica</option>
                            </select>
                            <select name="select-genero" aria-label="Selecciona un Genero..." required>
                                <option defaultValue={true} disabled value="">
                                    Selecciona un Genero...
                                </option>
                                <option>Mujer</option>
                                <option>Hombre</option>
                            </select>
                            <select name="select-old" aria-label="Selecciona una Edad..." required>
                                <option defaultValue={true} disabled value="">
                                    Selecciona una Edad...
                                </option>
                                <option>Juventud (14-26)</option>
                                <option>Adulto (27-59)</option>
                                <option>3era Edad (60+)</option>
                            </select>

                        </form>
                    </article>

                    <article className="indicators">
                        <table class="striped">
                            <thead>
                                <tr>
                                    <th scope="col">Mes</th>
                                    <th scope="col">Año</th>
                                    <th scope="col">Monto</th>
                                    <th scope="col">Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">12</th>
                                    <td>2024</td>
                                    <td>1.458 COP</td>
                                    <td>88</td>
                                </tr>
                                <tr>
                                    <th scope="row">11</th>
                                    <td>2024</td>
                                    <td>1.458 COP</td>
                                    <td>88</td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td>2024</td>
                                    <td>1.458 COP</td>
                                    <td>88</td>
                                </tr>  
                                <tr>
                                    <th scope="row">9</th>
                                    <td>2024</td>
                                    <td>1.458 COP</td>
                                    <td>88</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>2024</td>
                                    <td>1.458 COP</td>
                                    <td>88</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>2024</td>
                                    <td>1.458 COP</td>
                                    <td>88</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>2024</td>
                                    <td>1.458 COP</td>
                                    <td>88</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>2024</td>
                                    <td>1.458 COP</td>
                                    <td>88</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>2024</td>
                                    <td>1.458 COP</td>
                                    <td>88</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>2024</td>
                                    <td>1.458 COP</td>
                                    <td>88</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>2024</td>
                                    <td>1.458 COP</td>
                                    <td>88</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>2024</td>
                                    <td>1.458 COP</td>
                                    <td>88</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>2024</td>
                                    <td>1.458 COP</td>
                                    <td>88</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>2024</td>
                                    <td>1.458 COP</td>
                                    <td>88</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>2024</td>
                                    <td>1.458 COP</td>
                                    <td>88</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>2024</td>
                                    <td>1.458 COP</td>
                                    <td>88</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>2024</td>
                                    <td>1.458 COP</td>
                                    <td>88</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th scope="row">Total Generado</th>
                                    <td>1.458.457 COP</td>
                                </tr>
                            </tfoot>
                        </table>
                    </article>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Products;