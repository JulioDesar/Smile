import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
import { FiSettings, FiTrash2 } from "react-icons/fi";

function TableCliente() {
    const [clientes, setClientes] = useState([]);

    async function carregarClientes() {
        try {
            await axios
                .get("http://localhost:5000/cliente/")
                .then((resp) => setClientes(resp.data));
        } catch (err) {
            console.error(err);
        }
    }

    async function deletarClientes(cliente) {
        await axios
            .delete(`http://localhost:5000/cliente/${cliente}`)
            .then(refreshPage)
            .catch((err) => {
                console.log(err);
                console.log(cliente);
            });
    }

    function refreshPage() {
        window.location.reload(false);
    }

    useEffect(() => {
        carregarClientes();
    }, []);

    return (
        <table className="table-cliente" cellPadding={0} cellSpacing={0}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                    <th>Endereço</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                {clientes.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                        <td>{item.email}</td>
                        <td>{item.telefone}</td>
                        <td>{item.endereco}</td>
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
                                    onClick={() => deletarClientes(item.id)}
                                />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TableCliente;
