import React from "react";
import './styles.css';
import Logo from '../../assets/Logo.png'

function Footer() {
    return (
        <div className="footer">
            <img style={{objectfit: 'contain'}} id='logo' src={Logo} />
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por: Ruan Vítor</span>
            <nav className="footer-navigation">
                <ul className="footer-list">
                    <a href="./index.html">
                        <li>Home</li>
                    </a>
                    <a href="./Contato.html">
                        <li>Contato</li>
                    </a>
                    <a href="./Fotos.html">
                        <li>Fotos</li>
                    </a>
                    <a href="./comentarios.html">
                        <li>Comentários</li>
                    </a>
                </ul>
            </nav>
        </div>
    )
}

export default Footer;