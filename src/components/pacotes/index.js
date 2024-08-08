import React from "react";
import {
    FaHotel,
    FaPlane,
    FaWalking,
    FaBus,
  } from "react-icons/fa";

function Pacotes({ name, valorAnterior, valorAtual, description }) {
    return (
        <div className="pacotes-grid">
            <div className="card-pacote">
                <div className="pacote-header">
                    <h3>{name}</h3>
                    <div className="preco">
                        <span className="preco-anterior">{valorAnterior}</span>
                        <span className="preco-atual">{valorAtual}</span>
                    </div>
                </div>
                <p>
                    {description}
                </p>
                <p>Incluem:</p>
                <ul>
                    <li>
                        <FaHotel /> Hospedagem em hotéis 4 estrelas
                    </li>
                    <li>
                        <FaPlane /> Passagens aéreas ida e volta
                    </li>
                    <li>
                        <FaWalking /> Passeios guiados nas cidades
                    </li>
                    <li>
                        <FaBus /> Transporte entre as cidades
                    </li>
                </ul>
                <button type="button" className="btn-comprar">
                    Comprar
                </button>
            </div>
        </div>
    );
}

export default Pacotes;