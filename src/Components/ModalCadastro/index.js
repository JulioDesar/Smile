import React from "react";
import "./style.css";
import { FiX } from "react-icons/fi";
import Input from "../ModalInput/index";
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
                            />
                            <Input
                                icon={CPF}
                                type="number"
                                msg="CPF"
                                size={40}
                            />
                            <Input
                                icon={email}
                                type="email"
                                msg="E-mail"
                                size={40}
                            />
                            <Input
                                icon={telefone}
                                type="tel"
                                msg="Telefone"
                                size={30}
                                pattern="[0-9]{5}-[0-9]{4}"
                            />
                            <Input
                                icon={endereco}
                                type="text"
                                msg="Endereço"
                                size={53}
                            />
                            <Input icon={calendario} type="date" />
                        </form>
                        <form>
                            <label className="button-check">
                                <BiCheck size={25} color="#1C4532" />
                                <text>Confirmar</text>
                            </label>
                            <label className="button-cancel">
                                <FiX
                                    size={25}
                                    color="#63171B"
                                    onClick={props.setClose}
                                />
                                <text>Cancelar</text>
                            </label>
                        </form>
                    </section>
                </div>
            )}
        </>
    );
}

export default ModalCadastro;
