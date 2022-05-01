import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
    return (
        <nav className="Navbar-container">
            <img src="/lg-horizontal.svg" alt="Logo da Smile" />
            <div className="Navbar-container-humburge">
                <FiMenu size={25} color="#2A69AC" />
            </div>
            <ul>
                <li>
                    <a href="#Home">Home</a>
                </li>
                <li>
                    <a href="#QuemSomos">Quem Somos</a>
                </li>
                <li>
                    <a href="#Tratamentos">Tratamentos</a>
                </li>
                <li>
                    <Link to="/login">Admin</Link>
                </li>
            </ul>
        </nav>
    );
}
