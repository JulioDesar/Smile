import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
import { FiSettings, FiTrash2 } from "react-icons/fi";

function TableCliente() {

    const [cliente, setCliente] = useState([]);

    async function carregarClientes() {
        const resp = await axios.get('http://localhost:5000/cliente/');
        setCliente(resp.data);
    }

    useEffect(() => {
        carregarClientes();
    }, [])

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
                {cliente.map(item =>
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
                            />
                        </div>
                    </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default TableCliente;
