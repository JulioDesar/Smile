import React from "react";
import "./style.css";
// import { BiUser } from "react-icons/bi";

export default function ModalInput(props) {
    return (
        <label className="Modal-input-container">
            {props.icon}
            <input
                type={props.type}
                placeholder={props.msg}
                size={props.size}
                className="Modal-input"
            />
        </label>
    );
}
