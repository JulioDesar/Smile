import React from "react";
import "./style.css";
import Input from "../../Components/ModalInput/index";
import { Link } from "react-router-dom";
import { BiUser, BiKey } from "react-icons/bi";

function Login() {
    const email = <BiUser size={25} color="#2A69AC" />;
    const senha = <BiKey size={25} color="#2A69AC" />;
    return (
        <section className="Login-Container">
            <img width={150} src="./logoSmile.svg" alt="Logo da Smile" />
            <img
                width={150}
                src="./Smile.svg"
                alt="Smile"
                className="Login-Container-img"
            />
            <form>
                <Input icon={email} type="email" msg="E-mail" size={40} />
                <Input icon={senha} type="password" msg="Senha" size={40} />
                <Link to="/user/adminclientes">
                    <button className="Login-button">Entrar</button>
                </Link>
            </form>
        </section>
    );
}

export default Login;
