import React from "react";
import Flag from "react-world-flags";

function Destino({image, flag, name, description}){
    return(
        <div className="card-destino">
          <img
          src={image}
          alt={name}
          className="imagem-destino"
          />
          {name}
          <h3>
            <Flag code={flag} height="16" className="bandeira" /> {name}
          </h3>
          <p>
          {description}
          </p>
        </div>
    );
}

export default Destino;