import axios from "axios";
import Moment from "moment";
import React, { useState } from "react";
import "./style.css";
import { FiX } from "react-icons/fi";
import Input from "../ModalInput/index";
import ModalAviso from "../ModalAviso/index";
import {
    BiUser,
    BiEnvelope,
    BiEditAlt,
    BiPhone,
    BiMap,
    BiCalendarAlt,
    BiCheck,
} from "react-icons/bi";

function ModalCadastro(props) {
    const user = <BiUser size={25} color="#2A69AC" />;
    const CPF = <BiEditAlt size={25} color="#2A69AC" />;
    const email = <BiEnvelope size={25} color="#2A69AC" />;
    const telefone = <BiPhone size={25} color="#2A69AC" />;
    const endereco = <BiMap size={25} color="#2A69AC" />;
    const calendario = <BiCalendarAlt size={25} color="#2A69AC" />;

    const [Unome, setUnome] = useState("");
    const [Ucpf, setUcpf] = useState("");
    const [Uemail, setUemail] = useState("");
    const [Utelefone, setUtelefone] = useState("");
    const [Uendereco, setUendereco] = useState("");
    const [Udata, setUdata] = useState(null);

    const [error, setError] = useState(false);
    const toggle = () => {
        setError(!error);
    };

    const [cadastro, setCadastro] = useState(false);
    const toggleCadastro = () => {
        setCadastro(!cadastro);
    };

    async function salvarCliente() {
        const dateFormat = Moment(Udata).format("DD/MM/YYYY");
        const bodyRequest = {
            nome: Unome,
            cpf: Ucpf,
            email: Uemail,
            telefone: Utelefone,
            endereco: Uendereco,
            aniversario: dateFormat,
        };

        console.log(bodyRequest);
        await axios
            .post("http://localhost:5000/cliente/", bodyRequest)
            .then(toggleCadastro)
            .catch(toggle);
    }

    return (
        <>
            {props.visible && (
                <div id="modal" className={"Modal-cadastro-fundo"}>
                    <section className="Modal-cadastro-container">
                        <div className="Modal-cadastro-close">
                            <FiX
                                size={20}
                                color="#63171B"
                                onClick={props.setClose}
                            />
                        </div>
                        <form className="Modal-cadastro-form">
                            <Input
                                icon={user}
                                type="text"
                                msg="Nome Completo"
                                size={40}
                                value={Unome}
                                onChange={(e) => setUnome(e.target.value)}
                            />
                            <Input
                                icon={CPF}
                                type="text"
                                msg="CPF"
                                size={30}
                                pattern="[0-9]{11}"
                                value={Ucpf}
                                onChange={(e) =>
                                    Number(setUcpf(e.target.value))
                                }
                            />
                            <Input
                                icon={email}
                                type="email"
                                msg="E-mail"
                                size={40}
                                value={Uemail}
                                onChange={(e) => setUemail(e.target.value)}
                            />
                            <Input
                                icon={telefone}
                                type="tel"
                                msg="Telefone"
                                size={30}
                                pattern="[0-9]{5}-[0-9]{4}"
                                value={Utelefone}
                                onChange={(e) =>
                                    Number(setUtelefone(e.target.value))
                                }
                            />
                            <Input
                                icon={endereco}
                                type="text"
                                msg="Endereço"
                                size={53}
                                value={Uendereco}
                                onChange={(e) => setUendereco(e.target.value)}
                            />
                            <Input
                                icon={calendario}
                                type="date"
                                value={Udata}
                                onChange={(e) => Date(setUdata(e.target.value))}
                            />
                        </form>
                        <form>
                            <label
                                className="button-check"
                                onClick={salvarCliente}
                            >
                                <BiCheck size={25} color="#1C4532" />
                                <text>Confirmar</text>
                            </label>
                            <label
                                className="button-cancel"
                                onClick={props.setClose}
                            >
                                <FiX size={25} color="#63171B" />
                                <text>Cancelar</text>
                            </label>
                        </form>
                    </section>
                </div>
            )}
            <ModalAviso
                msg="Falha ao cadastrar cliente"
                tipo={false}
                visible={error}
                setClose={toggle}
            />
            <ModalAviso
                msg="Cadastro foi concluido com sucesso!"
                tipo={true}
                visible={cadastro}
                setClose={toggleCadastro}
            />
        </>
    );
}

export default ModalCadastro;
