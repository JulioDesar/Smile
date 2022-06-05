import axios from "axios";
import Moment from "moment";
import React, { useState } from "react";
import "./style.css";
import { FiX } from "react-icons/fi";
import Input from "../ModalInput/index";
import ModalAviso from "../ModalAviso/index";
import { BiEditAlt, BiCalendarAlt, BiCheck } from "react-icons/bi";

function ModalConsulta(props) {
    const CPF = <BiEditAlt size={25} color="#2A69AC" />;
    const calendario = <BiCalendarAlt size={25} color="#2A69AC" />;
    const [msg, setMsg] = useState("");
    const toggleMsg = (props) => {
        setMsg(props);
    };

    const [cliente, setCliente] = useState("");
    const [data, setData] = useState("");
    const [descricao, setDescricao] = useState("");
    const [cli, setCli] = useState({});

    const [error, setError] = useState(false);
    const toggle = () => {
        setError(!error);
    };

    const [cadastro, setCadastro] = useState(false);
    const toggleCadastro = () => {
        setCadastro(!cadastro);
    };

    async function salvarConsulta() {
        const dateFormat = Moment(data).format("DD/MM/YYYY hh:mm:ss");

        await axios
            .get(
                `https://smile-dents-api.herokuapp.com/cliente/buscaCpf?cpf=${cliente}`
            )
            .then((resp) => setCli(resp.data))
            .catch(
                toggle,
                toggleMsg("Não existe cliente com esse CPF cadastrado!")
            );

        const bodyRequest = {
            cliente_ID: cli,
            data_consulta: dateFormat,
            descricao: descricao,
            status: "AGENDADO",
        };

        await axios
            .post(
                "https://smile-dents-api.herokuapp.com/consulta/",
                bodyRequest
            )
            .then(toggleCadastro)
            .catch(toggle, toggleMsg("Falha ao marcar consulta"));
    }

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
                                type="text"
                                msg="CPF"
                                size={30}
                                value={cliente}
                                onChange={(e) =>
                                    Number(setCliente(e.target.value))
                                }
                            />
                            <Input
                                icon={calendario}
                                type="datetime-local"
                                value={data}
                                onChange={(e) => setData(e.target.value)}
                            />
                            <textarea
                                placeholder="Descrição"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                            />
                        </form>

                        <form>
                            <label
                                className="button-check"
                                onClick={salvarConsulta}
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
                msg={msg}
                tipo={false}
                visible={error}
                setClose={toggle}
            />
            <ModalAviso
                msg="Sua consulta foi marcada 
                com sucesso"
                tipo={true}
                visible={cadastro}
                setClose={toggleCadastro}
            />
        </>
    );
}

export default ModalConsulta;
