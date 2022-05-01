import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function NotFound() {
    return (
        <section className="NotFound-Container">
            <img width={150} src="/logoSmile.svg" alt="Logo da Smile" />
            <article className="NotFound-Container-Text">
                <p>Error 404</p>
                <p>Página não encontrada</p>
            </article>
            <Link to="/">
                <button>Voltar</button>
            </Link>
        </section>
    );
}

export default NotFound;
