import React from 'react';
import '../styles/NotFound.scss'

const NotFound = () => {
  return (
    <div className="error-message">
      <h2>Error 404: La página no fué encontrada</h2>
      <p>La sección o articulo que estas buscando, no la encontramos, te invitamos a intentar de nuevo desde el home de la página</p>
      <a href="/Home">Ir al home de Yard shop</a>
    </div>
  );
}

export default NotFound;
