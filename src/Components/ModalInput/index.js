import React from "react";
import "./style.css";

export default function ModalInput(props) {
    return (
        <label className="Modal-input-container">
            {props.icon}
            <input
                type={props.type}
                placeholder={props.msg}
                size={props.size}
                value={props.value}
                pattern={props.pattern}
                onChange={props.onChange}
                className="Modal-input"
            />
        </label>
    );
}
