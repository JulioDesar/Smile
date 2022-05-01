import React from "react";
import BtntTOP from "../../Components/BtntTOP";
import Footer from "../../Components/Footer";

import Navbar from "../../Components/Navbar";
import "./style.css";

function Home() {
    return (
        <section className="Home-container" id="home">
            <Navbar />

            <article className="primeira__section container" id="Home">
                <section>
                    <h1 className="title">Bem vindo</h1>
                    <p className="paragrafo">
                        A Smile é uma clinica especializada em cuidar de você,
                        do seu sorriso e do seu sono. Trabalhamos com alta
                        tecnologia, oferecemos diferentes especialidades e temos
                        credibilidade no mercado há mais de 15 anos.
                    </p>
                </section>
                <figure>
                    <img
                        className="img-fluid"
                        src="/imgHomeDente.png"
                        alt="Foto de exemplo"
                    />
                </figure>
            </article>
            <article className="segunda__section">
                <section className="container" id="Tratamentos">
                    <h1 className="title">Tratamentos</h1>
                    <figure>
                        <img src="/imgHomeDente2.png" alt="Imagem de exemplo" />
                        <figcaption className="paragrafo">
                            Realizamos tratamentos de limpeza, remoção de
                            tártaro, aplicação de flúor, restauração, orientação
                            de práticas educativas de higiene e saúde bucal, a
                            fim de promover o bom estado dos dentes, da gengiva
                            e obter uma boa qualidade da mordida. Efetuamos o
                            diagnóstico sobre qualquer problema que você
                            desenvolva na boca e providenciamos o devido
                            encaminhamento para as outras especialidades. Faça a
                            sua consulta e mantenha seus dentes sempre
                            saudáveis!
                        </figcaption>
                    </figure>
                </section>
            </article>
            <article className="terceira__section container" id="QuemSomos">
                <h1 className="title">Conheça a Smile</h1>
                <div>
                    <p className="paragrafo">
                        A Smile possui duas unidades de atendimento que atuam na
                        reabilitação oral, em clínicas próprias na zona Sul de
                        São Paulo, com infraestrutura criada para oferecer
                        conforto e segurança aos pacientes, e equipamentos
                        tecnologicamente avançados que proporcionam atendimento
                        com excelência.
                    </p>
                    <p className="paragrafo">
                        Nossos profissionais possuem mais de 29 anos de
                        experiência com especialização em várias áreas da
                        odontologia.
                    </p>
                    <p className="paragrafo">
                        A Smile tem como missão levar tratamento odontológico
                        completo e eficaz, de forma acessível para todos.
                    </p>
                    <p className="paragrafo">
                        Especialização, competência, qualidade dos produtos
                        utilizados, aliados à experiência de nossos
                        profissionais, possibilitam alcançar nosso principal
                        objetivo: saúde e estética dos nossos pacientes.
                    </p>
                    <p className="paragrafo">
                        Somos especialmente preocupados em levar informação
                        sobre a saúde bucal e proporcionar os melhores
                        tratamentos para os nossos pacientes, valorizando nossa
                        equipe e nosso trabalho.
                    </p>
                </div>
            </article>
            <article className="quarta__section">
                <section className="container">
                    <img src="/Map.png" alt="Imagem da localização" />
                    <article>
                        <h1 className="title">Nossa Unidade</h1>
                        <p className="paragrafo">
                            Unidade I - R. Moacir Padilha
                            <br />
                            <strong>Agende já sua consulta</strong>
                        </p>
                        <button>Ver mapa ampliado</button>
                    </article>
                </section>
            </article>
            <Footer />
            <BtntTOP />
        </section>
    );
}

export default Home;
