import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
import { FiSettings, FiTrash2 } from "react-icons/fi";
import { BiCircle } from "react-icons/bi";

function TableConsulta() {
    const [consultas, setConsultas] = useState([]);

    async function carregarConsultas() {
        try {
            await axios
                .get("https://smile-dents-api.herokuapp.com/consulta/")
                .then((resp) => setConsultas(resp.data));
        } catch (err) {
            console.error(err);
        }
    }

    async function deletarConsultas(consulta) {
        await axios
            .delete(
                `https://smile-dents-api.herokuapp.com/consulta/${consulta}`
            )
            .then(refreshPage)
            .catch((err) => {
                console.log(err);
            });
    }

    async function mudarStatus(consulta, status) {
        const body = {
            status: mudar(status),
        };

        await axios
            .put(
                `https://smile-dents-api.herokuapp.com/consulta/${consulta}`,
                body
            )
            .then(refreshPage)
            .catch((err) => {
                console.log(err);
            });
    }

    function mudar(props) {
        if (props == "AGENDADO") {
            return "DISPONIVEL";
        }

        if (props == "DISPONIVEL") {
            return "CANCELADO";
        }

        if (props == "CANCELADO") {
            return "AGENDADO";
        }
    }

    function refreshPage() {
        window.location.reload(false);
    }

    const status = (props) => {
        if (props == "AGENDADO") {
            return <BiCircle size={25} color="0BC5EA" />;
        }

        if (props == "DISPONIVEL") {
            return <BiCircle size={25} color="68D391" />;
        }

        if (props == "CANCELADO") {
            return <BiCircle size={25} color="FC8181" />;
        }
    };

    useEffect(() => {
        carregarConsultas();
    }, []);

    return (
        <table className="table-consulta" cellPadding={0} cellSpacing={0}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Status</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                {consultas.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.cliente_ID.nome}</td>
                        <td>{item.data_consulta}</td>
                        <td>{item.descricao}</td>
                        <td>
                            <div
                                className="onHover"
                                onClick={() =>
                                    mudarStatus(item.id, item.status)
                                }
                            >
                                {status(item.status)}
                            </div>
                        </td>
                        <td>
                            <div className="table-opcoes">
                                <FiSettings
                                    size={18}
                                    style={{ cursor: "pointer" }}
                                    color="#1A365D"
                                />
                                <FiTrash2
                                    size={18}
                                    style={{ cursor: "pointer" }}
                                    color="#E53E3E"
                                    onClick={() => deletarConsultas(item.id)}
                                />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TableConsulta;
