import React from 'react';

export default function Error() {
  return (
    <div className="error">
      <div className="error-number">404</div>
      <span className="notFound">
        Oups! La page que vous demandez n'existe pas.
      </span>
      <p className="return">Retourner sur la page d’accueil</p>
    </div>
  );
}
