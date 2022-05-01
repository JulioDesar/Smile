import React, { useState } from "react";
import "./style.css";
import TableConsulta from "../../Components/TableConsulta";
import NavBar from "../../Components/NavbarLateral";
import NavbarAdmin from "../../Components/NavbarAdmin";
import Input from "../../Components/ModalInput";
import { BiClipboard, BiSearch } from "react-icons/bi";
import ModalConsulta from "../../Components/ModalConsulta";

function AdminConsultas() {
    const [modal, setModal] = useState();

    const toggle = () => {
        setModal(!modal);
    };
    const buscar = <BiSearch color="#2A69AC" />;
    const modalForm = (
        <ModalConsulta tipo={true} visible={modal} setClose={toggle} />
    );
    return (
        <div className="AdminConsultas">
            <nav>
                <NavBar />
            </nav>
            <nav className="navbarConsultas">
                <NavbarAdmin name="Consultas" />
            </nav>
            <section className="inputAdmin">
                <Input
                    icon={buscar}
                    type="text"
                    msg="Informe o CPF"
                    size={40}
                />
                <form className="button-modal" onClick={toggle}>
                    <BiClipboard size={25} color="#1C4532" />+
                    <label>Nova Consulta</label>
                </form>
            </section>
            <section className="AdminConsultas-Container">
                <div className="tabela-consulta">
                    <TableConsulta />
                </div>
            </section>
            {modalForm}
        </div>
    );
}

export default AdminConsultas;
