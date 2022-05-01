import React from "react";
import "./style.css";
import { FiSettings, FiTrash2 } from "react-icons/fi";

function TableCliente() {
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
                <tr>
                    <td>01</td>
                    <td>Caio Santos</td>
                    <td>caio.f@gmail.edu.br</td>
                    <td>(11) 9 4355-8899</td>
                    <td>R. Claudio Nunes</td>
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
                <tr>
                    <td>02</td>
                    <td>Caio Santos</td>
                    <td>caio.f@gmail.edu.br</td>
                    <td>(11) 9 4355-8899</td>
                    <td>R. Claudio Nunes</td>
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
            </tbody>
        </table>
    );
}

export default TableCliente;
