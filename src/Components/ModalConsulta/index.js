import React from "react";
import "./style.css";
import { FiX } from "react-icons/fi";
import Input from "../ModalInput/index";
import { BiEditAlt, BiCalendarAlt, BiCheck } from "react-icons/bi";

function ModalConsulta(props) {
    const CPF = <BiEditAlt size={25} color="#2A69AC" />;
    const calendario = <BiCalendarAlt size={25} color="#2A69AC" />;
    return (
        <>
            {props.visible && (
                <div id="modal" className={"Modal-consulta-fundo"}>
                    <section className="Modal-consulta-container">
                        <div className="Modal-consulta-close">
                            <FiX
                                size={20}
                                color="#63171B"
                                onClick={props.setClose}
                            />
                        </div>
                        <form className="Modal-consulta-form">
                            <Input
                                icon={CPF}
                                type="number"
                                msg="CPF"
                                size={30}
                            />
                            <Input icon={calendario} type="datetime-local" />
                            <textarea placeholder="Descrição" />
                        </form>

                        <form>
                            <label className="button-check">
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
        </>
    );
}

export default ModalConsulta;
