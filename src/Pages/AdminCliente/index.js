import React, { useState } from "react";
import "./style.css";
import TableCliente from "../../Components/TableCliente";
import NavBar from "../../Components/NavbarLateral";
import NavbarAdmin from "../../Components/NavbarAdmin";
import Input from "../../Components/ModalInput";
import { BiUser, BiSearch } from "react-icons/bi";
import ModalCadastro from "../../Components/ModalCadastro";

function AdminCliente() {
    const [modal, setModal] = useState();

    const toggle = () => {
        setModal(!modal);
    };
    const buscar = <BiSearch color="#2A69AC" />;
    const modalForm = (
        <ModalCadastro tipo={true} visible={modal} setClose={toggle} />
    );
    return (
        <div className="AdminCliente">
            <nav>
                <NavBar />
            </nav>
            <nav className="navbarAdmin">
                <NavbarAdmin name="Clientes" />
            </nav>
            <section className="inputAdmin">
                <Input
                    icon={buscar}
                    type="text"
                    msg="Informe o CPF"
                    size={40}
                />
                <form className="button-modal" onClick={toggle}>
                    <BiUser size={25} color="#1C4532" />+
                    <label>Novo Cliente</label>
                </form>
            </section>
            <section className="AdminCliente-Container">
                <div className="tabela-cliente">
                    <TableCliente />
                </div>
            </section>
            {modalForm}
        </div>
    );
}

export default AdminCliente;
