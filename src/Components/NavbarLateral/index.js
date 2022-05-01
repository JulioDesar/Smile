import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { BiUser, BiClipboard } from "react-icons/bi";

export default function NavbarLateral() {
    return (
        <section className="navBarLateral-Container">
            <div>
                <img width={70} src="/logoSmile.svg" alt="Logo da Smile" />
                <img width={70} src="/Smile.svg" alt="Logo da Smile" />
            </div>
            <hr className="line" />
            <ul className="navBarLateral-list">
                <li>
                    <Link to="/user/adminclientes">
                        <text>
                            <BiUser size={25} color="#2A69AC" /> Clientes
                        </text>
                    </Link>
                </li>
                <div className="square" />
                <li>
                    <Link to="/user/adminconsultas">
                        <text>
                            <BiClipboard size={25} color="#2A69AC" /> Consultas
                        </text>
                    </Link>
                </li>
            </ul>
        </section>
    );
}
