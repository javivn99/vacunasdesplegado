import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Datos_Globales() {
    const baseUrl = "http://localhost:4004/vacunas";
    const [data, setData] = useState([]);

    let [dosisEntregadas, setDosisEntregadas] = useState(0);
    let [dosisAdministradas, setDosisAdministradas] = useState(0);
    let [pers_pauta_complet, setPers_pauta_complet] = useState(0);
    let [dosis_pfizer, setDosis_pfizer] = useState(0);
    let [dosis_moderna, setDosis_moderna] = useState(0);

    const peticionGet = async () => {
        await axios
            .get(baseUrl)
            .then((response) => {
                setData(response.data);
                // console.log(response.data);
                response.data.forEach(function (ccaa) {
                    //Dosis entregadas
                    dosisEntregadas += ccaa.dosis_pfizer + ccaa.dosis_moderna;

                    //Dosis Administradas
                    dosisAdministradas += ccaa.dosis_administradas;

                    //Nº Pers Pauta completa total
                    pers_pauta_complet += ccaa.pers_pauta_complet;

                    dosis_pfizer += ccaa.dosis_pfizer;//Sumo todas las de pfizer
                    dosis_moderna += ccaa.dosis_moderna; //Sumo todas las de moderna

                });
                setDosisEntregadas(dosisEntregadas);
                setDosisAdministradas(dosisAdministradas);
                setPers_pauta_complet(pers_pauta_complet);
                setDosis_pfizer(dosis_pfizer);
                setDosis_moderna(dosis_moderna);


            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        peticionGet();
    }, []);

    return (
        <div style={{textAlign: 'center'}}>
            <div>
                <h1>Datos globales agregados</h1>
                <br></br>
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Dosis entregadas en CCAA</th>
                        <th>Dosis administradas</th>
                        <th>Nº Personas con pauta completa</th>
                    </tr>
                </thead>
                <tbody>
                    <td>{dosisEntregadas}</td>
                    <td>{dosisAdministradas}</td>
                    <td>{pers_pauta_complet}</td>
                </tbody>
            </table>
        </div>




        /* FUNCIONA
        <div>
            <header>
                <h1>Datos globales agregados</h1>
            </header>
            <div>
                <div>
                    <h4>Dosis entregadas en CCAA</h4>
                    <span>{dosisEntregadas}</span>
                </div>
                <div>
                    <h4>Dosis administradas</h4>
                    <span>{dosisAdministradas}</span>
                </div>
                <div>
                    <h4>Nº Personas con pauta completa</h4>
                    <span>{pers_pauta_complet}</span>
                </div>
            </div>
        </div>
        */
    );
}

export default Datos_Globales;