import React from "react";
import "./style.css";
import { FiCheckSquare, FiX, FiAlertTriangle } from "react-icons/fi";

function ModalAviso(props) {
    const msg = props.msg;
    const cor = props.tipo ? "#38A169" : "#E53E3E";
    const icon = props.tipo ? (
        <FiCheckSquare size={50} color="#38A169" />
    ) : (
        <FiAlertTriangle size={50} color="#E53E3E" />
    );

    return (
        <>
            {props.visible && (
                <div id="modal" className={"Modal-aviso-fundo"}>
                    <section className="Modal-aviso-container">
                        <div className="Modal-aviso-close">
                            <FiX
                                size={20}
                                color="#63171B"
                                onClick={props.setClose}
                            />
                        </div>
                        {icon}
                        <h2 style={{ color: `${cor}` }}>{msg}</h2>
                    </section>
                </div>
            )}
        </>
    );
}

export default ModalAviso;
