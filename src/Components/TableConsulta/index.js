import React from "react";
import "./style.css";
import { FiSettings, FiTrash2 } from "react-icons/fi";
import { BiCircle } from "react-icons/bi";

function TableConsulta() {
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
                <tr>
                    <td>01</td>
                    <td>Julio Cesar</td>
                    <td>01/05/2022 - 15:30</td>
                    <td>Consulta de rotina</td>
                    <td>
                        <div className="onHover">
                            <BiCircle size={25} color="FC8181" />
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
                            />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>02</td>
                    <td>Julio Cesar</td>
                    <td>01/05/2022 - 15:30</td>
                    <td>Consulta de rotina</td>
                    <td>
                        <div className="onHover">
                            <BiCircle size={25} color="0BC5EA" />
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
                            />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>03</td>
                    <td>Julio Cesar</td>
                    <td>01/05/2022 - 15:30</td>
                    <td>Consulta de rotina</td>
                    <td>
                        <div className="onHover">
                            <BiCircle size={25} color="68D391" />
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
                            />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default TableConsulta;
