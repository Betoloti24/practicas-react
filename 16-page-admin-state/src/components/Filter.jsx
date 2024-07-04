
import { useState } from 'react';
import '../css/components/Filter.css';

function Filter() {
    const [natural, setNatural] = useState(false);

    function handlePeopleTypeChange(e) {
        const value = e.target.value;
        if (value === "Natural") {
            setNatural(true);
        }else if (value === "Jurídica"){
            setNatural(false);
        }
    }

    return (
        <article className="filters">
            <h3>Aplicar Filtros</h3>
            <form>
                <select name="select-segment" aria-label="Selecciona un Segmento..." required onChange={null}>
                    <option defaultValue={true} disabled value="">
                        Selecciona un Segmento...
                    </option>
                    <option>Open Finance</option>
                    <option>Credito Digital</option>
                    <option>Blockchain</option>
                    <option>Crypto</option>
                </select>
                <hr />
                <select name="select-municipe" aria-label="Selecciona un Municipio..." required onChange={null}>
                    <option defaultValue={true} disabled value="">
                        Selecciona un Municipio...
                    </option>
                    <option>Bucaramanga</option>
                    <option>Bogotá D.C.</option>
                    <option>Medellín</option>
                    <option>Cali</option>
                </select>
                <select name="select-departamento" aria-label="Selecciona un Departamento..." required onChange={null}>
                    <option defaultValue={true} disabled value="">
                        Selecciona un Departamento...
                    </option>
                    <option>Departamento 1</option>
                    <option>Departamento 2</option>
                    <option>Departamento 3</option>
                    <option>Departamento 4</option>
                </select>
                <hr />
                <select name="select-people-type" aria-label="Selecciona un Tipo de Persona..." required onChange={handlePeopleTypeChange}>
                    <option defaultValue={true} disabled value="">
                        Selecciona un Tipo de Persona...
                    </option>
                    <option>Jurídica</option>
                    <option>Natural</option>
                </select>
                <select name="select-genero" aria-label="Selecciona un Genero..." required disabled={!natural} onChange={null}>
                    <option defaultValue={true} disabled value="">
                        Selecciona un Genero...
                    </option>
                    <option>Mujer</option>
                    <option>Hombre</option>
                </select>
                <select name="select-old" aria-label="Selecciona una Edad..." required disabled={!natural} onChange={null}>
                    <option defaultValue={true} disabled value="">
                        Selecciona una Edad...
                    </option>
                    <option>Juventud (14-26)</option>
                    <option>Adultos (27-59)</option>
                    <option>Tercera Edad (60+)</option>
                </select>

            </form>
        </article>
    )
}

export default Filter;