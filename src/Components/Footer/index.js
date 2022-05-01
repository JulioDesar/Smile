import React from "react";
import { FiPhone, FiClock } from "react-icons/fi";
import "./style.css";

function Footer() {
    return (
        <footer className="footer-container">
            <section>
                <article>
                    <div className="info">
                        <FiPhone />
                        <p>(11) 98765-4321</p>
                    </div>
                    <div className="info">
                        <FiPhone />
                        <p>(11) 98765-4321</p>
                    </div>
                    <div>
                        <div className="info">
                            <FiClock />
                            <p>Horário</p>
                        </div>
                        <p className="info">
                            Segunda à Sexta: 08h – 17h
                            <br />
                            Sábado: 08h00 – 11h30
                        </p>
                    </div>
                </article>
                <img src="/lg-normal.svg" alt="Logo da Smile" />
            </section>
            <p>SMILE | Todos os direitos reservados © 2022</p>
        </footer>
    );
}

export default Footer;
